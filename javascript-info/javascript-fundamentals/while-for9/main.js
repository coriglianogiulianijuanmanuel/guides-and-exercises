"use strict";
let number;

while (true) {
  number = prompt("Please, enter a number greater than 100.", 0);
  if (number > 100 || !number) break;
}

let num;

do {
  num = prompt("Please, enter a number greater than 100.", 0);
} while (num <= 100 && num);

/* 
The loop do..while repeats while both checks are truthy:

The check for num <= 100 – that is, the entered value is still not greater than 100.

The check && num is false when num is null or an empty string. Then the while loop stops too.

P.S. If num is null then num <= 100 is true, so without the 2nd check the loop wouldn’t stop if the user clicks CANCEL. Both checks are required.
*/
