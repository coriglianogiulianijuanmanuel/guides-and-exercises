"use strict";

// 1
function f1() {
  console.log(this); // null
}

let user = {
  g: f1.bind(null),
};

user.g();

// The context of a bound function is hard-fixed. There’s just no way to further change it. So even while we run user.g(), the original function is called with this=null.

// 2
function f2() {
  console.log(this.name);
}

f2 = f2.bind({ name: "John" }).bind({ name: "Ann" });

f2(); // John

// The exotic bound function object returned by f.bind(...) remembers the context (and arguments if provided) only at creation time. A function cannot be re-bound.

// 3
function sayHi() {
  console.log(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "John",
});

console.log(bound.test); // undefined
// The result of bind is another object. It does not have the test property.
