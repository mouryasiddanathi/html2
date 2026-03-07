
const products = [
{ id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6", image: "../images/products/athletic-cotton-socks-6-pairs.jpg", name: "Black and Gray Athletic Cotton Socks - 6 Pairs", rating: { stars: 4.5, count: 9.6 }, pricePaise: 10000, keywords: ["socks", "athletic", "clothing"] },
{ id: "15b6fc6f-327a-4ec4-896f-486349e85a3d", image: "../images/products/intermediate-composite-basketball.jpg", name: "Intermediate Size Basketball", rating: { stars: 4, count: 9.2 }, pricePaise: 200000, keywords: ["basketball", "sports", "ball"] },
{ id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e", image: "../images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg", name: "Adults Plain Cotton T-Shirt - 2 Pack", rating: { stars: 4.5, count: 9.6 }, pricePaise: 79900, keywords: ["tshirt", "clothing", "cotton"] },
{ id: "54e0eccd-8f36-462b-b68a-8182611d9add", image: "../images/products/6-piece-white-dinner-plate-set.jpg", name: "6-piece-white-dinner-plate-set", rating: { stars: 4, count: 9.0 }, pricePaise: 79000, keywords: ["plates", "glass ware", "plates combo"] },
{ id: "5968897c-4d27-4872-89f6-5bcb052746d7", image: "../images/products/backpack.jpg", name: "backpack (SKY Bags)", rating: { stars: 4.5, count: 9.8 }, pricePaise: 599000, keywords: ["bags", "Sky bags", "backpack"] },
{ id: "b86ae3ff-f612-4832-b62c-b20d2ed0c94e", image: "../images/products/bathroom-rug.jpg", name: "bathroom-rug", rating: { stars: 4, count: 9.0 }, pricePaise: 400000, keywords: ["bath tub", "glass bathroom tub", "bathroom accesaries"] },
{ id: "aaa2406c-b5e6-4360-a153-23d6c4a07e37", image: "../images/products/black-2-slot-toaster.jpg", name: "Bread toaster", rating: { stars: 3.5, count: 7.0 }, pricePaise: 369000, keywords: ["toaster", "bread toaster", "kitchen accessories"] },
{ id: "a42e22c2-7896-4a78-9fdc-8bff8d3bf7d7", image: "../images/products/blackout-curtains-black.jpg", name: "blackout-curtains-black", rating: { stars: 4.5, count: 9.8 }, pricePaise: 12099, keywords: ["curtains", "window curtains"] },
{ id: "a3f9c1e2-7b4d-4c8a-9f21-6e3d5b8a1c90", image:"../images/products/coffeemaker-with-glass-carafe-black.jpg", name:"coffemaker", rating:{stars:4,count:9.5}, pricePaise:500000, keywords:["coffemaker","kitchen accessories","blender"] },
{ id: "9f1c2a7e-3d4b-4b8f-9c21-7e6a5d2c8f10", image:"../images/products/cotton-bath-towels-teal.webp", name:"Cotton-bath-towel", rating:{stars:4,count:9.3}, pricePaise:50000, keywords:["towel","cotton towel","bath towel"] },
{ id: "c3a7e9b2-6f1d-4a5c-8b32-1d7e9f4a2c63", image:"../images/products/countertop-blender-64-oz.jpg", name:"countertop-blender", rating:{stars:3.5,count: 8.5}, pricePaise:389999, keywords:["blender","jucier"] },
{ id: "e8b4c1d9-2a7f-4c6e-9d10-5f3a8b7c2e41", image:"../images/products/duvet-cover-set-blue-twin.jpg", name:"blue bed sheet", rating:{stars:4.5,count:9.8}, pricePaise:50326, keywords:["bed sheet","bed cover"] },
{ id: "a6d9f3c2-8b1e-4f7a-9c54-2e7d1b8a6f30", image:"../images/products/electric-glass-and-steel-hot-water-kettle.webp", name:"electric-glass-and-steel-hot-water-kettle", rating:{stars:4,count: 9.0}, pricePaise:200000, keywords:["electric glass","steel hot water kettle","kettle"] },
{ id: "b1e7c4a9-3d2f-4a8c-8f21-6c9d5e2a7b48", image:"../images/products/floral-mixing-bowl-set.jpg", name:"floral-mixing-bowl-set", rating:{stars:3.0,count:8.0}, pricePaise:19999, keywords:["mixing bowel","bowels"] },
{ id: "d4f8a2c1-7b9e-4e6a-9a32-1f5c8d7b2e60", image:"../images/products/men-athletic-shoes-green.jpg", name:"men-athletic-shoes-green", rating:{stars:2.0,count:7.5}, pricePaise:150000, keywords:["shoes","men's wear","shoes for men"] },
{ id: "f2c9e1a7-6d4b-4b5f-8c73-9a1e6d3b7c52", image:"../images/products/men-golf-polo-t-shirt-blue.jpg", name:"polo-t-shirt-blue", rating:{stars:4.0,count:8.0}, pricePaise:50000, keywords:["t-shirt","mens-wear","cotton"] },
{ id: "7e3a9c1d-5b2f-4d8e-9f14-2c6a7b8d1e39", image:"../images/products/variations/liquid-laundry-detergent-plain.jpg", name:"detergent", rating:{stars:3.5,count: 8.0}, pricePaise:50000, keywords:["detergent","laundary"] },
{ id: "2c8f1e7a-9d3b-4a6c-8e21-5b7d9a4c6f10", image:"../images/products/umbrella.jpg", name:"umbrella", rating:{stars:4.0,count:9.0}, pricePaise:15000, keywords:["umbrella"] },
{ id: "5a7d2c9e-1f8b-4e3a-9c62-7d1e5b8a3f44", image:"../images/products/variations/men-chino-pants-beige.jpg", name:"men-chino-pants", rating:{stars:4.0,count:9.8}, pricePaise:60000, keywords:["pants","men's wear","chinos"] },
{ id: "8b2e7c4a-6d1f-4a9e-8f35-2a7c9d1b6e53", image:"../images/products/variations/Iphone14.jpg", name:"Iphone14", rating:{stars:5.0,count:10}, pricePaise:15000000, keywords:["phones","Iphone","mobiles"] },
{ id: "1d9a6f3c-7b4e-4c8a-9e20-6f2b7d5a8c31", image:"../images/products/variations/oneplus.jpg", name:"One plus 11R 5G", rating:{stars:5.0,count:9.8}, pricePaise:5000000, keywords:["mobiles","phones","one  plus"] },
{ id: "3f7c1a9e-8d2b-4e6a-8c41-9b5d2a7e6f80", image:"../images/products/variations/round-sunglasses-black.jpg", name:"round-sunglasses-black", rating:{stars:4.5,count:9.5}, pricePaise:45000, keywords:["sunglasses","spectacles"] },
{ id: "6a1e8c2f-4d9b-4b7c-9a53-1c8d7e2f5b62", image:"../images/products/variations/plain-hooded-fleece-sweatshirt-yellow.jpg", name:"hooded sweatshirt", rating:{stars:4.5,count:9.0}, pricePaise:35000, keywords:["hoode","sweat shirt","shirt"] },
{ id: "4c9b2a7e-1f6d-4a8e-8b24-7d3a9c1e5f77", image:"../images/products/variations/men-slim-fit-summer-shorts-gray.jpg", name:"men-slim-fit-summer-shorts-gray", rating:{stars:3.5,count:8.5}, pricePaise:39900, keywords:["shorts","pants"] }
];

function getProduct(productId) {
return products.find((product) => product.id === productId);
}

function formatPrice(paise) {
const rupees = Math.floor(paise / 100);
const paiseRemainder = paise % 100;
return `₹${rupees}.${String(paiseRemainder).padStart(2, "0")}`;
}

function getStarHTML(stars) {
const rounded = Math.round(stars * 2) / 2; 
return `<div style="color:rgb(255,164,28); font-size:18px;">${'★'.repeat(Math.floor(rounded))}${rounded%1!==0?'½':''}${'☆'.repeat(5-Math.ceil(rounded))}</div>`;
}
let cart = JSON.parse(localStorage.getItem("skr-cart")) || [];

const deliveryOptions = [
{ id: "1", label: "FREE Shipping",  pricePaise: 0,    daysOffset: 7 },
{ id: "2", label: "₹4.99 Shipping", pricePaise: 499,  daysOffset: 3 },
{ id: "3", label: "₹9.99 Shipping", pricePaise: 999,  daysOffset: 1 }
];

function saveCart() { localStorage.setItem("skr-cart", JSON.stringify(cart)); }

function addToCart(productId, quantity) {
let matchingItem = cart.find((item) => item.productId === productId);
if (matchingItem) { matchingItem.quantity += quantity; } 
else { cart.push({ productId, quantity, deliveryOptionId: "1" }); }
saveCart();
}

function removeFromCart(productId) {
cart = cart.filter((item) => item.productId !== productId);
saveCart();
}

function updateQuantity(productId, newQuantity) {
const matchingItem = cart.find((item) => item.productId === productId);
if (matchingItem) { matchingItem.quantity = newQuantity; saveCart(); }
}

function updateDeliveryOption(productId, deliveryOptionId) {
const matchingItem = cart.find((item) => item.productId === productId);
if (matchingItem) { matchingItem.deliveryOptionId = deliveryOptionId; saveCart(); }
}

function calculateCartQuantity() {
return cart.reduce((total, item) => total + item.quantity, 0);
}

function clearCart() { cart = []; saveCart(); }

function updateCartBadge() {
const badges = document.querySelectorAll(".cart-quantity, .js-items-count-header");
const total  = calculateCartQuantity();
badges.forEach((badge) => { badge.textContent = total; });
}

function navigateTo(pageId) {
document.querySelectorAll('.page-view').forEach(p => p.style.display = 'none');
document.querySelector('.js-standard-header').style.display = 'none';
document.querySelector('.js-checkout-header').style.display = 'none';

if (pageId === 'checkout') { document.querySelector('.js-checkout-header').style.display = 'flex'; } 
else { document.querySelector('.js-standard-header').style.display = 'flex'; }

document.getElementById('page-' + pageId).style.display = 'block';

if (pageId === 'home') { renderProducts(products); }
else if (pageId === 'checkout') { renderOrderSummary(); }
else if (pageId === 'orders') { renderOrders(); }
else if (pageId === 'tracking') { renderTrackingPage(); }

updateCartBadge();
window.scrollTo(0, 0);
}
const addedMessageTimers = {};

function renderProducts(productList) {
const grid = document.querySelector(".js-products-grid");
if (!grid) return;
let productsHTML = "";

productList.forEach((product) => {
   productsHTML += `
      <div class="product-container">
      <div class="product-image-container">
         <img class="product-image" src="${product.image}" alt="${product.name}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100\\' height=\\'100\\'><rect width=\\'100\\' height=\\'100\\' fill=\\'%23eee\\'/><text x=\\'50\\' y=\\'50\\' font-size=\\'12\\' text-anchor=\\'middle\\' fill=\\'%23999\\'>No Image</text></svg>'">
      </div>
      <div class="product-name limit-text-to-2-lines">${product.name}</div>
      <div class="product-rating-container">
         ${getStarHTML(product.rating.stars)}
         <div class="product-rating-count link-primary">${product.rating.count}</div>
      </div>
      <div class="product-price">${formatPrice(product.pricePaise)}</div>
      <div class="product-quantity-container">
         <select class="js-quantity-selector-${product.id}">
            ${[1,2,3,4,5,6,7,8,9,10].map(n => `<option value="${n}">${n}</option>`).join('')}
         </select>
      </div>
      <div class="product-spacer"></div>
      <div class="added-to-cart js-added-to-cart-${product.id}">
         <span style="color:green; font-weight:bold; margin-right:5px;">✓</span> Added
      </div>
      <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
         Add to Cart
      </button>
      </div>
   `;
});
grid.innerHTML = productsHTML;
attachAddToCartListeners();
}

function attachAddToCartListeners() {
document.querySelectorAll(".js-add-to-cart").forEach((button) => {
   button.addEventListener("click", () => {
      const productId = button.dataset.productId;
      const quantity = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);
      addToCart(productId, quantity);
      updateCartBadge();
      showAddedMessage(productId);
   });
});
}

function showAddedMessage(productId) {
const messageEl = document.querySelector(`.js-added-to-cart-${productId}`);
if (!messageEl) return;
messageEl.style.opacity = "1";
if (addedMessageTimers[productId]) clearTimeout(addedMessageTimers[productId]);
addedMessageTimers[productId] = setTimeout(() => { messageEl.style.opacity = "0"; }, 2000);
}

function filterProducts(query) {
const lowerQuery = query.toLowerCase().trim();
if (!lowerQuery) { renderProducts(products); return; }
const filtered = products.filter((product) => {
   return product.name.toLowerCase().includes(lowerQuery) || product.keywords.some((keyword) => keyword.toLowerCase().includes(lowerQuery));
});
renderProducts(filtered);
}

function attachSearchListeners() {
const searchBars = document.querySelectorAll(".search-bar");
const searchButtons = document.querySelectorAll(".search-button");

searchButtons.forEach((btn, idx) => {
   btn.addEventListener("click", () => {
      navigateTo('home');
      filterProducts(searchBars[idx].value);
   });
});

searchBars.forEach(bar => {
   bar.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
      navigateTo('home');
      filterProducts(bar.value);
      }
   });
});
}

