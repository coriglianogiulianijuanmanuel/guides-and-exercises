"use strict";

// 8
function inBetween(a, b) {
  return function (x) {
    return a <= x && x <= b;
  };
}

function inArray(array) {
  return function (x) {
    return array.includes(x);
  };
}

function oddsGreaterThan(n) {
  return function (x) {
    return x > n && x % 2 != 0;
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

console.log(arr.filter(oddsGreaterThan(2))); // 3,5,7

// 9
function byField(fieldName) {
  return (a, b) => (a[fieldName] > b[fieldName] ? 1 : -1);
}

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

console.log(users.sort(byField("name")));
console.log(users.sort(byField("age")));
console.log(users.sort(byField("surname")));

// 10
function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function () {
      // create a shooter function,
      console.log(j); // that should show its number
    };
    shooters.push(shooter); // and add it to the array
    i++;
  }

  // ...and return the array of shooters
  return shooters;
}

function makeArmy2() {
  let shooters = [];

  for (let i = 0; i < 10; i++) {
    let shooter = function () {
      // shooter function
      console.log(i); // should show its number
    };
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();
let army2 = makeArmy2();

army[0]();
army[1]();
army[2]();

army2[0]();
army2[1]();
army2[2]();
