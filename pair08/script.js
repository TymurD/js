// let languages = ["Python", "Javascript", "C++"];
// console.log(languages);
// console.log(languages[1]);
// console.log(languages.length);
//
// for (let i = 0; i < languages.length; i++) {
//   console.log(languages[i]);
// }


// function getSum(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum;
// }
//
// let numbers = [10, 15, 24, 46];
//
// console.log(getSum(numbers));


// let name = [];
// name.push("Ivan");
// name.push("Ivan2");
// name.pop();
// name.unshift("Ivan3", "Ivan4");
// name.shift();
// console.log(name.slice(0, 1));
//
// console.log(name);


// let color = ["red", "green", "blue", "yellow", "brown", "cyan", "white"];
// color = color.splice(0, 1, "pink");
// let deleted = color.splice(4, 2);
// color.splice(2, 0, "pink");
// console.log(color);


// function registerNames(name) {
//   if (name.trim() === "") {
//     alert("Please enter name");
//     return;
//   }
//   let duplicationName = false;
//   for (let i = 0; i < eventNames.length; i++) {
//     if (eventNames[i] === name) {
//       duplicationName = true;
//     }
//   }
//   if (duplicationName) {
//     alert("Registered");
//   } else {
//     eventNames.push(name);
//     alert(`participant ${name} registered`);
//   }
// }
//
// function removeNames(name) {
//   let index = -1;
//   for (i = 0; i < eventNames.length; i++) {
//     if (eventNames[i] === name) {
//       index = i;
//       break;
//     }
//   }
//   if (index === -1) {
//     alert("There is no such participant");
//   } else {
//     eventNames.splice(index, 1);
//     alert(`participant ${name} deleted`);
//   }
// }
//
// function printCount() {
//   alert(`Total amount of participants ${eventNames.length}`);
// }
//
// let eventNames = ["Ivan", "Olha", "Mariia", "Stepan", "Oleh"];
//
// registerNames("Olha");
// removeNames("Olha");
// printCount();


let eventNames = ["Ivan", "Olha", "Mariia", "Stepan", "Oleh"];
// for (let i = 0; i < eventNames.length; i++) {
//   console.log(`${eventNames[i]}`);
// }
//
// for (let name of eventNames) {
//   console.log(`${name}`);
// }

eventNames.forEach(function (name, index) {
  console.log(index);
  console.log(name);
})

