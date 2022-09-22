"use strict";

function sumInput() {
  let array = [];
  let arraySum = 0;

  while (true) {
    let arrayItem = prompt("Please, enter a value.", 0);

    if (!isFinite(arrayItem) || arrayItem == "" || arrayItem == null) {
      break;
    }

    array.push(+arrayItem);
  }

  for (let item of array) {
    arraySum += item;
  }

  return arraySum;
}

console.log(sumInput());
