// Menu data with images and prices in Rupees
const menu = {
  "Burgers": [
    {name: "Cheese Burger", price: 150, img: "https://tse3.mm.bing.net/th/id/OIP.wgPNf_bmgvEVQRn1wdULiwHaE8?pid=Api&P=0&h=180"},
    {name: "Veggie Burger", price: 120, img: "https://tse4.mm.bing.net/th/id/OIP.TxxrKPmCaukkjZgU3SaysgHaE8?pid=Api&P=0&h=180"},
    {name: "Chicken Burger", price: 220, img: "https://tse2.mm.bing.net/th/id/OIP.HqrDswCJxZmfTnoUQIGU3QHaJQ?pid=Api&P=0&h=180"},
  ],
  "Pizzas": [
    {name: "Margherita", price: 250, img: "https://tse1.mm.bing.net/th/id/OIP.r6QNsFDrNL6nrOMhstm88gHaEO?pid=Api&P=0&h=180"},
    {name: "Pepperoni", price: 300, img: "https://tse4.mm.bing.net/th/id/OIP.cZYwjQyugN6fJk7n0lzuzQHaHa?pid=Api&P=0&h=180"},
    {name: "Non-veg overloaded", price: 420, img: "https://tse1.mm.bing.net/th/id/OIP.v98TPSuejs-akvvBjmr-MAAAAA?pid=Api&P=0&h=180"}
  ],
  "Ice Cream": [
    {name: "Blueberry", price: 80, img: "https://tse1.mm.bing.net/th/id/OIP.ZHXQHbHgchXJzMSwgx2R4gHaJQ?pid=Api&P=0&h=180"},
    {name: "Chocolate", price: 90, img: "https://tse2.mm.bing.net/th/id/OIP.WRnsU_WAypIRRikPVk_7wQHaHa?pid=Api&P=0&h=180"},
    {name: "Pistachoi", price: 120, img: "https://tse4.mm.bing.net/th/id/OIP.51q3FMk73wLzbDbIFCUECAHaHa?pid=Api&P=0&h=180"}

  ],
  "Biryani": [
    {name: "Mehfil Biryani", price: 350, img: "https://tse2.mm.bing.net/th/id/OIP.gEjJRCteSqL4xiClK5N80gHaD_?pid=Api&P=0&h=180"},
    {name: "Bawarchi Biryani", price: 400, img: "https://tse3.mm.bing.net/th/id/OIP.0FbEerEAGtsBNK02x3s-QQHaHa?pid=Api&P=0&h=180"},
    {name: "Kritunga Biryani", price: 420, img: "https://tse1.mm.bing.net/th/id/OIP.w9Tho61qBIuSblalc6bvWAHaHa?pid=Api&P=0&h=180"},
  ]
};

let cart = [];
let total = 0;

const menuItemsContainer = document.getElementById("menu-items");
const cartItems = document.getElementById("cart-items");
const totalEl = document.getElementById("total");

// Show menu items of selected category
function showCategory(category) {
  menuItemsContainer.innerHTML = "";
  menu[category].forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "menu-item";
    div.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div class="menu-info">
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
        <button onclick="addToCart('${category}', ${index})">Add to Cart</button>
      </div>
    `;
    menuItemsContainer.appendChild(div);
  });
}

// Add item to cart
function addToCart(category, index) {
  const item = menu[category][index];
  cart.push(item);
  total += item.price;
  updateCart();
}

// Update cart
function updateCart() {
  cartItems.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
  });
  totalEl.textContent = total;
}
