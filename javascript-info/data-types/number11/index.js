"use strict";

function readNumber() {
  let number;

  do {
    number = prompt("Please, enter a valid numeric value.", "");
  } while (!isFinite(number));

  if (number === null || number === "") return null;

  return +number;
}

readNumber();
