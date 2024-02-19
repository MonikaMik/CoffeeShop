import ProductCard from "./components/productCardClass.js";


fetch("data.json")
  .then(res => res.json())
  .then(data => {
    const products = data.products;
    products.forEach(product => {
      const productDiv = new ProductCard(product);
      document.querySelector("#productsContainer").appendChild(productDiv);
    });
  })