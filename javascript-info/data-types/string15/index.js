"use strict";

function extractCurrencyValue(str) {
  if (str[0] === "$") {
    return +str.slice(1);
  } else if (str.at(-1) === "$") {
    return +str.slice(0, -1);
  }
}

console.log(extractCurrencyValue("$120"));
console.log(extractCurrencyValue("120$"));
