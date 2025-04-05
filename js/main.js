// js/pages/blog.js
// fetch('https://dummyjson.com/products/category/smartphones')
// .then(res => res.json())
// .then(console.log);

const BASE_URL = `https://dummyjson.com/products/category/smartphones`;
let productSection = document.getElementById('product-section');

async function fetchProducts() {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    renderProduct(data.products);  // ✅ Pass product list to renderer
  } catch (error) {
    console.log('Error fetching products:', error);
  }
}

function renderProduct(products) {
    productSection.innerHTML = '';
    products.map((product) => {
      productSection.innerHTML += `
        <div class="product-card">
          <div class="product-head">
              <img src="${product.thumbnail}" alt="${product.title}">
              <span>
                  <i class="bx bxs-heart"></i>
              </span>
          </div>
          <div class="product-main">
              <div class="product-main-Special-offers">
                  <div class="symbols">
                      <h1>-20%</h1>
                  </div>
                  <div class="at-symbols">
                      <p>Special offer</p>
                  </div>
              </div>
              <div class="about-product">
                  <h1>${product.title}</h1>
              </div>
              <div class="product-weight">
                  <p>${product.stock}</p><span> pcs</span>
              </div>
              <div class="product-price">
                  <div class="symbols-product-price">
                      <span>$</span>
                      <h1>${product.price}</h1>
                  </div>
                  <div class="actual-price">
                      <span>$</span>
                      <p>${(product.price * 1.1).toFixed(2)}</p>
                  </div>
              </div>
          </div>
          <div class="product-footer">
              <div class="product-counter">
                  <div id="decrease" class="decrease">
                      <i class='bx bx-minus'></i>
                  </div>
                  <div class="show-cunt-product">
                      <h1 id="show-counter-product-card">0</h1>
                  </div>
                  <div id="increase" class="increase">
                      <i class='bx bx-plus'></i>
                  </div>
              </div>
              <div id="salom" class="shop-product-btn">
                  <i class="bx bx-shopping-bag"></i>
              </div>
          </div>
        </div>
      `;
    });
  }
  

fetchProducts();

let addToShop = document.getElementById('salom')

addToShop.addEventListener('click', ()=>{
    console.log('salom');
    
})
