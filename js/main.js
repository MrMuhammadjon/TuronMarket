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
        renderProduct(data.products);

        let globalQuantitySort = 0;
        let globalSHowAllCounterProductCard = [];


        class ProductCard {
            constructor(cardElement) {
                this.card = cardElement;
                this.quantity = 0;
                this.ifBrowning = false;
                console.log(this.card);


                this.quantityDisplay = this.card.querySelector('.show-counter-product-card');
                this.increaseBtn = this.card.querySelector('.increase');
                this.decreaseBtn = this.card.querySelector('.decrease');
                this.heartIcon = this.card.querySelector('.bxs-heart');
                this.shopingBagIcon = this.card.querySelector('.shop-product-btn');
                this.showAllCounterProductCard = document.getElementById('counter-basket-h1');
                this.CounterSort = document.getElementById('counter-sort-h1');

                this.increaseBtn.addEventListener('click', () => this.increase());
                this.decreaseBtn.addEventListener('click', () => this.decrease());
                this.heartIcon.addEventListener('click', () => this.browningheart());
                this.shopingBagIcon.addEventListener('click', () => this.addToBasket());
            }

            updateDisplay() {
                this.quantityDisplay.textContent = this.quantity;
                this.CounterSort.textContent = globalQuantitySort;
            }

            increase() {
                this.quantity++;
                this.updateDisplay();
            }

            decrease() {
                if (this.quantity > 0) {
                    this.quantity--;
                    this.updateDisplay();
                }
            }

            browningheart() {
                if (!this.ifBrowning) {
                    this.heartIcon.style.color = 'red';
                    this.ifBrowning = true;
                    globalQuantitySort++;
                } else {
                    this.heartIcon.style.color = 'gray';
                    this.ifBrowning = false;
                    if (globalQuantitySort > 0) globalQuantitySort--;
                }
                this.updateDisplay();
            }

            addToBasket(card) {
                if (this.quantity > 0) {
                    globalSHowAllCounterProductCard.push(card);
                    console.log(globalSHowAllCounterProductCard);

                    this.showAllCounterProductCard.innerHTML = parseInt(this.showAllCounterProductCard.innerHTML) + this.quantity;
                    this.updateDisplay();
                } else {
                    alert('Please increase the quantity before adding to the basket.');
                }
            }
        }

        Array.from(document.querySelectorAll('.product-card')).map((cardElement) => {
            new ProductCard(cardElement);
        });



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
                      <h1 class="show-counter-product-card">0</h1>
                  </div>
                  <div id="increase" class="increase">
                      <i class='bx bx-plus'></i>
                  </div>
              </div>
              <button class="shop-product-btn">
                  <i class="bx bx-shopping-bag"></i>
              </button>
          </div>
        </div>
      `;
    });
}

fetchProducts();
