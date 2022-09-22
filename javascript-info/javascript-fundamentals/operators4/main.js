"use strict";

/* 
The fact of = being an operator, not a “magical” language construct has an interesting implication.

All operators in JavaScript return a value. That’s obvious for + and -, but also true for =.

The call x = value writes the value into x and then returns it.

Here’s a demo that uses an assignment as part of a more complex expression:
*/
let a = 1,
  b = 2;
let c = 3 - (a = b + 1);
console.log(c); // 0
console.log(a); // 3

/* 
In the example above, the result of expression (a = b + 1) is the value which was assigned to a (that is 3). It is then used for further evaluations.

Funny code, isn’t it? We should understand how it works, because sometimes we see it in JavaScript libraries.

Although, please don’t write the code like that. Such tricks definitely don’t make code clearer or readable.
*/
