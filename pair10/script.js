// let student = {
//   name: 'John Doe',
//   role: 'student'
// }
// DOM
// console.log(student.name);
// console.log(document.body);

// let heading = document.getElementsByTagName('h1');
// let headingid = document.getElementsById('profile-name');
// let skills = document.getElementsByClassName('skill');

// let headingH2 = document.querySelector('.skills');
// let skills3 = document.querySelectorAll('.skills');

// let skills2 = document.querySelector('.skills');
// let skills = document.querySelectorAll('.skills');
// for (let skill of skills) {
//     console.log(skill)
// }

let student = {
    name: 'Komarov Ivan',
    role: 'Ліцеїст 11 класу',
    city: 'Kyiv',
    portfolio: 'https://github.com',
}

let nameElement = document.querySelector('#profile-name');
let roleElement = document.querySelector('.profile-role');
let cityElement = document.querySelector('.city');
let portfolioElement = document.querySelector('#profile-link');

nameElement.textContent = student.name;
// roleElement.textContent = student.role;
cityElement.textContent = student.city;

roleElement.innerHTML = '<strong>' + student.role + '</strong>';

portfolioElement.setAttribute('href', student.portfolio);
let skillsElement = document.querySelector('.skills');

let skillsArray = ['HTML', 'CSS', 'JavaScript'];
// skillsElement[0].textContent = 'HTML';
// skillsElement[1].textContent = 'CSS';
// skillsElement[2].textContent = 'JavaScript';

for (let i = 0; i < skillsArray.length; i++) {
    skillsElement[i].textContent = skillsArray[i];
}
