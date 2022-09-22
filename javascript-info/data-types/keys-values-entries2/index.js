"use strict";

function sumSalaries1(salaries) {
  let result = 0;

  for (let salary of Object.values(salaries)) {
    result += salary;
  }

  return result;
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

// Or, optionally, we could also get the sum using Object.values and reduce:
function sumSalaries2(salaries) {
  return Object.values(salaries).reduce((sum, current) => sum + current, 0);
}

console.log(sumSalaries1(salaries)); // 650

console.log(sumSalaries2(salaries)); // 650
