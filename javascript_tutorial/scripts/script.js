function calculatePrice() {
    let basePrice = Number(document.getElementById('basePrice').value);
    let urgencyMarkup = Number(document.getElementById('urgencyMarkup').value);
    let discount = Number(document.getElementById('discount').value);

    let finalPrice = basePrice + urgencyMarkup - discount;

    document.getElementById('priceResult').innerText = 
        "Расчет стоимости заказа выполнен. Базовая цена: " + basePrice + 
        " руб., наценка за срочность: " + urgencyMarkup + 
        " руб., скидка по промокоду: " + discount + 
        " руб. Финальная цена букета составляет: " + finalPrice + " руб.";
}

function checkBonus() {
    let orderAmount = Number(document.getElementById('orderAmount').value);
    let bonusName;

    if (orderAmount < 1499) {
        bonusName = "бонуса нет";
    } else if (orderAmount >= 1500 && orderAmount <= 2999) {
        bonusName = "открытка";
    } else if (orderAmount >= 3000 && orderAmount <= 4999) {
        bonusName = "топер";
    } else {
        bonusName = "еще один букет";
    }

    document.getElementById('bonusResult').innerText = 
        "Сумма вашего заказа: " + orderAmount + 
        " руб. Ваш автоматически определенный подарок: " + bonusName;
}