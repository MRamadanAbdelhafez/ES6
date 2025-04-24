const cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartItemsContainer = document.getElementById('cartItems');
const totalItems = document.getElementById('totalItems');
const totalPrice = document.getElementById('totalPrice');
const totalQuantity = document.getElementById('totalQuantity');

const checkoutBtn = document.getElementById('checkoutBtn');

function displayCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;
    let totalQuantityCount = 0;

    cart.forEach(item => {
        const price = (item.priceCents / 100).toFixed(2);
        const itemTotal = (item.quantity * price).toFixed(2);
        total += parseFloat(itemTotal);
        totalQuantityCount += item.quantity;

        const itemDiv = document.createElement('div');
        itemDiv.className = 'cartItem';
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" />
            <div class="cartItemDetails">
                <h3>${item.name}</h3>
                <p class="price">Price: $${price}</p>
                <div class="quantityControl">
                    <button class="decreaseQty" data-id="${item.id}">-</button>
                    <input type="number" value="${item.quantity}" class="quantityInput" data-id="${item.id}" />
                    <button class="increaseQty" data-id="${item.id}">+</button>
                </div>
                <p>Total: $${itemTotal}</p>
            </div>
            <button class="removeBtn" data-id="${item.id}">Remove</button>
        `;
        cartItemsContainer.appendChild(itemDiv);
    });

    totalItems.textContent = cart.length;
    totalQuantity.textContent = totalQuantityCount;
    totalPrice.textContent = total.toFixed(2);
}



function updateCartInLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

cartItemsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('removeBtn')) {
        const productId = e.target.dataset.id;
        const productIndex = cart.findIndex(item => item.id === productId);

        if (productIndex !== -1) {
            cart.splice(productIndex, 1); 
            updateCartInLocalStorage(); 
            displayCart(); 
        }
    }

    if (e.target.classList.contains('decreaseQty')) {
        const productId = e.target.dataset.id;
        const cartItem = cart.find(item => item.id === productId);
        
        if (cartItem && cartItem.quantity > 1) {
            cartItem.quantity -= 1;
            updateCartInLocalStorage(); 
            displayCart(); 
        }
    }

    if (e.target.classList.contains('increaseQty')) {
        const productId = e.target.dataset.id;
        const cartItem = cart.find(item => item.id === productId);
        
        if (cartItem) {
            cartItem.quantity += 1;
            updateCartInLocalStorage();
            displayCart(); 
        }
    }
});

cartItemsContainer.addEventListener('input', (e) => {
    if (e.target.classList.contains('quantityInput')) {
        const productId = e.target.dataset.id;
        const newQuantity = parseInt(e.target.value);

        if (!isNaN(newQuantity) && newQuantity > 0) {
            const cartItem = cart.find(item => item.id === productId);
            
            if (cartItem) {
                cartItem.quantity = newQuantity;
                updateCartInLocalStorage(); 
                displayCart(); 
            }
        }
    }
});

checkoutBtn.addEventListener('click', () => {
    if (cart.length > 0) {
        alert('Proceeding to checkout!');
    } else {
        alert('Your cart is empty!');
    }
});

displayCart();
