"use strict";

function pow(x, n) {
  alert(x ** n);
}

let xValue = +prompt("Please, enter the value of 'x'.", 0);
let nValue = +prompt("Please, enter the value of 'n'.", 0);

pow(xValue, nValue);

/* 
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Power ${n} is not supported, use a positive integer`);
} else {
  alert( pow(x, n) );
}
*/
