const products = [
  {id:1, name:"Golden Halo Ring", price:2499, icon:"💍"},
  {id:2, name:"Royal Drop Earrings", price:1899, icon:"✨"},
  {id:3, name:"Luna Pearl Necklace", price:3299, icon:"📿"},
  {id:4, name:"Classic Gold Bracelet", price:2799, icon:"⌁"}
];

let cart = [];

const productBox = document.getElementById("products");

productBox.innerHTML = products.map(p => `
<div class="product">
  <div class="product-img">${p.icon}</div>
  <div class="product-info">
    <h3>${p.name}</h3>
    <div class="price">₹${p.price.toLocaleString("en-IN")}</div>
    <button class="add" onclick="addToCart(${p.id})">
      ADD TO CART
    </button>
  </div>
</div>
`).join("");

function addToCart(id) {
  cart.push(products.find(p => p.id === id));
  updateCart();
  openCart();
}

function updateCart() {
  document.getElementById("cartCount").textContent = cart.length;

  document.getElementById("cartItems").innerHTML = cart.length
    ? cart.map((p, i) => `
      <div class="cart-row">
        <span>${p.name}</span>
        <span>
          ₹${p.price.toLocaleString("en-IN")}
          <button onclick="removeItem(${i})"
            style="background:none;border:0;color:#d7ad55;cursor:pointer">
            ×
          </button>
        </span>
      </div>
    `).join("")
    : "<p style='color:#999'>Your cart is empty.</p>";

  document.getElementById("cartTotal").textContent =
    cart.reduce((s,p) => s + p.price, 0).toLocaleString("en-IN");
}

function removeItem(i) {
  cart.splice(i,1);
  updateCart();
}

function openCart() {
  document.getElementById("cartModal").style.display = "flex";
}

function closeCart() {
  document.getElementById("cartModal").style.display = "none";
}

function checkout() {
  alert("Checkout will be connected in the next version.");
}

updateCart();
