// ============================================================
// orders.js  –  Orders Page Logic
// ============================================================
//
// WHAT DOES THIS FILE DO?
//   This script powers the orders-SKR.html page. It:
//     1. Reads saved orders from localStorage
//     2. Dynamically builds the HTML for each order and its items
//     3. Handles "Buy it again" → adds item back to cart
//     4. Handles "Track package" → saves which item to track,
//        then navigates to tracking-SKR.html
//
// HOW ORDERS ARE SAVED:
//   Orders are stored in localStorage under the key "skr-orders"
//   as a JSON array. Each order is an object with:
//     { id, placedDate, items: [{ productId, name, image,
//       quantity, deliveryDate, status }] }
//
// THIS FILE DEPENDS ON:
//   cart.js      (addToCart, updateCartBadge)
//   products.js  (formatPrice – to show prices)
// ============================================================


// ---- STEP 1: Render all orders ----
function renderOrders() {
  const grid = document.querySelector(".orders-grid");
  if (!grid) return;

  // Load orders from localStorage
  // || "[]" ensures we get an empty array if nothing is saved yet
  const orders = JSON.parse(localStorage.getItem("skr-orders") || "[]");

  // If no orders yet, show a friendly placeholder
  if (orders.length === 0) {
    grid.innerHTML = `
      <div style="padding:30px; text-align:center; border:1px solid #ddd; border-radius:8px;">
        <p style="font-size:18px; margin-bottom:15px; font-weight:500;">
          You haven't placed any orders yet.
        </p>
        <a href="srk.html" class="link-primary" style="font-size:16px;">
          Start Shopping →
        </a>
      </div>`;
    return;
  }

  let ordersHTML = "";

  // Loop over every order (newest first because we used unshift in checkout.js)
  orders.forEach((order) => {

    // Calculate total price for this order (sum of all items × quantities)
    let orderTotalPaise = 0;
    order.items.forEach((item) => {
      orderTotalPaise += item.pricePaise * item.quantity;
    });

    // Build the HTML for each product row inside this order
    let itemsHTML = "";
    order.items.forEach((item) => {

      // Each row has: image | product details | track button
      itemsHTML += `
        <div class="product-image-container">
          <img src="${item.image}" alt="${item.name}">
        </div>

        <div class="product-details">
          <div class="product-name">${item.name}</div>
          <div class="product-delivery-date">
            Arriving on: ${item.deliveryDate}
          </div>
          <div class="product-quantity">Quantity: ${item.quantity}</div>

          <!-- Buy it again: adds this product back to the cart -->
          <button class="buy-again-button button-primary js-buy-again"
            data-product-id="${item.productId}">
            <span class="buy-again-message">Buy it again</span>
          </button>
        </div>

        <div class="product-actions">
          <!-- Track package: stores which item to track, then navigates -->
          <button class="track-package-button button-secondary js-track-package"
            data-order-id="${order.id}"
            data-product-id="${item.productId}">
            Track package
          </button>
        </div>`;
    });

    // Wrap everything in an order card
    ordersHTML += `
      <div class="order-container">

        <div class="order-header">
          <div class="order-header-left-section">
            <div class="order-date">
              <div class="order-header-label">Order Placed:</div>
              <div>${order.placedDate}</div>
            </div>
            <div class="order-total">
              <div class="order-header-label">Total:</div>
              <div>${formatPrice(orderTotalPaise)}</div>
            </div>
          </div>
          <div class="order-header-right-section">
            <div class="order-header-label">Order ID:</div>
            <div style="font-size:13px; word-break:break-all;">${order.id}</div>
          </div>
        </div>

        <div class="order-details-grid">
          ${itemsHTML}
        </div>

      </div>`;
  });

  // Inject all orders HTML at once
  grid.innerHTML = ordersHTML;

  // Attach button event listeners now that the HTML exists
  attachOrderListeners();
}


// ---- STEP 2: Attach listeners for Buy Again & Track Package ----
function attachOrderListeners() {

  // --- BUY IT AGAIN ---
  // Adds the product back to the cart with quantity 1
  document.querySelectorAll(".js-buy-again").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.productId;
      addToCart(productId, 1);
      updateCartBadge();

      // Visual feedback: briefly change the button text
      // This is a simple UX trick to confirm the action without an alert
      const originalText = button.querySelector(".buy-again-message").textContent;
      button.querySelector(".buy-again-message").textContent = "✔ Added!";
      setTimeout(() => {
        button.querySelector(".buy-again-message").textContent = originalText;
      }, 1500);
    });
  });


  // --- TRACK PACKAGE ---
  // We need to tell the tracking page WHICH item to show.
  // We do this by saving the item info to localStorage under
  // "skr-tracking-item", then navigating to the tracking page.
  document.querySelectorAll(".js-track-package").forEach((button) => {
    button.addEventListener("click", () => {
      const orderId   = button.dataset.orderId;
      const productId = button.dataset.productId;

      // Find the specific order and item
      const orders = JSON.parse(localStorage.getItem("skr-orders") || "[]");
      const order  = orders.find((o) => o.id === orderId);
      if (!order) return;

      const item = order.items.find((i) => i.productId === productId);
      if (!item) return;

      // Save the tracking info so tracking.js can read it
      localStorage.setItem("skr-tracking-item", JSON.stringify({
        name:         item.name,
        image:        item.image,
        quantity:     item.quantity,
        deliveryDate: item.deliveryDate,
        status:       item.status || "Preparing",
        orderId:      orderId,
      }));

      // Navigate to the tracking page
      window.location.href = "tracking-SKR.html";
    });
  });
}


// ============================================================
// PAGE INITIALIZATION
// ============================================================
renderOrders();
updateCartBadge();