function getFutureDate(daysOffset) {
const date = new Date();
date.setDate(date.getDate() + daysOffset);
return date.toLocaleDateString("en-IN", { weekday: "long", month: "long", day: "numeric" });
}

function renderOrderSummary() {
const container = document.querySelector(".order-summary");
if (!container) return;

if (cart.length === 0) {
   container.innerHTML = `
      <div style="padding:30px; text-align:center;">
      <p style="font-size:18px; margin-bottom:15px;">Your cart is empty!</p>
      <a href="javascript:void(0);" onclick="navigateTo('home')" class="link-primary">Continue Shopping</a>
      </div>`;
   renderPaymentSummary();
   return;
}

let summaryHTML = "";
cart.forEach((cartItem) => {
   const product = getProduct(cartItem.productId);
   if (!product) return;

   const deliveryOption = deliveryOptions.find((opt) => opt.id === cartItem.deliveryOptionId) || deliveryOptions[0];
   let deliveryOptionsHTML = "";
   
   deliveryOptions.forEach((option) => {
      const isChecked = option.id === cartItem.deliveryOptionId ? "checked" : "";
      const priceLabel = option.pricePaise === 0 ? "FREE Shipping" : `${formatPrice(option.pricePaise)} - Shipping`;
      deliveryOptionsHTML += `
      <div class="delivery-option">
         <input type="radio" ${isChecked} class="delivery-option-input" name="delivery-option-${cartItem.productId}" data-product-id="${cartItem.productId}" data-delivery-id="${option.id}">
         <div>
            <div class="delivery-option-date">${getFutureDate(option.daysOffset)}</div>
            <div class="delivery-option-price">${priceLabel}</div>
         </div>
      </div>`;
   });

   summaryHTML += `
      <div class="cart-item-container js-cart-item-container-${cartItem.productId}">
      <div class="delivery-date">Delivery date: ${getFutureDate(deliveryOption.daysOffset)}</div>
      <div class="cart-item-details-grid">
         <img class="product-image" src="${product.image}" alt="${product.name}" onerror="this.style.display='none'">
         <div class="cart-item-details">
            <div class="product-name">${product.name}</div>
            <div class="product-price">${formatPrice(product.pricePaise)}</div>
            <div class="product-quantity">
            <span>Quantity: <span class="quantity-label js-quantity-label-${cartItem.productId}">${cartItem.quantity}</span></span>
            <span class="update-quantity-link link-primary js-update-link" data-product-id="${cartItem.productId}">Update</span>
            <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${cartItem.productId}">Delete</span>
            </div>
            <div class="quantity-input-container js-quantity-input-container-${cartItem.productId}" style="display:none; margin-top:8px;">
            <input type="number" min="1" max="99" value="${cartItem.quantity}" class="quantity-input js-new-quantity-${cartItem.productId}" style="width:60px; padding:4px; border:1px solid #ccc; border-radius:4px;">
            <span class="save-quantity-link link-primary js-save-link" data-product-id="${cartItem.productId}" style="margin-left:8px; cursor:pointer;">Save</span>
            </div>
         </div>
         <div class="delivery-options">
            <div class="delivery-options-title">Choose a delivery option:</div>
            ${deliveryOptionsHTML}
         </div>
      </div>
      </div>`;
});
container.innerHTML = summaryHTML;
attachCheckoutListeners();
renderPaymentSummary();
}

