document.addEventListener("DOMContentLoaded", function() {
    const productDetails = document.getElementById("product-details");
    
    // Get product ID from URL query parameter
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productId = urlParams.get('id');
    
    // Fetch product detail using productId
    fetch(`products.json?id=${productId}`)
      .then(response => response.json())
      .then(product => {
        productDetails.innerHTML = `
          <h2>${product.name}</h2>
          <img class="product-image" src="${product.image}" alt="${product.name}">
          <p>${product.description}</p>
          <p>${product.price}</p>
        `;
      });
  });
  