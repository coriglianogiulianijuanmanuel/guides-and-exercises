"use strict";

let user = { name: "John", years: 30 };

let { name, years: age, isAdmin = false } = user;

console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(salaries) {
  let result = null;
  let currentValue = 0;

  for (let [key, value] of Object.entries(salaries)) {
    if (value > currentValue) {
      result = key;
      currentValue = value;
    }
  }

  return result;
}

console.log(topSalary(salaries));
