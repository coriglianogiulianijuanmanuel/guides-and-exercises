"use strict";

// Partial functions

// Until now we have only been talking about binding this. Let’s take it a step further.
// We can bind not only this, but also arguments. That’s rarely done, but sometimes can be handy.

// The full syntax of bind: let bound = func.bind(context, [arg1], [arg2], ...);

// It allows to bind context as this and starting arguments of the function.
// For instance, we have a multiplication function mul(a, b):
function mul(a, b) {
  return a * b;
}

// Let’s use bind to create a function double on its base:
let double = mul.bind(null, 2);

console.log(double(3)); // = mul(2, 3) = 6
console.log(double(4)); // = mul(2, 4) = 8
console.log(double(5)); // = mul(2, 5) = 10
// The call to mul.bind(null, 2) creates a new function double that passes calls to mul, fixing null as the context and 2 as the first argument. Further arguments are passed “as is”.
// That’s called partial function application – we create a new function by fixing some parameters of the existing one.
// Please note that we actually don’t use this here. But bind requires it, so we must put in something like null.

// The function triple in the code below triples the value:
let triple = mul.bind(null, 3);

console.log(triple(3)); // 9
console.log(triple(4)); // 12
console.log(triple(5)); // 15

/* 
Why do we usually make a partial function?

The benefit is that we can create an independent function with a readable name (double, triple). We can use it and not provide the first argument every time as it’s fixed with bind.

In other cases, partial application is useful when we have a very generic function and want a less universal variant of it for convenience.

For instance, we have a function send(from, to, text). Then, inside a user object we may want to use a partial variant of it: sendTo(to, text) that sends from the current user.
*/
