// ============================================================
// tracking.js  –  Package Tracking Page Logic
// ============================================================
//
// WHAT DOES THIS FILE DO?
//   This script powers the tracking-SKR.html page. It:
//     1. Reads the item info saved by orders.js from localStorage
//     2. Fills in the product name, image, quantity, delivery date
//     3. Highlights the correct tracking status step
//        (Preparing → Shipped → Delivered)
//     4. Animates the progress bar to the right width
//     5. Provides a "Back to Orders" link
//
// HOW STATUS MAPS TO PROGRESS:
//   "Preparing" → 16% wide bar, first label highlighted
//   "Shipped"   → 50% wide bar, second label highlighted
//   "Delivered" → 100% wide bar, third label highlighted
//
// THIS FILE DEPENDS ON:
//   cart.js  (updateCartBadge)
// ============================================================


// ---- Status configuration ----
// An object that maps each status string to:
//   progressWidth  – how wide to make the progress bar (CSS %)
//   labelIndex     – which of the 3 labels to highlight (0,1,2)
//
// We use an object (like a dictionary) instead of if/else chains
// so it's easy to add more statuses later.
const STATUS_CONFIG = {
  "Preparing":  { progressWidth: "16%",  labelIndex: 0 },
  "Shipped":    { progressWidth: "50%",  labelIndex: 1 },
  "Delivered":  { progressWidth: "100%", labelIndex: 2 },
};


// ---- STEP 1: Load tracking data from localStorage ----
function loadTrackingData() {
  // Read the item that orders.js saved
  const raw = localStorage.getItem("skr-tracking-item");

  // If nothing was saved (user came directly to this URL), use demo data
  if (!raw) {
    return {
      name:         "Black and Gray Athletic Cotton Socks - 6 Pairs",
      image:        "../images/products/athletic-cotton-socks-6-pairs.jpg",
      quantity:     1,
      deliveryDate: "Monday, June 13",
      status:       "Shipped",
    };
  }

  // JSON.parse converts the stored text back into a JavaScript object
  return JSON.parse(raw);
}


// ---- STEP 2: Render the tracking page with the item's data ----
function renderTrackingPage() {
  const item = loadTrackingData();

  // --- Fill in product details ---
  const deliveryDateEl = document.querySelector(".delivery-date");
  const productInfoEls = document.querySelectorAll(".product-info");
  const productImageEl = document.querySelector(".product-image");

  if (deliveryDateEl) {
    deliveryDateEl.textContent = `Arriving on ${item.deliveryDate}`;
  }

  // The HTML has two .product-info elements: name and quantity
  if (productInfoEls[0]) productInfoEls[0].textContent = item.name;
  if (productInfoEls[1]) productInfoEls[1].textContent = `Quantity: ${item.quantity}`;

  if (productImageEl) {
    productImageEl.src = item.image;
    productImageEl.alt = item.name;
  }


  // --- Update the status labels (Preparing / Shipped / Delivered) ---
  const labels = document.querySelectorAll(".progress-label");
  const config = STATUS_CONFIG[item.status] || STATUS_CONFIG["Shipped"];

  // First remove "current-status" from all labels
  // (this class makes the text orange/red per tracking.css)
  labels.forEach((label) => label.classList.remove("current-status"));

  // Then add "current-status" only to the correct label
  if (labels[config.labelIndex]) {
    labels[config.labelIndex].classList.add("current-status");
  }


  // --- Animate the progress bar ---
  // We start the bar at 0% width, then after a tiny delay we set
  // it to the target width. CSS transition then animates it smoothly.
  //
  // Why setTimeout with 0? The browser needs one "tick" to render
  // the element before a CSS transition can animate it.
  const progressBar = document.querySelector(".progress-bar");
  if (progressBar) {
    progressBar.style.width = "0%"; // start at zero

    setTimeout(() => {
      // transition property in CSS handles the smooth animation
      progressBar.style.transition = "width 1s ease-in-out";
      progressBar.style.width = config.progressWidth;
    }, 100); // 100ms delay gives the browser time to paint
  }
}


// ---- STEP 3: Wire up the "View all orders" back link ----
function attachBackLink() {
  const backLink = document.querySelector(".back-to-orders-link");
  if (!backLink) return;

  // Make sure it always points to the correct orders page
  backLink.href = "orders-SKR.html";
}


// ============================================================
// PAGE INITIALIZATION
// ============================================================
renderTrackingPage();
attachBackLink();
updateCartBadge();
