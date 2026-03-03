// ============================================================
// checkout.js  –  Checkout Page Logic
// ============================================================
//
// WHAT DOES THIS FILE DO?
//   This script powers the checkout-SKR.html page. It:
//     1. Reads the cart[] array (from cart.js) and renders
//        each item with its product details, quantity controls,
//        and delivery option radio buttons
//     2. Recalculates and displays the Order Summary (items
//        cost, shipping, tax, total) every time anything changes
//     3. Lets the user Update or Delete items inline
//     4. Lets the user change the delivery speed via radio buttons
//     5. Handles the "Place your order" button → saves order
//        to localStorage, clears the cart, and redirects to orders
//
// THIS FILE DEPENDS ON:
//   products.js  (products[], getProduct(), formatPrice())
//   cart.js      (cart[], deliveryOptions, updateQuantity(),
//                 removeFromCart(), updateDeliveryOption(),
//                 clearCart(), updateCartBadge())
// ============================================================


// ---- HELPER: Get future date string ----
// Adds daysOffset to today's date and returns a readable string.
// e.g. getTodayPlus(3) might return "Saturday, June 15"
function getFutureDate(daysOffset) {
  const date = new Date();
  date.setDate(date.getDate() + daysOffset);
  // toLocaleDateString formats the date nicely for the user
  return date.toLocaleDateString("en-IN", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}


// ---- STEP 1: Render cart items into the page ----
// Builds the HTML for every item in the cart and injects it.
function renderOrderSummary() {
  const container = document.querySelector(".order-summary");
  if (!container) return;

  // If cart is empty, show a friendly message
  if (cart.length === 0) {
    container.innerHTML = `
      <div style="padding:30px; text-align:center;">
        <p style="font-size:18px; margin-bottom:15px;">Your cart is empty!</p>
        <a href="srk.html" class="link-primary">Continue Shopping</a>
      </div>`;
    renderPaymentSummary(); // still update totals (will show ₹0)
    return;
  }

  let summaryHTML = "";

  // Loop over each item saved in the cart
  cart.forEach((cartItem) => {
    // Look up the full product details using the product id
    const product = getProduct(cartItem.productId);
    if (!product) return; // skip if product not found

    // Find the currently selected delivery option for this item
    const deliveryOption = deliveryOptions.find(
      (opt) => opt.id === cartItem.deliveryOptionId
    ) || deliveryOptions[0];

    // Build the delivery options radio buttons HTML
    // We loop over all available delivery speeds
    let deliveryOptionsHTML = "";
    deliveryOptions.forEach((option) => {
      // "checked" attribute pre-selects the current choice
      const isChecked = option.id === cartItem.deliveryOptionId ? "checked" : "";
      const priceLabel =
        option.pricePaise === 0
          ? "FREE Shipping"
          : `${formatPrice(option.pricePaise)} - Shipping`;

      deliveryOptionsHTML += `
        <div class="delivery-option">
          <input type="radio" ${isChecked}
            class="delivery-option-input"
            name="delivery-option-${cartItem.productId}"
            data-product-id="${cartItem.productId}"
            data-delivery-id="${option.id}">
          <div>
            <div class="delivery-option-date">
              ${getFutureDate(option.daysOffset)}
            </div>
            <div class="delivery-option-price">${priceLabel}</div>
          </div>
        </div>`;
    });

    // The delivery date shown at the top of each cart item card
    const deliveryDate = getFutureDate(deliveryOption.daysOffset);

    // Build the full HTML for one cart item card
    summaryHTML += `
      <div class="cart-item-container js-cart-item-container-${cartItem.productId}">
        <div class="delivery-date">
          Delivery date: ${deliveryDate}
        </div>

        <div class="cart-item-details-grid">
          <img class="product-image" src="${product.image}" alt="${product.name}">

          <div class="cart-item-details">
            <div class="product-name">${product.name}</div>
            <div class="product-price">${formatPrice(product.pricePaise)}</div>
            <div class="product-quantity">
              <span>
                Quantity:
                <span class="quantity-label js-quantity-label-${cartItem.productId}">
                  ${cartItem.quantity}
                </span>
              </span>

              <!-- Update link reveals an input box so the user can type a new qty -->
              <span class="update-quantity-link link-primary js-update-link"
                data-product-id="${cartItem.productId}">
                Update
              </span>

              <!-- Delete link removes this item entirely -->
              <span class="delete-quantity-link link-primary js-delete-link"
                data-product-id="${cartItem.productId}">
                Delete
              </span>
            </div>

            <!-- Hidden input box for typing a new quantity (shown on "Update" click) -->
            <div class="quantity-input-container js-quantity-input-container-${cartItem.productId}"
              style="display:none; margin-top:8px;">
              <input type="number" min="1" max="99" value="${cartItem.quantity}"
                class="quantity-input js-new-quantity-${cartItem.productId}"
                style="width:60px; padding:4px; border:1px solid #ccc; border-radius:4px;">
              <span class="save-quantity-link link-primary js-save-link"
                data-product-id="${cartItem.productId}"
                style="margin-left:8px; cursor:pointer;">
                Save
              </span>
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

  // After rendering, attach all the interactive event listeners
  attachCheckoutListeners();

  // Recalculate and display the price summary
  renderPaymentSummary();
}


// ---- STEP 2: Render the right-hand Order Summary panel ----
// Calculates items subtotal, shipping, tax, and total.
function renderPaymentSummary() {
  const itemsEl    = document.querySelector(".js-payment-items");
  const shippingEl = document.querySelector(".js-payment-shipping");
  const subtotalEl = document.querySelector(".js-payment-subtotal");
  const taxEl      = document.querySelector(".js-payment-tax");
  const totalEl    = document.querySelector(".js-payment-total");
  const countEl    = document.querySelector(".js-items-count");

  // Sum up all items' prices (price × quantity for each)
  let itemsTotalPaise = 0;
  let shippingTotalPaise = 0;
  let totalQuantity = 0;

  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    if (!product) return;

    itemsTotalPaise += product.pricePaise * cartItem.quantity;
    totalQuantity   += cartItem.quantity;

    // Add the shipping cost for this item's chosen delivery option
    const deliveryOption = deliveryOptions.find(
      (opt) => opt.id === cartItem.deliveryOptionId
    ) || deliveryOptions[0];
    shippingTotalPaise += deliveryOption.pricePaise;
  });

  // 10% tax on items only (not shipping — common practice)
  const taxPaise   = Math.round(itemsTotalPaise * 0.1);
  const totalPaise = itemsTotalPaise + shippingTotalPaise + taxPaise;
  const subtotal   = itemsTotalPaise + shippingTotalPaise;

  // Update all the display elements (null-check each element first)
  if (countEl) countEl.textContent = totalQuantity;
  if (itemsEl) itemsEl.textContent = formatPrice(itemsTotalPaise);
  if (shippingEl) shippingEl.textContent = formatPrice(shippingTotalPaise);
  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
  if (taxEl) taxEl.textContent = formatPrice(taxPaise);
  if (totalEl) totalEl.textContent = formatPrice(totalPaise);
}


// ---- STEP 3: Attach all event listeners for checkout interactions ----
function attachCheckoutListeners() {

  // --- DELETE BUTTONS ---
  // Each "Delete" span has class js-delete-link and data-product-id
  document.querySelectorAll(".js-delete-link").forEach((link) => {
    link.addEventListener("click", () => {
      const productId = link.dataset.productId;

      // Remove from cart array and save to localStorage
      removeFromCart(productId);

      // Remove the HTML card from the page (no page reload needed!)
      // querySelector finds the specific container for this product
      const container = document.querySelector(
        `.js-cart-item-container-${productId}`
      );
      if (container) container.remove();

      // Update header badge and price summary
      updateCartBadge();
      renderPaymentSummary();

      // If cart is now empty, re-render to show empty message
      if (cart.length === 0) renderOrderSummary();
    });
  });


  // --- UPDATE LINKS ---
  // Clicking "Update" shows the hidden quantity input box
  document.querySelectorAll(".js-update-link").forEach((link) => {
    link.addEventListener("click", () => {
      const productId = link.dataset.productId;
      const inputContainer = document.querySelector(
        `.js-quantity-input-container-${productId}`
      );
      if (inputContainer) {
        // Toggle: show if hidden, hide if shown
        const isHidden = inputContainer.style.display === "none";
        inputContainer.style.display = isHidden ? "block" : "none";
      }
    });
  });


  // --- SAVE QUANTITY LINKS ---
  // Clicking "Save" reads the input value and updates the cart
  document.querySelectorAll(".js-save-link").forEach((link) => {
    link.addEventListener("click", () => {
      const productId = link.dataset.productId;
      const input = document.querySelector(`.js-new-quantity-${productId}`);
      if (!input) return;

      const newQuantity = parseInt(input.value, 10);

      // Validate: must be a number between 1 and 99
      if (isNaN(newQuantity) || newQuantity < 1 || newQuantity > 99) {
        alert("Please enter a valid quantity between 1 and 99.");
        return;
      }

      // Save to cart data
      updateQuantity(productId, newQuantity);

      // Update the displayed quantity label on the page
      const label = document.querySelector(
        `.js-quantity-label-${productId}`
      );
      if (label) label.textContent = newQuantity;

      // Hide the input box again
      const inputContainer = document.querySelector(
        `.js-quantity-input-container-${productId}`
      );
      if (inputContainer) inputContainer.style.display = "none";

      // Recalculate totals
      updateCartBadge();
      renderPaymentSummary();
    });
  });


  // --- DELIVERY OPTION RADIO BUTTONS ---
  // When a radio is selected, update the item's delivery option
  // and refresh the delivery date shown at the top of its card.
  document.querySelectorAll(".delivery-option-input").forEach((radio) => {
    radio.addEventListener("change", () => {
      const productId    = radio.dataset.productId;
      const deliveryId   = radio.dataset.deliveryId;

      // Save choice to cart
      updateDeliveryOption(productId, deliveryId);

      // Update the delivery date text at the top of this item's card
      const option = deliveryOptions.find((opt) => opt.id === deliveryId);
      if (option) {
        const dateEl = document.querySelector(
          `.js-cart-item-container-${productId} .delivery-date`
        );
        if (dateEl) {
          dateEl.textContent = `Delivery date: ${getFutureDate(option.daysOffset)}`;
        }
      }

      // Recalculate shipping cost
      renderPaymentSummary();
    });
  });
}


// ---- STEP 4: Place Order Button ----
// Saves the order to localStorage, clears the cart, redirects.
function attachPlaceOrderListener() {
  const placeOrderBtn = document.querySelector(".place-order-button");
  if (!placeOrderBtn) return;

  placeOrderBtn.addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Add some items before placing an order!");
      return;
    }

    // Build an order record to save
    // Date.now() returns milliseconds since 1970 – a unique number
    const newOrder = {
      id: "order-" + Date.now(),
      placedDate: new Date().toLocaleDateString("en-IN", {
        month: "long", day: "numeric", year: "numeric"
      }),
      items: cart.map((cartItem) => {
        const product      = getProduct(cartItem.productId);
        const delivOpt     = deliveryOptions.find(
          (o) => o.id === cartItem.deliveryOptionId
        ) || deliveryOptions[0];
        return {
          productId:    cartItem.productId,
          quantity:     cartItem.quantity,
          name:         product ? product.name  : "Unknown Product",
          image:        product ? product.image : "",
          pricePaise:   product ? product.pricePaise : 0,
          deliveryDate: getFutureDate(delivOpt.daysOffset),
          status:       "Preparing", // default tracking status
        };
      }),
    };

    // Load existing orders, push new one, save back
    // JSON.parse / JSON.stringify is used to read/write arrays as text
    const existingOrders = JSON.parse(
      localStorage.getItem("skr-orders") || "[]"
    );
    existingOrders.unshift(newOrder); // unshift puts it at the FRONT (newest first)
    localStorage.setItem("skr-orders", JSON.stringify(existingOrders));

    // Wipe the cart
    clearCart();
    updateCartBadge();

    // Navigate to the orders page
    // window.location.href changes the browser's current URL
    window.location.href = "orders-SKR.html";
  });
}


// ============================================================
// PAGE INITIALIZATION
// ============================================================
renderOrderSummary();   // build the cart items
attachPlaceOrderListener(); // wire up the Place Order button
updateCartBadge();      // show cart count in header
