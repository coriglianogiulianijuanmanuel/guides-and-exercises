"use strict";

// Any part of for can be skipped. The two for semicolons ; must be present. Otherwise, there would be a syntax error.

// We can omit begin if we don’t need to do anything at the loop start.
let a = 0; // we have i already declared and assigned
for (; a < 3; a++) {
  // no need for "begin"
  console.log(a); // 0, 1, 2
}

// We can also remove the step part:
let b = 0;
for (; b < 3; ) {
  // This makes the loop identical to while (i < 3).
  console.log(b++); // 0, 1, 2
}

// We can actually remove everything, creating an infinite loop:

/*
for (;;) {
  // repeats without limits
}
*/
