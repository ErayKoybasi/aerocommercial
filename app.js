const cartToUp = document.getElementById("cartToUp")


document.addEventListener('DOMContentLoaded', function () {
  let cartToUp = document.getElementById('cartToUp');
  cartToUp.addEventListener('click', openOffcanvas);

  let offcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvas'));
  offcanvas.classlist.add("hide");

  function openOffcanvas() {
      offcanvas.show();
  }
});


document.addEventListener('DOMContentLoaded', function () {
  const cartItemCountElement = document.querySelector('.badge');
  let cartItemCount = 0;

  const products = [
    {
      name: 'Horizon',
      price: 1000,
    },
    {
      name: 'Thunder',
      price: 2000,
    },
    
  ];

  let cart = [];

  function updateCartUI() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotalPrice = document.querySelector('.cart-total-price');

    
    cartItemsContainer.innerHTML = '';

   
    cart.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.name}</td>
        <td>$${item.price.toFixed(2)}</td>
        <td>${item.quantity}</td>
      `;
      cartItemsContainer.appendChild(row);
    });

   
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    cartTotalPrice.textContent = `$${totalPrice.toFixed(2)}`;

   
    cartItemCountElement.textContent = cartItemCount;
  }

  function addToCart(product) {
    const existingItem = cart.find(item => item.name === product.name);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    cartItemCount += 1;
    updateCartUI();
  }

  function removeFromCart(product) {
    const existingItemIndex = cart.findIndex(item => item.name === product.name);

    if (existingItemIndex !== -1) {
      const existingItem = cart[existingItemIndex];

      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        cart.splice(existingItemIndex, 1);
      }

      cartItemCount -= 1;
      updateCartUI();
    }
  }

  
  const addToCartButtons = document.querySelectorAll('#addToCart');
  const removeFromCartButtons = document.querySelectorAll('#removeFromCart');

  addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', () => addToCart(products[index]));
  });

  removeFromCartButtons.forEach((button, index) => {
    button.addEventListener('click', () => removeFromCart(products[index]));
  });
});

const buy = document.getElementById("buyButton")
const remove = document.getElementById("removeButton")

buy.addEventListener("click",function () { 
  alert("Siparişiniz için teşekkürler.")
 })

 
 document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("removeButton").addEventListener("click", removeCart);
});

function removeCart() {
  
  let cartTotalPrice = document.querySelector(".cart-total-price");
  cartTotalPrice.textContent = "$0";
  let cartItems = document.querySelector(".cart-items");
  cartItems.innerHTML = "";
}