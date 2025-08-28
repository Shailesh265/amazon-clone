// Toggle Navbar Menu
document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
});

// Future Add to Cart Logic
const cartButtons = document.querySelectorAll(".add-to-cart");
cartButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Product added to cart! (Cart system coming soon 🚀)");
  });
});
