"use strict";

/* 
The comma operator , is one of the rarest and most unusual operators. Sometimes, it’s used to write shorter code, so we need to know it in order to understand what’s going on.

The comma operator allows us to evaluate several expressions, dividing them with a comma ,. Each of them is evaluated but only the result of the last one is returned.
*/

let a = (1 + 2, 3 + 4);
console.log(a); // 7 (the result of 3 + 4)

// Please note that the comma operator has very low precedence, lower than =, so parentheses are important in the example above. Without them: a = 1 + 2, 3 + 4 evaluates + first, summing the numbers into a = 3, 7, then the assignment operator = assigns a = 3, and the rest is ignored. It’s like (a = 1 + 2), 3 + 4.

// Why do we need an operator that throws away everything except the last expression?

// Sometimes, people use it in more complex constructs to put several actions in one line.

/*
// three operations in one line
for (a = 1, b = 3, c = a * b; a < 10; a++) {
 ...
}
*/

// Such tricks are used in many JavaScript frameworks. That’s why we’re mentioning them. But usually they don’t improve code readability so we should think well before using them.
