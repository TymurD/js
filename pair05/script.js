// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// console.log(Number("7") >= 7);

// let age = +prompt("Enter your age");
// while (Number.isNaN(age) || age < 0 || age >= 120) {
//   alert("Error");
//   age = +prompt("Enter your age");
// }
// console.log(age);

// const correctPin = 1111;
//
// let pin = +prompt("Enter a valid pin");
// let tries = 1;

// while (pin !== correctPin && tries <= 3) {
//   pin = +prompt("Enter a valid pin");
//   tries++;
// }
// if (pin === correctPin) {
//   alert("Access allowed");
// }
// else {
//   console.log("Card disabled");
// }
// while (tries >= 3) {
//   let pin = +prompt("Enter a valid pin");
//   if (pin === correctPin) {
//     console.log("Login allowed");
//     break;
//   }
//   tries++;
//   console.log("incorrect pin");
// }

// let menuChoice;
// do {
//   menuChoice = prompt("Choose action:\n" +
//     "1 - Open profile\n" +
//     "2 - Profile settings" +
//     "0 - Exit")
//   if (menuChoice === 1) {
//     console.log("Opening profile");
//   }
//   else if (menuChoice === 2) {
//     console.log("Setting profile up");
//   }
//   else if (menuChoice === 0) {
//     console.log("Exiting")
//   }
// } while (menuChoice !== 0);

let age = +prompt("Введіть свій вік (12-90)");
while (!(age >= 12 && age <= 90)) {
  alert("Некоректний вік");
  age = +prompt("Введіть свій вік (12-90)");
}

const correctPin = 4321;
let pinCorrect = false;

for (let tries = 1; tries <= 3; tries++) {
  let pin = +prompt(`Введіть PIN (спроба ${tries} з 3)`);
  if (pin === correctPin) {
    pinCorrect = true;
    break;
  }
  alert("Неправильний PIN");
}

if (pinCorrect) {
  let menuChoice;
  do {
    menuChoice = prompt("Оберіть пункт меню:\n" +
      "1 - Особистий кабінет\n" +
      "2 - Повідомлення\n" +
      "3 - Налаштування\n" +
      "0 - Вихід");

    switch (menuChoice) {
      case "1":
        alert("Особистий кабінет");
        break;
      case "2":
        alert("Повідомлення");
        break;
      case "3":
        alert("Налаштування");
        break;
      case "0":
        alert("Вихід");
        break;
      default:
        alert("Такого пункту немає.");
    }
  } while (menuChoice !== "0");
}
else {
  alert("Доступ заблоковано");
}

