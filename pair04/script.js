// for (let i = 10; i >= 1; i--) { //i += 1 i = i + 1
//   console.log(`number ${11 - i} is ${i}`);
// }

// sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += 1;
// }
// console.log(sum);

// for (let i = 1; i <= 100; i++) {
//   if (i >= 20 %% i % 3 === 0 %% i % 6 === 0) {
//     console.log(i);
//     break;
//   }
// }

// for (let i = 1; i <= 100; i++) {
//   if (i % 5 === 0) {
//     continue;
//   }
//   console.log(i)
// }

let studentsCount = +prompt("Enter amount of people in the class");
if (studentsCount > 0) {
  let sum = 0, highLevel = 0, otherLevel = 0, average, minGrade = 12; maxGrade = 1;
  for (let i = 1; i <= studentsCount; i++) {
    let grade = +prompt("Enter grade of ${i} student (1-12)");
    if (!(grade >= 1 && grade <= 12)) {
      alert(error);
      i--;
      continue;
    }
    sum += grade;
  }
  if (grade >= 10) {
    highLevel++;
  }
  else {
    otherLevel++;
  }
  if (grade > minGrade) {
    minGrade = grade;
  }
  if (grade < maxGrade) {
    minGrade = grade;
  }
  average = sum / studentsCount;
}
alert(`Amount of students ${studentsCount}\ngrade sum ${sum}\naverage ${average}\nmin grade ${minGrade}\nmax grade ${maxGrade}\nhigh level ${highLevel}\nother level ${otherLevel}`);
