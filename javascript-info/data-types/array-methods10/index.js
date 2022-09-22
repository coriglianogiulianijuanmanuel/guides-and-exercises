"use strict";

function camelize1(str) {
  let arr = str.split("-");

  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }

  return (str = arr.join(""));
}

function camelize2(str) {
  return str
    .split("-")
    .map((element, index) => {
      if (index > 0) return element[0].toUpperCase() + element.slice(1);
      return element;
    })
    .join("");
}

console.log(camelize1("background-color"));
console.log(camelize1("list-style-image"));
console.log(camelize1("-webkit-transition"));

console.log(camelize2("background-color"));
console.log(camelize2("list-style-image"));
console.log(camelize2("-webkit-transition"));
