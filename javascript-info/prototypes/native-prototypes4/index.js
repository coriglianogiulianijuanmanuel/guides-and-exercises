"use strict";

// 1
Function.prototype.defer = function (ms) {
  setTimeout(this, ms);
};

function f() {
  console.log("Hello!");
}

f.defer(1000); // shows "Hello!" after 1 second

// 2
Function.prototype.defer2 = function (ms) {
  let f = this;
  return function (...args) {
    setTimeout(() => f.apply(this, args), ms);
  };
};

function func(a, b) {
  console.log(a + b);
}

func.defer2(1000)(1, 2); // shows 3 after 1 second

// Please note: we use this in f.apply to make our decoration work for object methods. So if the wrapper function is called as an object method, then this is passed to the original method f.
let user = {
  name: "John",
  sayHi() {
    console.log(this.name);
  },
};

user.sayHi = user.sayHi.defer2(1000);

user.sayHi();
