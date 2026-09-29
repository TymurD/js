let price = 0;
while (price === 0) {
  const event = prompt("Оберіть подію:\n" +
    "1 - Кіно (150 грн)\n" +
    "2 - Театр (220 грн)\n" +
    "3 - Концерт (350 грн)");

  switch (event) {
    case "1":
      price = 150;
      break;
    case "2":
      price = 220;
      break;
    case "3":
      price = 350;
      break;
    default:
      alert("Такої події немає");
  }
}

let day = prompt("Оберіть тип дня:\n1 - Будній\n2 - Вихідний");
while (day !== "1" && day !== "2") {
  alert("Некоректний тип дня");
  day = prompt("Оберіть тип дня:\n1 - Будній\n2 - Вихідний");
}
if (day === "2") {
  price = price * 1.15;
}

let count = +prompt("Кількість квитків (1-6)");
while (!(count >= 1 && count <= 6 && Number.isInteger(count))) {
  alert("Некоректна кількість");
  count = +prompt("Кількість квитків (1-6)");
}

let processed = 0;
let free = 0;
let discounted = 0;
let fullPrice = 0;
let total = 0;

for (let i = 1; i <= count; i++) {
  let age = +prompt(`Вік для квитка ${i} (-1 - завершити)`);
  while (!(age === -1 || (age >= 0 && age <= 120))) {
    alert("Некоректний вік");
    age = +prompt(`Вік для квитка ${i} (-1 - завершити)`);
  }

  if (age === -1) {
    break;
  }

  processed++;

  if (age <= 5) {
    free++;
    continue;
  }

  let ticketPrice = price;
  if (age <= 12) {
    ticketPrice = ticketPrice * 0.5;
  }
  else if (age <= 17) {
    ticketPrice = ticketPrice * 0.8;
  }
  else if (age >= 60) {
    ticketPrice = ticketPrice * 0.75;
  }

  if (age >= 18 && age <= 25 && confirm("Є студентський квиток?")) {
    ticketPrice = ticketPrice * 0.9;
  }

  if (ticketPrice < price) {
    discounted++;
  }
  else {
    fullPrice++;
  }
  total += ticketPrice;
}

if (total > 1000) {
  total = total * 0.95;
}

alert(`Оброблено квитків: ${processed}\n` +
  `Безкоштовні: ${free}\n` +
  `Зі знижкою: ${discounted}\n` +
  `За повною ціною: ${fullPrice}\n` +
  `Загальна сума: ${total} грн`);
