"use strict";

// continue

// The continue directive is a “lighter version” of break. It doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows). We can use it if we’re done with the current iteration and would like to move on to the next one.

// The loop below uses continue to output only odd values:
for (let i = 0; i < 10; i++) {
  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  console.log(i); // 1, 3, 5, 7, 9
}
// For even values of i, the continue directive stops executing the body and passes control to the next iteration of for (with the next number). So console.log is only called for odd values.

// The continue directive helps decrease nesting. A loop that shows odd values could look like this:
for (let i = 0; i < 10; i++) {
  if (i % 2) {
    console.log(i); // 1, 3, 5, 7, 9
  }
}
// From a technical point of view, this is identical to the example above. Surely, we can just wrap the code in an if block instead of using continue. But as a side effect, this created one more level of nesting (the console.log call inside the curly braces). If the code inside of if is longer than a few lines, that may decrease the overall readability.

// Please note that syntax constructs that are not expressions cannot be used with the ternary operator ?. In particular, directives such as break/continue aren’t allowed there.
// (i > 5) ? console.log(i) : continue; // error, continue isn't allowed here