function renderPaymentSummary() {
let itemsTotalPaise = 0; let shippingTotalPaise = 0; let totalQuantity = 0;
cart.forEach((cartItem) => {
   const product = getProduct(cartItem.productId);
   if (!product) return;
   itemsTotalPaise += product.pricePaise * cartItem.quantity;
   totalQuantity += cartItem.quantity;
   const deliveryOption = deliveryOptions.find((opt) => opt.id === cartItem.deliveryOptionId) || deliveryOptions[0];
   shippingTotalPaise += deliveryOption.pricePaise;
});

const taxPaise = Math.round(itemsTotalPaise * 0.1);
const subtotal = itemsTotalPaise + shippingTotalPaise;
const totalPaise = subtotal + taxPaise;

document.querySelectorAll(".js-items-count").forEach(el => el.textContent = totalQuantity);
document.querySelector(".js-payment-items").textContent = formatPrice(itemsTotalPaise);
document.querySelector(".js-payment-shipping").textContent = formatPrice(shippingTotalPaise);
document.querySelector(".js-payment-subtotal").textContent = formatPrice(subtotal);
document.querySelector(".js-payment-tax").textContent = formatPrice(taxPaise);
document.querySelector(".js-payment-total").textContent = formatPrice(totalPaise);
}

function attachCheckoutListeners() {
document.querySelectorAll(".js-delete-link").forEach((link) => {
   link.addEventListener("click", () => {
      const productId = link.dataset.productId;
      removeFromCart(productId);
      document.querySelector(`.js-cart-item-container-${productId}`)?.remove();
      updateCartBadge(); renderPaymentSummary();
      if (cart.length === 0) renderOrderSummary();
   });
});

document.querySelectorAll(".js-update-link").forEach((link) => {
   link.addEventListener("click", () => {
      const inputContainer = document.querySelector(`.js-quantity-input-container-${link.dataset.productId}`);
      if (inputContainer) inputContainer.style.display = inputContainer.style.display === "none" ? "block" : "none";
   });
});

document.querySelectorAll(".js-save-link").forEach((link) => {
   link.addEventListener("click", () => {
      const productId = link.dataset.productId;
      const input = document.querySelector(`.js-new-quantity-${productId}`);
      if (!input) return;
      const newQuantity = parseInt(input.value, 10);
      if (isNaN(newQuantity) || newQuantity < 1 || newQuantity > 99) { alert("Please enter a valid quantity between 1 and 99."); return; }
      updateQuantity(productId, newQuantity);
      document.querySelector(`.js-quantity-label-${productId}`).textContent = newQuantity;
      document.querySelector(`.js-quantity-input-container-${productId}`).style.display = "none";
      updateCartBadge(); renderPaymentSummary();
   });
});

document.querySelectorAll(".delivery-option-input").forEach((radio) => {
   radio.addEventListener("change", () => {
      updateDeliveryOption(radio.dataset.productId, radio.dataset.deliveryId);
      const option = deliveryOptions.find((opt) => opt.id === radio.dataset.deliveryId);
      if (option) document.querySelector(`.js-cart-item-container-${radio.dataset.productId} .delivery-date`).textContent = `Delivery date: ${getFutureDate(option.daysOffset)}`;
      renderPaymentSummary();
   });
});
}

