"use strict";

// typeof

// The typeof operator returns the type of the argument. It’s useful when we want to process values of different types differently or just want to do a quick check.
// A call to typeof x returns a string with the type name:

console.log(typeof undefined); // "undefined"
console.log(typeof 0); // "number"
console.log(typeof 10n); // "bigint"
console.log(typeof true); // "boolean"
console.log(typeof "foo"); // "string"
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof Math); // "object"  (1)
console.log(typeof null); // "object"  (2)
console.log(typeof console.log); // "function"  (3)

/* 
You may also come across another syntax: typeof(x). It’s the same as typeof x.

To put it clear: typeof is an operator, not a function. The parentheses here aren’t a part of typeof. It’s the kind of parentheses used for mathematical grouping.

Usually, such parentheses contain a mathematical expression, such as (2 + 2), but here they contain only one argument (x). Syntactically, they allow to avoid a space between the typeof operator and its argument, and some people like it.

Some people prefer typeof(x), although the typeof x syntax is much more common.
*/
console.log(typeof (2 + 2)); // "number"
console.log(typeof 2 + 2); // "number2", look at the "2" here
