// let book = {
//   title : "Kobzar",
//   author : "Taras Schevchenko",
//   price : 500,
//   available : true
// };
// console.log(book);
// console.log(boot.title);
// console.log(book['author']);
// book.price = 500;
// console.log(book.price);
//
// for (let key in book) {
//   console.log(`${key}: ${book[key]}`);
// }


let books = [
  {id: 1, title : "Kobzar", author : "Taras Schevchenko", price : 500, available : true},
  {id: 2, title : "Lisova Pisnya", author : "Lesya Ukrainka", price : 600, available : false},
  {id: 3, title : "Tugrolovu", author : "Ivan Bagraniy", price : 450, available : true},
  {id: 4, title : "Eneida", author : "Ivan Kotlyarevskiy", price : 500, available : false},
];

// console.log(book);
books.push({id:5, title: "Zahar Berkut", author: "Ivan Franko", price: 600, available: false});

// for (let book of books) {
//   console.log(`${boot.title} - ${book.author}`);
// }
// books.forEach(function(book) {
//   console.log(`${boot.title} - ${book.author}`);
// });

// let total = books.filter(function(book) {
//   return book.available === true;
// });

// let total = books.filter(book => book.available === true);
//
// console.log(total);
//
// let foundBooks = books.find(book => book.id === 3);
// console.log(foundBooks);
//
// let searchUserBook = prompt("Enter book name");
// let searchBook = books.find(book => book.title === searchUserBook);
// if (searchBook !== undefined) {
//   alert(searchBook);
// } else {
//   alert("There is no such book");
// }
// let titles = books.map(book => book.title);
// console.log(titles);
//
// let bookSales = books.map(book =>{
//   return {
//     id:book.id,
//     title: book.title,
//     author: book.author,
//     price: Math.round(book.price *.9),
//     available: book.available
//   }
// })

let sortedByPrice = books.slice().sort((a, b) => a.price = b.price);
console.log(sortedByPrice);