function attachPlaceOrderListener() {
document.querySelector(".place-order-button")?.addEventListener("click", () => {
   if (cart.length === 0) { alert("Your cart is empty."); return; }
   const newOrder = {
      id: "order-" + Date.now(),
      placedDate: new Date().toLocaleDateString("en-IN", { month: "long", day: "numeric", year: "numeric" }),
      items: cart.map((cartItem) => {
      const product = getProduct(cartItem.productId);
      const delivOpt = deliveryOptions.find((o) => o.id === cartItem.deliveryOptionId) || deliveryOptions[0];
      return {
         productId: cartItem.productId, quantity: cartItem.quantity,
         name: product ? product.name : "Unknown Product", image: product ? product.image : "",
         pricePaise: product ? product.pricePaise : 0, deliveryDate: getFutureDate(delivOpt.daysOffset), status: "Preparing",
      };
      }),
   };
   const existingOrders = JSON.parse(localStorage.getItem("skr-orders") || "[]");
   existingOrders.unshift(newOrder);
   localStorage.setItem("skr-orders", JSON.stringify(existingOrders));
   clearCart(); updateCartBadge(); navigateTo('orders');
});
}

function renderOrders() {
const grid = document.querySelector(".orders-grid");
if (!grid) return;
const orders = JSON.parse(localStorage.getItem("skr-orders") || "[]");

if (orders.length === 0) {
   grid.innerHTML = `
      <div style="padding:30px; text-align:center; border:1px solid #ddd; border-radius:8px;">
      <p style="font-size:18px; margin-bottom:15px; font-weight:500;">You haven't placed any orders yet.</p>
      <a href="javascript:void(0);" onclick="navigateTo('home')" class="link-primary" style="font-size:16px;">Start Shopping →</a>
      </div>`;
   return;
}

let ordersHTML = "";
orders.forEach((order) => {
   let orderTotalPaise = 0;
   let itemsHTML = "";
   order.items.forEach((item) => {
      orderTotalPaise += item.pricePaise * item.quantity;
      itemsHTML += `
      <div class="product-image-container"><img src="${item.image}" alt="${item.name}" onerror="this.style.display='none'"></div>
      <div class="product-details">
         <div class="product-name">${item.name}</div>
         <div class="product-delivery-date">Arriving on: ${item.deliveryDate}</div>
         <div class="product-quantity">Quantity: ${item.quantity}</div>
         <button class="buy-again-button button-primary js-buy-again" data-product-id="${item.productId}">
            <span class="buy-again-message">Buy it again</span>
         </button>
      </div>
      <div class="product-actions">
         <button class="track-package-button button-secondary js-track-package" data-order-id="${order.id}" data-product-id="${item.productId}">
            Track package
         </button>
      </div>`;
   });
   ordersHTML += `
      <div class="order-container">
      <div class="order-header">
         <div class="order-header-left-section">
            <div class="order-date"><div class="order-header-label">Order Placed:</div><div>${order.placedDate}</div></div>
            <div class="order-total"><div class="order-header-label">Total:</div><div>${formatPrice(orderTotalPaise)}</div></div>
         </div>
         <div class="order-header-right-section"><div class="order-header-label">Order ID:</div><div style="font-size:13px; word-break:break-all;">${order.id}</div></div>
      </div>
      <div class="order-details-grid">${itemsHTML}</div>
      </div>`;
});
grid.innerHTML = ordersHTML;
attachOrderListeners();
}

