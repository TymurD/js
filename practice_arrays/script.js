// N1

let topics = ["JavaScript", "HTML", "CSS", "Git", "WebStorm", "Vue"];
let seats = [12, 8, 15, 0, 6, 10];

let userName = prompt("Enter your name:");
while (userName === null || userName.trim() === "") {
  alert("Name cannot be empty!");
  userName = prompt("Enter your name:");
}
userName = userName.trim();

let birthDay = +prompt("Enter your birth day (1-31):");
while (!(Number.isInteger(birthDay) && birthDay >= 1 && birthDay <= 31)) {
  alert("Incorrect day! Enter a number from 1 to 31");
  birthDay = +prompt("Enter your birth day (1-31):");
}

let birthMonth = +prompt("Enter your birth month (1-12):");
while (!(Number.isInteger(birthMonth) && birthMonth >= 1 && birthMonth <= 12)) {
  alert("Incorrect month! Enter a number from 1 to 12");
  birthMonth = +prompt("Enter your birth month (1-12):");
}

let personalNumber = (userName.length + birthDay + birthMonth) % topics.length;
alert(`Recommended webinar for you: ${topics[personalNumber]}`);

let catalog = "Webinar catalog:\n";
for (let i = 0; i < topics.length; i++) {
  let status;
  if (seats[i] > 0) {
    status = "Registration open";
  }
  else {
    status = "No seats left";
  }
  catalog += `${i + 1}. ${topics[i]} — free seats: ${seats[i]} (${status})\n`;
}
alert(catalog);

let minSeats = +prompt("Enter minimum amount of seats:");
let filtered = "";
let filteredCount = 0;
for (let i = 0; i < topics.length; i++) {
  if (seats[i] >= minSeats) {
    filteredCount++;
    filtered += `${filteredCount}. ${topics[i]} — ${seats[i]} seats\n`;
  }
}

if (filteredCount === 0) {
  alert("There are no webinars with that many seats!");
}
else {
  alert(`Webinars with at least ${minSeats} seats:\n${filtered}`);
}


// N2
let searchName = prompt("Enter webinar name to register:");

if (searchName === null) {
  alert("Search cancelled!");
}
else {
  let foundIndex = -1;
  for (let i = 0; i < topics.length; i++) {
    if (topics[i] === searchName.trim()) {
      foundIndex = i;
      break;
    }
  }

  if (foundIndex === -1) {
    alert(`Webinar "${searchName}" not found!`);
  }
  else if (seats[foundIndex] === 0) {
    alert(`There are no seats left for ${topics[foundIndex]}!`);
  }
  else if (confirm(`Register you for ${topics[foundIndex]}?`)) {
    seats[foundIndex]--;
    alert(`You are successfully registered for ${topics[foundIndex]}!\nSeats left: ${seats[foundIndex]}`);
  }
  else {
    alert("Registration cancelled!");
  }
}


// N3
function getParticipantsList(list) {
  let text = "Participants list:\n";
  for (let i = 0; i < list.length; i++) {
    text += `${i + 1}. ${list[i]}\n`;
  }
  return text;
}

let participants = [];
participants.push(userName);

for (let i = 1; i <= 4; i++) {
  let participant = prompt(`Enter name of participant ${i + 1}:`);

  if (participant === null) {
    alert("Participants input finished!");
    break;
  }

  if (participant.trim() === "") {
    alert("Name cannot be empty!");
    i--;
    continue;
  }

  participants.push(participant.trim());
}

let longerCount = 0;
for (let i = 0; i < participants.length; i++) {
  if (participants[i].length > userName.length) {
    longerCount++;
  }
}

alert(`${getParticipantsList(participants)}\nNames longer than ${userName.length} characters: ${longerCount}`);

if (confirm("Do you want to change a participant name?")) {
  let number = +prompt(`Enter participant number (1-${participants.length}):`);

  if (!(Number.isInteger(number) && number >= 1 && number <= participants.length)) {
    alert("Participant with this number does not exist!");
  }
  else {
    let newName = prompt("Enter new name:");
    while (newName === null || newName.trim() === "") {
      alert("Name cannot be empty!");
      newName = prompt("Enter new name:");
    }

    participants[number - 1] = newName.trim();
    alert(`Name changed!\n${getParticipantsList(participants)}`);
  }
}


// N4
function getVisitStats(values) {
  let sum = 0;
  let max = values[0];
  let min = values[0];

  for (let i = 0; i < values.length; i++) {
    sum += values[i];

    if (values[i] > max) {
      max = values[i];
    }
    if (values[i] < min) {
      min = values[i];
    }
  }

  let average = sum / values.length;
  return [sum, average, max, min];
}

let visits = [24, 18, 32, 0, 15, 27, 9, 21];
let bonus = (birthDay + birthMonth) % 7;

let personalVisits = [];
for (let i = 0; i < visits.length; i++) {
  personalVisits.push(visits[i] + bonus);
}

let stats = getVisitStats(personalVisits);

let thresholdInput = prompt("Enter visits threshold:");
while (thresholdInput === null || thresholdInput.trim() === "" || !(+thresholdInput >= 0)) {
  alert("Incorrect threshold! Enter a non-negative number");
  thresholdInput = prompt("Enter visits threshold:");
}
let threshold = +thresholdInput;

let aboveCount = 0;
for (let i = 0; i < personalVisits.length; i++) {
  if (personalVisits[i] >= threshold) {
    aboveCount++;
  }
}

let visitsText = "";
for (let i = 0; i < personalVisits.length; i++) {
  visitsText += `${personalVisits[i]} `;
}

