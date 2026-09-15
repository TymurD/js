// PROBLEM 1
// let age = +prompt("How old are you"), result;
//
// if (age >= 18){
//   result = "Adult";
// }
// else if (age < 18) {
//   if (age > 12){
//     result = "Teen";
//   }
//   else {
//     result = "Kid";
//   }
// }
// alert(result);


// PROBLEM 2
// const login = "admin";
// const password = "12345";
//
// let userLogin, userPassword;
//
// while (true) {
//   userLogin = prompt("enter login:");
//   userPassword = prompt("enter passwor:");
//   if (userLogin === login && userPassword === password) {
//     break;
//   }
//   alert("incorrect login/passowrd");
// }
// alert("logged in");


// PROBLEM 3
// let day = +prompt("Enter a number(1-7)");
//
// if (!(day < 1 && day > 7)){
//   switch (day) {
//     case 1:
//       console.log("Monday");
//       break;
//     case 2:
//       console.log("Tuesday");
//       break;
//     case 3:
//       console.log("Wednesday");
//       break;
//     case 4:
//       console.log("Thursday");
//       break;
//     case 5:
//       console.log("Friday");
//       break;
//     case 6:
//       console.log("Saturday");
//       break;
//     case 7:
//       console.log("Sunday");
//       break;
// }


// PROBLEM 4
let productName = prompt("Enter product name:");
let productPrice = +prompt("Enter price of the product:");
let productCount = +prompt("Enter amount of the product:");
let discountCard = confirm("Do you have a discount card?");
let deliveryType = prompt("Delivery: courrier, post, pickup");

let totalPrice = productPrice * productCount;

// < 2000 - 0%
// > 2000 -5%
// > 5000 - 10%
// > 10000 - 15%

let shopDiscount = 0;
if (totalPrice >= 10000) {
  shopDiscount = 15;
}
else if (totalPrice >= 5000) {
  shopDiscount = 10;
}
else if (totalPrice >= 2000) {
  shopDiscount = 5;
}

// < 2000 - 5%
// > 2000 - 10%
// > 5000 - 12%
// > 10000 - 15%

let shopDiscountCard = 0;
