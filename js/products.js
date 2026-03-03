// ============================================================
// products.js  –  Product Data Store
// ============================================================
//
// WHAT IS THIS FILE?
//   Think of this file as a mini-database that lives in the
//   browser.  Instead of calling a real server, we keep all
//   product information right here as a JavaScript array.
//
// WHY STORE PRICE IN PAISE?
//   Floating-point maths in JavaScript is tricky.
//   0.1 + 0.2 === 0.30000000000000004  ← real JS result!
//   Storing the price as an integer (paise, like cents) avoids
//   those bugs completely.  Divide by 100 only when displaying.
//
// HOW OTHER FILES USE THIS:
//   skr.js      → loops through products[] to build the page
//   cart.js     → looks up a product by its id
//   checkout.js → reads name, image, price for the summary
// ============================================================

const products = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "../images/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: { stars: 4.5, count: 9.6 },
    pricePaise: 10000,          // ₹100.00
    keywords: ["socks", "athletic", "clothing"]
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "../images/products/intermediate-composite-basketball.jpg",
    name: "Intermediate Size Basketball",
    rating: { stars: 4, count: 9.2 },
    pricePaise: 200000,          // ₹200.00
    keywords: ["basketball", "sports", "ball"]
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "../images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: { stars: 4.5, count: 9.6 },
    pricePaise: 79900,          // ₹799.00
    keywords: ["tshirt", "clothing", "cotton"]
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "../images/products/6-piece-white-dinner-plate-set.jpg",
    name: "6-piece-white-dinner-plate-set",
    rating: { stars: 4, count: 9.0 },
    pricePaise: 79000,
    keywords: ["plates", "glass ware", "plates combo"]
  },
  {
    id: "5968897c-4d27-4872-89f6-5bcb052746d7",
    image: "../images/products/backpack.jpg",
    name: "backpack (SKY Bags)",
    rating: { stars: 4.5, count: 9.8 },
    pricePaise: 599000,
    keywords: ["bags", "Sky bags", "backpack"]
  },
  {
    id: "b86ae3ff-f612-4832-b62c-b20d2ed0c94e",
    image: "../images/products/bathroom-rug.jpg",
    name: "bathroom-rug",
    rating: { stars: 4, count: 9.0 },
    pricePaise: 400000,
    keywords: ["bath tub", "glass bathroom tub", "bathroom accesaries"]
  },
  {
    id: "aaa2406c-b5e6-4360-a153-23d6c4a07e37",
    image: "../images/products/black-2-slot-toaster.jpg",
    name: "Bread toaster",
    rating: { stars: 3.5, count: 7.0 },
    pricePaise: 369000,
    keywords: ["toaster", "bread toaster", "kitchen accessories"]
  },
  {
    id: "a42e22c2-7896-4a78-9fdc-8bff8d3bf7d7",
    image: "../images/products/blackout-curtains-black.jpg",
    name: "blackout-curtains-black",
    rating: { stars: 4.5, count: 9.8 },
    pricePaise: 12099,
    keywords: ["curtains", "window curtains"]
  },
  {
    id:"a3f9c1e2-7b4d-4c8a-9f21-6e3d5b8a1c90",
    image:"../images/products/coffeemaker-with-glass-carafe-black.jpg",
    name:"coffemaker",
    rating:{stars:4   ,count:9.5    },
    pricePaise:500000,
    keywords:["coffemaker","kitchen accessories","blender"]
  },
    {
    id:"9f1c2a7e-3d4b-4b8f-9c21-7e6a5d2c8f10",
    image:"../images/products/cotton-bath-towels-teal.webp",
    name:"Cotton-bath-towel",
    rating:{stars:4     ,count:9.3    },
    pricePaise:50000,
    keywords:["towel","cotton towel","bath towel"]
  },
    {
    id:"c3a7e9b2-6f1d-4a5c-8b32-1d7e9f4a2c63",
    image:"../images/products/countertop-blender-64-oz.jpg",
    name:"countertop-blender",
    rating:{stars:3.5  ,count: 8.5   },
    pricePaise:389999,
    keywords:["blender","jucier"]
  },
    {
    id:"e8b4c1d9-2a7f-4c6e-9d10-5f3a8b7c2e41",
    image:"../images/products/duvet-cover-set-blue-twin.jpg",
    name:"blue bed sheet",
    rating:{stars:4.5     ,count:9.8    },
    pricePaise:50326,
    keywords:["bed sheet","bed cover"]
  },
    {
    id:"a6d9f3c2-8b1e-4f7a-9c54-2e7d1b8a6f30",
    image:"../images/products/electric-glass-and-steel-hot-water-kettle.webp",
    name:"electric-glass-and-steel-hot-water-kettle",
    rating:{stars:4     ,count: 9.0   },
    pricePaise:200000,
    keywords:["electric glass","steel hot water kettle","kettle"]
  },
    {
    id:"b1e7c4a9-3d2f-4a8c-8f21-6c9d5e2a7b48",
    image:"../images/products/floral-mixing-bowl-set.jpg",
    name:"floral-mixing-bowl-set",
    rating:{stars:3.0     ,count:8.0    },
    pricePaise:19999,
    keywords:["mixing bowel","bowels"]
  },
    {
    id:"d4f8a2c1-7b9e-4e6a-9a32-1f5c8d7b2e60",
    image:"../images/products/men-athletic-shoes-green.jpg",
    name:"men-athletic-shoes-green",
    rating:{stars:2.0     ,count:7.5    },
    pricePaise:150000,
    keywords:["shoes","men's wear","shoes for men"]
  },
    {
    id:"f2c9e1a7-6d4b-4b5f-8c73-9a1e6d3b7c52",
    image:"../images/products/men-golf-polo-t-shirt-blue.jpg",
    name:"polo-t-shirt-blue",
    rating:{stars:4.0     ,count:8.0    },
    pricePaise:50000,
    keywords:["t-shirt","mens-wear","cotton"]
  },
    {
    id:"7e3a9c1d-5b2f-4d8e-9f14-2c6a7b8d1e39",
    image:"../images/products/variations/liquid-laundry-detergent-plain.jpg",
    name:"detergent",
    rating:{stars:3.5     ,count: 8.0   },
    pricePaise:50000,
    keywords:["detergent","laundary"]
  },
    {
    id:"2c8f1e7a-9d3b-4a6c-8e21-5b7d9a4c6f10",
    image:"../images/products/umbrella.jpg",
    name:"umbrella",
    rating:{stars:4.0     ,count:9.0    },
    pricePaise:15000,
    keywords:["umbrella"]
  },
    {
    id:"5a7d2c9e-1f8b-4e3a-9c62-7d1e5b8a3f44",
    image:"../images/products/variations/men-chino-pants-beige.jpg",
    name:"men-chino-pants",
    rating:{stars:4.0   ,count:9.8    },
    pricePaise:60000,
    keywords:["pants","men's wear","chinos"]
  },
    {
    id:"8b2e7c4a-6d1f-4a9e-8f35-2a7c9d1b6e53",
    image:"../images/products/variations/Iphone14.jpg",
    name:"Iphone14",
    rating:{stars:5.0   ,count:10    },
    pricePaise:15000000,
    keywords:["phones","Iphone","mobiles"]
  },
    {
    id:"1d9a6f3c-7b4e-4c8a-9e20-6f2b7d5a8c31",
    image:"../images/products/variations/oneplus.jpg",
    name:"One plus 11R 5G",
    rating:{stars:5.0     ,count:9.8    },
    pricePaise:5000000,
    keywords:["mobiles","phones","one  plus"]
  },
    {
    id:"3f7c1a9e-8d2b-4e6a-8c41-9b5d2a7e6f80",
    image:"../images/products/variations/round-sunglasses-black.jpg",
    name:"round-sunglasses-black",
    rating:{stars:4.5     ,count:9.5    },
    pricePaise:45000,
    keywords:["sunglasses","spectacles"]
  },
    {
    id:"6a1e8c2f-4d9b-4b7c-9a53-1c8d7e2f5b62",
    image:"../images/products/variations/plain-hooded-fleece-sweatshirt-yellow.jpg",
    name:"hooded sweatshirt",
    rating:{stars:4.5     ,count:9.0    },
    pricePaise:35000,
    keywords:["hoode","sweat shirt","shirt"]
  },
   {
    id:"4c9b2a7e-1f6d-4a8e-8b24-7d3a9c1e5f77",
    image:"../images/products/variations/men-slim-fit-summer-shorts-gray.jpg",
    name:"men-slim-fit-summer-shorts-gray",
    rating:{stars:3.5     ,count:8.5    },
    pricePaise:39900,
    keywords:["shorts","pants"]
  },
];


// ---- HELPER: Get a product object by its id ----
// Used by cart.js and checkout.js so they don't have to
// write their own search logic.
//
// Array.find() loops through each element and returns
// the FIRST one where the test function returns true.
// If nothing matches it returns undefined.
function getProduct(productId) {
  return products.find((product) => product.id === productId);
}


// ---- HELPER: Format paise into a ₹ display string ----
// (Math.floor avoids any floating-point weirdness)
//
// Example:  formatPrice(79900)  →  "₹799.00"
function formatPrice(paise) {
  const rupees = Math.floor(paise / 100);
  const paiseRemainder = paise % 100;
  // padStart(2, "0") ensures we always show 2 digits, e.g. "05"
  return `₹${rupees}.${String(paiseRemainder).padStart(2, "0")}`;
}


// ---- HELPER: Generate star-rating HTML ----
// Turns a number like 4.5 into HTML showing filled/half stars.
// We round to nearest 0.5 then map to a CSS class.
function getStarHTML(stars) {
  const rounded = Math.round(stars * 2) / 2;   // nearest 0.5
  return `<img class="product-rating-stars"
    src="../images/ratings/rating-${rounded * 10}.png"
    alt="${stars} stars">`;
}
