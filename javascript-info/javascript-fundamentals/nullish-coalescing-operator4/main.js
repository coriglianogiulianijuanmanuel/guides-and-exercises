"use strict";

/* 
The precedence of the ?? operator is the same as ||. They both equal 3 in the MDN table.

That means that, just like ||, the nullish coalescing operator ?? is evaluated before = and ?, but after most other operations, such as +, *.
*/

// So we may need to add parentheses in expressions like this:
let height = null;
let width = null;

// important: use parentheses
let area = (height ?? 100) * (width ?? 50);

console.log(area); // 5000

// Due to safety reasons, JavaScript forbids using ?? together with && and || operators, unless the precedence is explicitly specified with parentheses.

// The code below triggers a syntax error:
// let x = 1 && 2 ?? 3;

// The limitation is surely debatable, it was added to the language specification with the purpose to avoid programming mistakes, when people start to switch from || to ??.

// Use explicit parentheses to work around it:
let x = (1 && 2) ?? 3;
console.log(x); // 2

// Summary
// The nullish coalescing operator ?? provides a short way to choose the first “defined” value from a list.

// It’s used to assign default values to variables:
height = height ?? 100; // set height=100, if height is null or undefined
