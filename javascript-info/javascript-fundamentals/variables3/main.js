"use strict";

const myBirthday = "1998.02.02";
// myBirthday = "2002"; They cannot be reassigned. An attempt to do so would cause an error.
// When a programmer is sure that a variable will never change, they can declare it with const to guarantee and clearly communicate that fact to everyone.

// There is a widespread practice to use constants as aliases for difficult-to-remember values that are known prior to execution. Such constants are named using capital letters and underscores.
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";
const COLOR_MY_BACKGROUND = "#2f2f31";

// ...when we need to pick a color
let color = COLOR_MY_BACKGROUND;
console.log(color);

/* 
When should we use capitals for a constant and when should we name it normally? Let’s make that clear.

Being a “constant” just means that a variable’s value never changes. But there are constants that are known prior to execution (like a hexadecimal value for red) and there are constants that are calculated in run-time, during the execution, but do not change after their initial assignment.

In other words, capital-named constants are only used as aliases for “hard-coded” values.
*/
