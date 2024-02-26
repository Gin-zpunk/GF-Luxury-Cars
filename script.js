document.addEventListener("DOMContentLoaded", function() {
    const productList = document.getElementById("product-list");
  
    // Fetch data from JSON file
    fetch("products.json")
      .then(response => response.json())
      .then(data => {
        data.forEach(product => {
          const productElement = document.createElement("div");
          productElement.classList.add("product");
          productElement.innerHTML = `
            <a href="product.html?id=${product.id}">
              <img class="product-image" src="${product.image}" alt="${product.name}">
              <h2>${product.name}</h2>
              <p>${product.price}</p>
            </a>
          `;
          productList.appendChild(productElement);
        });
      });
  });
  