function attachOrderListeners() {
document.querySelectorAll(".js-buy-again").forEach((button) => {
   button.addEventListener("click", () => {
      addToCart(button.dataset.productId, 1); updateCartBadge();
      const originalText = button.querySelector(".buy-again-message").textContent;
      button.querySelector(".buy-again-message").textContent = "✔ Added!";
      setTimeout(() => { button.querySelector(".buy-again-message").textContent = originalText; }, 1500);
   });
});

document.querySelectorAll(".js-track-package").forEach((button) => {
   button.addEventListener("click", () => {
      const orderId = button.dataset.orderId; const productId = button.dataset.productId;
      const order = JSON.parse(localStorage.getItem("skr-orders") || "[]").find((o) => o.id === orderId);
      if (!order) return;
      const item = order.items.find((i) => i.productId === productId);
      if (!item) return;
      
      localStorage.setItem("skr-tracking-item", JSON.stringify({
      name: item.name, image: item.image, quantity: item.quantity, deliveryDate: item.deliveryDate, status: item.status || "Preparing", orderId: orderId,
      }));
      navigateTo('tracking');
   });
});
}
const STATUS_CONFIG = {
"Preparing":  { progressWidth: "16%",  labelIndex: 0 },
"Shipped":    { progressWidth: "50%",  labelIndex: 1 },
"Delivered":  { progressWidth: "100%", labelIndex: 2 },
};

