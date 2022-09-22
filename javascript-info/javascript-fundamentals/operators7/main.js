"use strict";

// Increment

// Increases a variable by 1:
let counter = 1;
counter++; // works the same as counter = counter + 1, but is shorter
console.log(counter); // 2

// Decrement

// Decreases a variable by 1:
let counter2 = 2;
counter2--; // works the same as counter = counter - 1, but is shorter
console.log(counter2); // 1

// Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error.

// The operators ++ and -- can be placed either before or after a variable.
// When the operator goes after the variable, it is in “postfix form”: counter++/counter--.
// The “prefix form” is when the operator goes before the variable: ++counter/--counter.
// Both of these statements do the same thing: increase/decrease counter by 1.
// The difference is that the prefix form returns the new value while the postfix form returns the old value (prior to increment/decrement). We can only see it if we use the returned value of ++/--.

let counter3 = 1;
let a = ++counter3; // the prefix form ++counter3 increments counter3 and returns the new value, 2
console.log(a); // 2

let counter4 = 1;
let b = counter4++; // the postfix form counter4++ also increments counter4 but returns the old value (prior to increment)
console.log(b); // 1

// If the result of increment/decrement is not used, there is no difference in which form to use:
let counter5 = 0;
counter5++;
++counter5;
console.log(counter5); // 2, the lines above did the same

// If we’d like to increase a value and immediately use the result of the operator, we need the prefix form:
let counter6 = 0;
console.log(++counter6); // 1

// If we’d like to increment a value but use its previous value, we need the postfix form:
let counter7 = 0;
console.log(counter7++); // 0

// The operators ++/-- can be used inside expressions as well. Their precedence is higher than most other arithmetical operations.
let counter8 = 1;
console.log(2 * ++counter8); // 4

let counter9 = 1;
console.log(2 * counter9++); // 2

/* 
Though technically okay, such notation usually makes code less readable. One line does multiple things – not good.

While reading code, a fast “vertical” eye-scan can easily miss something like counter++ and it won’t be obvious that the variable increased.

We advise a style of “one line – one action”:
*/
let counter10 = 1;
console.log(2 * counter10); // 2
counter10++;
