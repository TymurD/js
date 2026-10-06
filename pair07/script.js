// function showMessage() {
//   console.log("Hellow World!");
// }
//
// showMessage();
// showMessage();
// showMessage();
// showMessage();
// showMessage();

// function showProduct(name, price = "не в наявності") {
//   console.log(`Товар ${name}: ${price}грн;`);
// }
//
// showProduct("Notebook");

// function calculate(price, count) {
//   let total = price * count;
//   return total;
// }
//
// let total = calculate(1000, 4);
// console.log(total);

// function discount(total) {
//   if (total >= 5000) {
//     return 10;
//   }
//   else {
//     return 0;
//   }
// }
// let discount1 = +prompt("Please enter a number");
//
// console.log(discount(discount1));

// function getProductTotal(price, count) {
//   return price * count;
// }
//
// function getDiscount(total) {
//   if (total >= 10000) {
//     return 0.15;
//   }
//   else if (total >= 5000) {
//     return 0.1;
//   }
//   else if (total >= 2500) {
//     return 0.05;
//   }
//   else {
//     return 0;
//   }
// }
//
// function getDiscountValue(total, percent) {
//   return total * percent;
// }
//
// function getFinalPrice(total, discount) {
//   return total - discount;
// }
//
// let productName = prompt("Enter product name:");
// let productPrice = +prompt("Enter price");
// let productCount = +prompt("Enter count");
//
// let productTotal = getProductTotal(productPrice, productCount);
// let discount = getDiscount(productTotal);
// let productDiscountValue = getDiscountValue(productTotal, discount);
// let productFinalPrice = getFinalPrice(productTotal, productDiscountValue);
//
// console.log(`Товар: ${productName}`);
// console.log(`Ціна: ${productPrice} грн.`);
// console.log(`Кількість: ${productCount}`);
// console.log(`Сума: ${productTotal} грн.`);
// console.log(`Знижка: ${discount} %`);
// console.log(`Сума знижки: ${productDiscountValue} грн`);
// console.log(`До сплати: ${productFinalPrice} грн`);











// let start = prompt("start point");
// let finish = prompt("finish point");
// let distance = +prompt("distance in km");
// let fuelConsumption = +prompt("liters per 100 km"); // liters per 100 km
// let fuelPrice = +prompt("hrn per 1 liter"); // per 1 liter
//
// function calculatePrice(distance, fuelConsumption, fuelPrice) {
//   let price = (distance / 100) * fuelConsumption * fuelPrice;
//   return price;
// }
//
// function calculatePriceKm(fuelConsumption, fuelPrice) {
//   let price = (fuelConsumption / 100) * fuelPrice;
//   return price;
// }
//
// console.log(`to travel from ${start} to ${finish} you need ${calculatePrice(distance, fuelConsumption, fuelPrice)} hrn`);







let savedLogin = null;
let savedPassword = null;

function register() {
  let login = prompt("Введіть логін:");
  let password = prompt("Введіть пароль:");

  if (!login || !password) {
    alert("Логін і пароль не можуть бути порожніми!");
    return;
  }

  savedLogin = login;
  savedPassword = password;
  alert("Реєстрація успішна!");
}

function signIn() {
  if (savedLogin === null) {
    alert("Спочатку зареєструйся!");
    return;
  }

  let attempts = 3;

  while (attempts > 0) {
    let login = prompt("Логін:");
    let password = prompt("Пароль:");

    if (login === savedLogin && password === savedPassword) {
      alert("Вхід дозволено!");
      return;
    }

    attempts--;

    if (login !== savedLogin) {
      alert(`Неправильний логін! Залишилось спроб: ${attempts}`);
    }
    else {
      alert(`Неправильний пароль! Залишилось спроб: ${attempts}`);
    }
  }

  alert("Вхід заблоковано! Ви використали всі 3 спроби.");
}

function showMenu() {
  let choice;

  do {
    choice = prompt("1 — Зареєструватися\n2 — Увійти в акаунт\n0 — Вийти");

    switch (choice) {
      case "1":
        register();
        break;
      case "2":
        signIn();
        break;
      case "0":
        alert("До побачення!");
        break;
      default:
        alert("Такого пункту меню не існує!");
    }
  } while (choice !== "0");
}

showMenu();
