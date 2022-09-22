let num1 = 5;
console.log(num1++);
console.log(num1++);
console.log(num1);
// You will see 5, 6 & 7. This is because in 'num1++' the browser returns the current value, then increments the variable.

let num2 = 6;
num2--;
console.log(num2);

// You can make the browser do it the other way round, increment/decrement the variable then return the value, by putting the operator at the start of the variable instead of the end.

let num3 = 2;
console.log(++num3);
console.log(--num3);

let num4 = 6;
num4++;
num4;
console.log(num4);
let num5 = 6;
num5--;
num5;
console.log(num5);
