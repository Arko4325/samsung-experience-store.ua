<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Смартфони Galaxy </title>
    <link rel="stylesheet" href="style.css">
    <div class="cart">
  🛒 Кошик: <span id="cart-count">0</span>
</div>
</head>
<body>

    <div id="cart-modal" class="modal">
    <div class="modal-content">
        <span class="close-modal">&times;</span>
        <h2>Ваш гаманець</h2>
        <div id="cart-items-list">
            </div>
        <hr>
        <div class="cart-total">
            Загальна сума: <span id="total-amount">0</span> ₴
        </div>
        <button id="checkout-btn" class="pay-btn">Оплатити покупку</button>
    </div>
</div>
    <header>
        <div class="container">
            <span class="logo">SAMSUNG Experience Store</span>
            <i class="fas fa-shopping-cart cart-icon"></i>
        </div>
    </header>

    <main>
        <section class="page-hero">
            <div class="container">
                <h1>Смартфони Galaxy</h1>
                <p>Від флагманських інновацій до вражаючої доступності.</p>
            </div>
        </section>

        <section class="products">
            <div class="container">
                <h2>Galaxy S Серія</h2>
                <div class="smartphone-grid">

                    <div class="product-card">
                        <div class="product-card-image">
                            <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTvVa7bvc3SpdYxcGUxBlrQH4lgBWcsneL7sXLB0603XVI192yOji2SDEx6iC7k78hsY3UMMIJui65tczYOXjOCUSXONGMQ9j4LCSFxbQzXTMAHHHmtTO0sho4sDrh_&usqp=CAc" alt="Galaxy S24 Ultra">
                        </div>
                        <div class="product-card-content">
                            <h4>Galaxy S25 Ultra</h4>
                            <ul class="product-specs">
                                <li>✨ Galaxy AI</li>
                                <li>📸 200 Мп камера</li>
                                <li>🖊️ Вбудований S Pen</li>
                            </ul>
                            <div class="product-price">57 999 ₴</div>
                            <button  class="buy-btn">Додати у кошик</button>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="product-card-image">
                            <img src="data:image/jpeg;base64,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" alt="Galaxy S24+">
                        </div>
                        <div class="product-card-content">
                            <h4>Galaxy S25+</h4>
                            <ul class="product-specs">
                                <li>✨ Galaxy AI</li>
                                <li>📸 50 Мп камера</li>
                                <li>🔋 Потужна батарея</li>
                            </ul>
                            <div class="product-price">46 999 ₴</div>
                            <button  class="buy-btn">Додати у кошик</button>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="product-card-image">
                            <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTZQm-10bNSeyPfzWVSj5KWzrKNVb1JSr44WvWJiCA7jYC4cn1nKj8DSOxsX-Dwod5h2vr1g3VkvB24N2159sZRUbeKiXlyC685XQRCwjZPCz5VFsxmvxayT1jxqXi8&usqp=CAc" alt="Galaxy S24">
                        </div>
                        <div class="product-card-content">
                            <h4>Galaxy S25</h4>
                            <ul class="product-specs">
                                <li>✨ Galaxy AI</li>
                                <li>Компактний дизайн</li>
                                <li>📸 50 Мп камера</li>
                            </ul>
                            <div class="product-price">37 999 ₴</div>
                            <button  class="buy-btn">Додати у кошик</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section class="products">
            <div class="container">
                <h2>Galaxy A Серія</h2>
                <div class="smartphone-grid">
                    
                    <div class="product-card">
                        <div class="product-card-image">
                            <img src="data:image/jpeg;base64,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" alt="Galaxy A55">
                        </div>
                        <div class="product-card-content">
                            <h4>Galaxy A56 5G</h4>
                            <ul class="product-specs">
                                <li>💎 Металева рамка</li>
                                <li>📸 50 Мп OIS камера</li>
                                <li>🔋 Батарея до 2-х днів</li>
                            </ul>
                            <div class="product-price">19 999 ₴</div>
                           <button  class="buy-btn">Додати у кошик</button>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="product-card-image">
                            <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTKR5eMrsEltGajw9PE-FbOZbYzm1iNJj3bG3k5otQPa0PD1cnmWrGpCBv9ryqs-q2GmVjmvHLuzKGt09U2jHmG0C9J7kMxn0zRTUIBY5EUZx6atFM3-P5ADMXS5LNEww&usqp=CAc" alt="Galaxy A35">
                        </div>
                        <div class="product-card-content">
                            <h4>Galaxy A36 5G</h4>
                            <ul class="product-specs">
                                <li>🌈 6.6" Super AMOLED 120 Гц</li>
                                <li>📸 50 Мп OIS камера</li>
                                <li>💧 Захист IP67</li>
                            </ul>
                            <div class="product-price">14 999 ₴</div>
                           <button  class="buy-btn">Додати у кошик</button>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="product-card-image">
                            <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRRpfx8Roa0Gk4aIjfeL8_LMWQrbnMdiQC6R0RXqFlV6wDJUxhbAQi_5FWtT4QKc5JbM5xIr5ifxeuKzSLA-RWe8AKI-05866CeCvDlNJ0mm7gMYuedgAvfWb9YPg&usqp=CAc" alt="Galaxy A15">
                        </div>
                        <div class="product-card-content">
                            <h4>Galaxy A26 5G</h4>
                            <ul class="product-specs">
                                <li>🌈 6.5" Super AMOLED 90 Гц</li>
                                <li>📸 Камера 50 Мп</li>
                                <li>🔋 Батарея 5000 мА·год</li>
                            </ul>
                            <div class="product-price">6 999 ₴</div>
                             <button  class="buy-btn">Додати у кошик</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    </main>

    <footer>
        <div class="container">
            <h3>Консультації і замовлення</h3>
            <p class="phone-number">0 800 303 707</p>
            <p class="phone-details">Безкоштовно по Україні<br>Щоденно з 09:00 до 21:00</p>
            <p class="phone-number small">044 495 37 07</p>
            <div class="social-links">
                <span>Info</span> <span>Tele</span> <span>Mess</span>
            </div>
        </div>
    </footer>
