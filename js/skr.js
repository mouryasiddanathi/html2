// ============================================================
// skr.js  –  Main Store / Product Listing Page
// ============================================================
//
// WHAT DOES THIS FILE DO?
//   This script powers the main srk.html page.  It:
//     1. Reads the products[] array from products.js
//     2. Builds HTML cards for every product dynamically
//        (you don't need to hard-code each card in the HTML)
//     3. Handles "Add to Cart" button clicks
//     4. Shows a short "✔ Added" confirmation message
//     5. Updates the cart badge number in the header
//     6. Handles search filtering
//
// KEY CONCEPT – innerHTML vs createElement:
//   We build a big HTML string and inject it all at once using
//   innerHTML.  This is fast because the browser only re-renders
//   once, not once per product.
//
// THIS FILE DEPENDS ON:
//   products.js  (products array, getProduct, formatPrice, getStarHTML)
//   cart.js      (addToCart, updateCartBadge)
// ============================================================


// ---- STEP 1: Render Products ----
// Called on page load and also when search filters change.
function renderProducts(productList) {
  // Find the grid container in the HTML (the empty div with class "js-products-grid")
  const grid = document.querySelector(".js-products-grid");

  if (!grid) return; // Safety check – don't crash if element is missing

  // Build the entire grid HTML as one big string.
  // We use Array.map() to transform each product object into an HTML string,
  // then .join("") to combine them all without any separator.
  let productsHTML = "";

  productList.forEach((product) => {
    // Each card is a self-contained div with all the product info.
    // Template literals (backtick strings) let us embed expressions
    // using ${...} syntax – much cleaner than string concatenation.
    productsHTML += `
      <div class="product-container">

        <div class="product-image-container">
          <img class="product-image" src="${product.image}" alt="${product.name}">
        </div>

        <div class="product-name limit-text-to-2-lines">
          ${product.name}
        </div>

        <div class="product-rating-container">
          ${getStarHTML(product.rating.stars)}
          <div class="product-rating-count link-primary">
            ${product.rating.count}
          </div>
        </div>

        <div class="product-price">
          ${formatPrice(product.pricePaise)}
        </div>

        <div class="product-quantity-container">
          <select class="js-quantity-selector-${product.id}">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart js-added-to-cart-${product.id}">
          <img src="../images/icons/checkmark.png" alt="checkmark">
          Added
        </div>

        <button class="add-to-cart-button button-primary
          js-add-to-cart" data-product-id="${product.id}">
          Add to Cart
        </button>

      </div>
    `;
  });

  // Inject all the HTML into the grid div at once.
  // innerHTML completely replaces whatever was inside.
  grid.innerHTML = productsHTML;

  // Now that the HTML exists in the page, we can attach event listeners.
  attachAddToCartListeners();
}


// ---- STEP 2: Attach "Add to Cart" Event Listeners ----
// An event listener watches for a specific action (like a click)
// on a specific element, then runs a function when it happens.
//
// We use a SINGLE listener approach: attach listeners to all
// buttons that have the class "js-add-to-cart".
// The data-product-id attribute on each button tells us WHICH
// product was clicked.
function attachAddToCartListeners() {
  const addButtons = document.querySelectorAll(".js-add-to-cart");

  // forEach loops over every button found
  addButtons.forEach((button) => {

    button.addEventListener("click", () => {
      // dataset lets us read data-* HTML attributes
      // <button data-product-id="abc123">  →  button.dataset.productId === "abc123"
      const productId = button.dataset.productId;

      // Read the quantity the user selected in the dropdown
      const quantitySelector = document.querySelector(
        `.js-quantity-selector-${productId}`
      );
      const quantity = Number(quantitySelector.value); // convert string "2" → number 2

      // Add to cart (defined in cart.js)
      addToCart(productId, quantity);

      // Update the number badge on the cart icon
      updateCartBadge();

      // Show the "✔ Added" confirmation message
      showAddedMessage(productId);
    });

  });
}


// ---- STEP 3: Show "Added" Confirmation ----
// Makes the green "Added" message visible for 2 seconds,
// then hides it again.
//
// setTimeout(fn, ms) runs fn after ms milliseconds (1000ms = 1s).
// We track a timer so if the user clicks again quickly, we reset
// the timer rather than stacking multiple hide-timers.

// Object to store timeouts per product so we can clear them
const addedMessageTimers = {};

function showAddedMessage(productId) {
  const messageEl = document.querySelector(`.js-added-to-cart-${productId}`);
  if (!messageEl) return;

  // Make the message visible (CSS transition handles the fade)
  messageEl.style.opacity = "1";

  // Clear any existing timer for this product
  if (addedMessageTimers[productId]) {
    clearTimeout(addedMessageTimers[productId]);
  }

  // After 2 seconds, hide the message again
  addedMessageTimers[productId] = setTimeout(() => {
    messageEl.style.opacity = "0";
  }, 2000);
}


// ---- STEP 4: Search Functionality ----
// Filters the product list based on a search query.
// Checks if the query matches the product name OR any keyword.
function filterProducts(query) {
  const lowerQuery = query.toLowerCase().trim();

  // If search is empty, show all products
  if (!lowerQuery) {
    renderProducts(products);
    return;
  }

  // Array.filter() keeps only products where the test returns true
  const filtered = products.filter((product) => {
    const nameMatch = product.name.toLowerCase().includes(lowerQuery);
    const keywordMatch = product.keywords.some(
      (keyword) => keyword.toLowerCase().includes(lowerQuery)
    );
    return nameMatch || keywordMatch;
  });

  renderProducts(filtered);
}


// ---- STEP 5: Attach Search Event Listeners ----
function attachSearchListeners() {
  const searchBar    = document.querySelector(".search-bar");
  const searchButton = document.querySelector(".search-button");

  if (!searchBar || !searchButton) return;

  // Search when the button is clicked
  searchButton.addEventListener("click", () => {
    filterProducts(searchBar.value);
  });

  // Also search when the user presses Enter in the search box
  // The "keydown" event fires when any key is pressed.
  // event.key === "Enter" checks if it was specifically the Enter key.
  searchBar.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      filterProducts(searchBar.value);
    }
  });

  // Live search – update results as the user types (optional, nice UX)
  searchBar.addEventListener("input", () => {
    filterProducts(searchBar.value);
  });
}


// ============================================================
// PAGE INITIALIZATION
// This code runs when the page first loads.
// We call our setup functions in the correct order.
// ============================================================

// Render all products first
renderProducts(products);

// Then attach search listeners
attachSearchListeners();

// Update cart badge (shows correct number from saved cart)
updateCartBadge();
