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

// let studentsCount = +prompt("Enter amount of people in the class");
// if (studentsCount > 0) {
//   let sum = 0, highLevel = 0, otherLevel = 0, average, minGrade = 12; maxGrade = 1;
//   for (let i = 1; i <= studentsCount; i++) {
//     let grade = +prompt("Enter grade of ${i} student (1-12)");
//     if (!(grade >= 1 && grade <= 12)) {
//       alert(error);
//       i--;
//       continue;
//     }
//     sum += grade;
//   }
//   if (grade >= 10) {
//     highLevel++;
//   }
//   else {
//     otherLevel++;
//   }
//   if (grade > minGrade) {
//     minGrade = grade;
//   }
//   if (grade < maxGrade) {
//     minGrade = grade;
//   }
//   average = sum / studentsCount;
// }
// alert(`Amount of students ${studentsCount}\ngrade sum ${sum}\naverage ${average}\nmin grade ${minGrade}\nmax grade ${maxGrade}\nhigh level ${highLevel}\nother level ${otherLevel}`);

let participantsCount = +prompt("Enter amount of test participants");

if (participantsCount > 0) {
  let sum = 0;
  let highCount = 0, midCount = 0, lowCount = 0;
  let maxResult = -1, minResult = 101;
  let firstHundredNumber = 0;

  for (let i = 1; i <= participantsCount; i++) {
    let result = +prompt(`Enter result of participant ${i} (0-100)`);

    if (!(result >= 0 && result <= 100)) {
      alert("Incorrect value, please enter a number from 0 to 100");
      i--;
      continue;
    }

    sum += result;

    if (result >= 90) {
      highCount++;
    }
    else if (result >= 60) {
      midCount++;
    }
    else {
      lowCount++;
    }

    if (result > maxResult) {
      maxResult = result;
    }
    if (result < minResult) {
      minResult = result;
    }

    if (result === 100 && firstHundredNumber === 0) {
      firstHundredNumber = i;
    }
  }

  let average = sum / participantsCount;
  let firstHundredText = firstHundredNumber === 0 ? "none" : firstHundredNumber;

  alert(`Average result: ${average}\n90-100: ${highCount}\n60-89: ${midCount}\nbelow 60: ${lowCount}\nmax result: ${maxResult}\nmin result: ${minResult}\nfirst participant with 100: ${firstHundredText}`);
}
