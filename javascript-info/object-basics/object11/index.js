"use strict";

function sumSalaries(obj) {
  let sum = 0;

  for (let key in obj) {
    sum += obj[key];
  }

  return sum;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let emptySalaries = {};

console.log(sumSalaries(salaries)); // 390
console.log(sumSalaries(emptySalaries)); // 0
