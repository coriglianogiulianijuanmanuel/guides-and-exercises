"use strict";

function Calculator() {
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };

  this.calculate = function (str) {
    let splitArray = str.split(" ");
    let a = +splitArray[0];
    let operator = splitArray[1];
    let b = +splitArray[2];

    if (!this.methods[operator] || isNaN(a) || isNaN(b)) return NaN;

    return this.methods[operator](a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

// 1
let calc = new Calculator();
console.log(calc.calculate("3 + 7")); // 10

// 2
let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log(result); // 8