function renderTrackingPage() {
const raw = localStorage.getItem("skr-tracking-item");
const item = raw ? JSON.parse(raw) : { name: "Demo Product", image: "", quantity: 1, deliveryDate: "Unknown", status: "Preparing" };

document.querySelector("#page-tracking .delivery-date").textContent = `Arriving on ${item.deliveryDate}`;
const infos = document.querySelectorAll("#page-tracking .product-info");
if (infos[0]) infos[0].textContent = item.name;
if (infos[1]) infos[1].textContent = `Quantity: ${item.quantity}`;

const img = document.querySelector("#page-tracking .product-image");
if (img) { img.src = item.image; img.alt = item.name; }

const labels = document.querySelectorAll("#page-tracking .progress-label");
const config = STATUS_CONFIG[item.status] || STATUS_CONFIG["Shipped"];
labels.forEach((label) => label.classList.remove("current-status"));
if (labels[config.labelIndex]) labels[config.labelIndex].classList.add("current-status");

const progressBar = document.querySelector("#page-tracking .progress-bar");
if (progressBar) {
   progressBar.style.width = "0%";
   setTimeout(() => {
      progressBar.style.transition = "width 1s ease-in-out";
      progressBar.style.width = config.progressWidth;
   }, 100);
}
}
window.onload = function() {
attachSearchListeners();
attachPlaceOrderListener();
updateCartBadge();
navigateTo('home'); 
};