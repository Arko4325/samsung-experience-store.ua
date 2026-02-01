let cart = [];
const countElement = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const itemsListDisplay = document.getElementById('cart-items-list');
const totalAmountDisplay = document.getElementById('total-amount');

// 1. Додавання у кошик
document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const card = e.target.closest('.product-card');
        const name = card.querySelector('h4').innerText;
        // Очищаємо ціну від пробілів та символу ₴, щоб отримати число
        const price = parseInt(card.querySelector('.product-price').innerText.replace(/[^\d]/g, ''));

        cart.push({ name, price });
        
        // Оновлюємо лічильник
        countElement.innerText = cart.length;
        
        // Анімація кнопки
        button.innerText = "✅ Додано";
        setTimeout(() => { button.innerText = "Додати у кошик"; }, 1000);
    });
});

// 2. Відкриття кошика при натисканні на плашку "Кошик"
document.querySelector('.cart').addEventListener('click', () => {
    renderCart();
    cartModal.style.display = "block";
});

// 3. Функція малювання списку товарів
function renderCart() {
    itemsListDisplay.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        itemsListDisplay.innerHTML = "<p>Ваш гаманець порожній</p>";
    } else {
        cart.forEach((item, index) => {
            total += item.price;
            itemsListDisplay.innerHTML += `
                <div class="cart-item-row">
                    <span>${item.name}</span>
                    <strong>${item.price.toLocaleString()} ₴</strong>
                </div>
            `;
        });
    }
    totalAmountDisplay.innerText = total.toLocaleString();
}

// 4. Закриття вікна
document.querySelector('.close-modal').onclick = () => cartModal.style.display = "none";
window.onclick = (event) => { if (event.target == cartModal) cartModal.style.display = "none"; };

// 5. Кнопка "Оплатити"
document.getElementById('checkout-btn').onclick = () => {
    if (cart.length > 0) {
        alert(`Дякуємо! Оплата на суму ${totalAmountDisplay.innerText} ₴ пройшла успішно.`);
        cart = [];
        countElement.innerText = "0";
        cartModal.style.display = "none";
    } else {
        alert("Кошик порожній!");
    }
};
