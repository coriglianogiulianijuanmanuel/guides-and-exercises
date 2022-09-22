"use strict";

let calculator = {
  read() {
    this.a = +prompt("Please, enter a value for 'a'.", 0);
    this.b = +prompt("Please, enter a value for 'b'.", 0);
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