alert(`Bonus: ${bonus}\nVisits: ${visitsText}\nSum: ${stats[0]}\nAverage: ${stats[1]}\nMax: ${stats[2]}\nMin: ${stats[3]}\nValues not less than ${threshold}: ${aboveCount}`);

if (confirm("Show numbers of webinars that reached the threshold?")) {
  let numbers = "";
  for (let i = 0; i < personalVisits.length; i++) {
    if (personalVisits[i] >= threshold) {
      numbers += `${i + 1} `;
    }
  }

  if (numbers === "") {
    alert("No webinar reached the threshold!");
  }
  else {
    alert(`Webinar numbers: ${numbers}`);
  }
}


// N5
function showWebinars() {
  if (topics.length === 0) {
    alert("Webinar list is empty!");
    return;
  }

  let text = "Webinars:\n";
  for (let i = 0; i < topics.length; i++) {
    text += `${i + 1}. ${topics[i]} — seats: ${seats[i]}\n`;
  }
  alert(text);
}

function findWebinar() {
  let name = prompt("Enter webinar name:");

  if (name === null) {
    alert("Search cancelled!");
    return;
  }

  for (let i = 0; i < topics.length; i++) {
    if (topics[i] === name.trim()) {
      alert(`Webinar ${topics[i]} found under number ${i + 1}. Seats: ${seats[i]}`);
      return;
    }
  }

  alert(`Webinar "${name}" not found!`);
}

function addWebinar() {
  let name = prompt("Enter new webinar name:");

  if (name === null || name.trim() === "") {
    alert("Name cannot be empty!");
    return;
  }

  let count = +prompt("Enter amount of seats:");

  if (!(Number.isInteger(count) && count >= 0)) {
    alert("Incorrect amount of seats!");
    return;
  }

  topics.push(name.trim());
  seats.push(count);
  alert(`Webinar ${name.trim()} added!`);
}

function renameWebinar() {
  let number = +prompt(`Enter webinar number (1-${topics.length}):`);

  if (!(Number.isInteger(number) && number >= 1 && number <= topics.length)) {
    alert("Webinar with this number does not exist!");
    return;
  }

  let name = prompt("Enter new name:");

  if (name === null || name.trim() === "") {
    alert("Name cannot be empty!");
    return;
  }

  alert(`Webinar ${topics[number - 1]} renamed to ${name.trim()}!`);
  topics[number - 1] = name.trim();
}

function removeLastWebinar() {
  if (topics.length === 0) {
    alert("Webinar list is empty!");
    return;
  }

  if (!confirm(`Delete webinar ${topics[topics.length - 1]}?`)) {
    alert("Deletion cancelled!");
    return;
  }

  let removed = topics.pop();
  seats.pop();
  alert(`Webinar ${removed} deleted!`);
}

function showMenu() {
  let choice;

  do {
    choice = prompt("1 — Show webinars\n2 — Add webinar\n3 — Rename by number\n4 — Find webinar\n5 — Delete last webinar\n0 — Exit");

    switch (choice) {
      case "1":
        showWebinars();
        break;
      case "2":
        addWebinar();
        break;
      case "3":
        renameWebinar();
        break;
      case "4":
        findWebinar();
        break;
      case "5":
        removeLastWebinar();
        break;
      case "0":
        if (confirm("Do you really want to exit?")) {
          alert("Goodbye!");
        }
        else {
          choice = "";
        }
        break;
      default:
        alert("This menu option does not exist!");
    }
  } while (choice !== "0");
}

showMenu();


// N6
function distributeRequests(scores) {
  let high = [];
  let medium = [];
  let low = [];

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 85) {
      high.push(scores[i]);
    }
    else if (scores[i] >= 50) {
      medium.push(scores[i]);
    }
    else {
      low.push(scores[i]);
    }
  }

  return [high, medium, low];
}

function getAverage(values) {
  if (values.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    sum += values[i];
  }
  return sum / values.length;
}

let requestScores = [72, 95, 41, 86, 60, 100, 53, 88, 29];
let personalScore = (birthDay * birthMonth + userName.length) % 101;
requestScores.push(personalScore);

let addMore = true;
while (addMore) {
  let input = prompt("Enter new score (0-100):");

  if (input === null) {
    break;
  }

  let score = +input;

  if (input.trim() === "" || !(Number.isInteger(score) && score >= 0 && score <= 100)) {
    alert("Incorrect score! Enter an integer from 0 to 100");
    continue;
  }

  requestScores.push(score);
  addMore = confirm(`Score ${score} added! Continue?`);
}

let groups = distributeRequests(requestScores);
let groupNames = ["high", "medium", "low"];

let result = "";
let maxLength = 0;
for (let i = 0; i < groups.length; i++) {
  let groupText = "";
  for (let j = 0; j < groups[i].length; j++) {
    groupText += `${groups[i][j]} `;
  }

  result += `${groupNames[i]}: ${groupText}— count: ${groups[i].length}, average score: ${getAverage(groups[i])}\n`;

  if (groups[i].length > maxLength) {
    maxLength = groups[i].length;
  }
}

let biggestGroups = "";
for (let i = 0; i < groups.length; i++) {
  if (groups[i].length === maxLength) {
    biggestGroups += `${groupNames[i]} `;
  }
}

let personalGroup;
if (personalScore >= 85) {
  personalGroup = "high";
}
else if (personalScore >= 50) {
  personalGroup = "medium";
}
else {
  personalGroup = "low";
}

alert(`${result}\nBiggest group: ${biggestGroups}\nYour personal score: ${personalScore} (group ${personalGroup})`);
