"use strict";

// Closure

// Usually, a function remembers where it was born in the special property [[Environment]]. It references the Lexical Environment from where it’s created.
// But when a function is created using new Function, its [[Environment]] is set to reference not the current Lexical Environment, but the global one.
// So, such function doesn’t have access to outer variables, only to the global ones.

function getFunc1() {
  let value = "test";

  let func = new Function("console.log(value)");

  return func;
}

// getFunc1()(); // ReferenceError: value is not defined

// Compare it with the regular behavior:
function getFunc2() {
  let value = "test";

  let func = function () {
    console.log(value);
  };

  return func;
}

getFunc2()(); // "test", from the Lexical Environment of getFunc

/* 
This special feature of new Function looks strange, but appears very useful in practice.

Imagine that we must create a function from a string. The code of that function is not known at the time of writing the script (that’s why we don’t use regular functions), but will be known in the process of execution. We may receive it from the server or from another source.

Our new function needs to interact with the main script.

What if it could access the outer variables?

The problem is that before JavaScript is published to production, it’s compressed using a minifier – a special program that shrinks code by removing extra comments, spaces and – what’s important, renames local variables into shorter ones.

For instance, if a function has let userName, minifier replaces it with let a (or another letter if this one is occupied), and does it everywhere. That’s usually a safe thing to do, because the variable is local, nothing outside the function can access it. And inside the function, minifier replaces every mention of it. Minifiers are smart, they analyze the code structure, so they don’t break anything. They’re not just a dumb find-and-replace.

So if new Function had access to outer variables, it would be unable to find renamed userName.

If new Function had access to outer variables, it would have problems with minifiers.

Besides, such code would be architecturally bad and prone to errors.

To pass something to a function, created as new Function, we should use its arguments.
*/

// For historical reasons, arguments can also be given as a comma-separated list.

// These three declarations mean the same:
let func1 = new Function("a", "b", "return a + b"); // basic syntax
let func2 = new Function("a,b", "return a + b"); // comma-separated
let func3 = new Function("a , b", "return a + b"); // comma-separated with spaces

console.log(func1(1, 2)); // 3
console.log(func2(1, 2)); // 3
console.log(func3(1, 2)); // 3
