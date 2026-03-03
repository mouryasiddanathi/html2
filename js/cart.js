// ============================================================
// cart.js  –  Shopping Cart Logic
// ============================================================
//
// WHAT IS THIS FILE?
//   Everything about the cart lives here:
//     • What items are in it
//     • Adding / removing / updating items
//     • Saving to localStorage (survives page refresh)
//     • Counting items (shown as the number on the cart icon)
//
// HOW LOCALSTORAGE WORKS:
//   localStorage is a key→value store built into every browser.
//   Data is saved as plain text, so we convert our array to
//   JSON (a text format) before saving, and parse it back when
//   loading.
//
//   localStorage.setItem("key", "value")  → save
//   localStorage.getItem("key")           → load (returns null if missing)
//   JSON.stringify(array)  → JavaScript array  →  JSON string
//   JSON.parse(string)     → JSON string        →  JavaScript array
//
// THIS FILE IS LOADED FIRST on every page so the cart data
// is always available to skr.js, checkout.js, etc.
// ============================================================


// ---- 1. LOAD THE SAVED CART ----
// On every page load we read from localStorage.
// If nothing is saved yet, we start with an empty array [].
let cart = JSON.parse(localStorage.getItem("skr-cart")) || [];

// Delivery option data (shipping speeds)
// Each option has an id, label, pricePaise, and days offset.
const deliveryOptions = [
  { id: "1", label: "FREE Shipping",  pricePaise: 0,    daysOffset: 7 },
  { id: "2", label: "₹4.99 Shipping", pricePaise: 499,  daysOffset: 3 },
  { id: "3", label: "₹9.99 Shipping", pricePaise: 999,  daysOffset: 1 }
];


// ---- 2. SAVE THE CART ----
// Called every time we change anything.  Keeps localStorage in sync.
function saveCart() {
  localStorage.setItem("skr-cart", JSON.stringify(cart));
}


// ---- 3. ADD AN ITEM ----
// productId  – which product (matches products[].id)
// quantity   – how many to add (an integer, e.g. 1, 2, 3)
function addToCart(productId, quantity) {
  // Does this product already exist in the cart?
  // Array.find() returns the object if found, or undefined if not.
  let matchingItem = cart.find((item) => item.productId === productId);

  if (matchingItem) {
    // Already in cart → just add more units
    matchingItem.quantity += quantity;
  } else {
    // Brand new → create a cart entry object and push it
    cart.push({
      productId,              // ES6 shorthand: same as productId: productId
      quantity,
      deliveryOptionId: "1"   // default: FREE shipping
    });
  }

  saveCart();
}


// ---- 4. REMOVE AN ITEM ----
// Array.filter() keeps every item EXCEPT the one we want to remove.
// (It creates a new array; we replace cart with it.)
function removeFromCart(productId) {
  cart = cart.filter((item) => item.productId !== productId);
  saveCart();
}


// ---- 5. UPDATE QUANTITY ----
// Called when the user types a new number in the quantity box.
function updateQuantity(productId, newQuantity) {
  const matchingItem = cart.find((item) => item.productId === productId);
  if (matchingItem) {
    matchingItem.quantity = newQuantity;
    saveCart();
  }
}


// ---- 6. UPDATE DELIVERY OPTION ----
// Called when the user clicks a different radio button on checkout.
function updateDeliveryOption(productId, deliveryOptionId) {
  const matchingItem = cart.find((item) => item.productId === productId);
  if (matchingItem) {
    matchingItem.deliveryOptionId = deliveryOptionId;
    saveCart();
  }
}


// ---- 7. TOTAL ITEM COUNT ----
// Used to show "3" on the cart icon.
// Array.reduce() accumulates a running total.
//   accumulator starts at 0
//   for each item, we add item.quantity to the accumulator
function calculateCartQuantity() {
  return cart.reduce((total, item) => total + item.quantity, 0);
}


// ---- 8. CLEAR THE CART ----
// Called after an order is placed successfully.
function clearCart() {
  cart = [];
  saveCart();
}


// ---- 9. UPDATE THE CART ICON BADGE ----
// Finds every element with class "cart-quantity" on the current page
// and updates its text content.
// querySelectorAll returns a NodeList; we use forEach to update each.
function updateCartBadge() {
  const badges = document.querySelectorAll(".cart-quantity");
  const total  = calculateCartQuantity();
  badges.forEach((badge) => {
    badge.textContent = total;
  });
}
