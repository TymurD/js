let enrollBtn = document.querySelector('#enrollBtn');
let status = document.querySelector('#status');

enrollBtn.addEventListener('click', function(){
  status.textContent = "Vu uspishno zapisani na kurs!";
  enrollBtn.textContent = "Zapis oformleno";
  status.classList.add('success');
})

let studentName = document.querySelector('#studentName');
let welcome = document.querySelector('#welcome');

studentName.addEventListener('input', function(){
  let name = studentName.value.trim();
  if (name === ""){
    welcome.textContent = "Vitayemo ghosty!"
  }
  else {
    welcome.textContent = "Vitayemo, " + name + "!";
  }
})

let format = document.querySelector('#format');
let strong = document.querySelector('#strong');
format.addEventListener('change', function(){
  let selectPrice = Number(format.value);
  strong.textContent = selectPrice + "hrn";
})

let detailsBtn = document.querySelector('#detailsBtn');
let details = document.querySelector('#details');
detailsBtn.addEventListener('click', function(){
  details.classList.toggle('hidden');


  if (details.classList.contains('hidden')) {
    detailsBtn.textContent = "Pokazatu Opus";
  }
  else {
    detailsBtn.textContent = "Pruhovatu Opus";
  }
})

let card = document.querySelector('#card');
let themeBtn = document.querySelector('#themeBtn');
themeBtn.addEventListener('click', function(){
  card.classList.classList('dark');
  if (card.classList.contains('dark')) {
    themeBtn.textContent = "Svitla tema";
  }
  else {
    themeBtn.textContent = "Temna tema";
  }
})
