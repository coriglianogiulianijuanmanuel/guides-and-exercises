"use strict";

// Labels for break/continue

// Sometimes we need to break out from multiple nested loops at once. The ordinary break would only break the inner loop. That’s not sufficient – labels, come to the rescue!

// A label is an identifier with a colon before a loop. The break <labelName> statement in the loop breaks out to the label

/* 
labelName: for (...) {

  for (...) {
    ...
    break labelName;
    ...
  }

}
*/

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, "");

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
}

alert("Done!");
// In the code above, break outer looks upwards for the label named outer and breaks out of that loop. So the control goes straight from (*) to alert('Done!'). We can also move the label onto a separate line.

// The continue directive can also be used with a label. In this case, code execution jumps to the next iteration of the labeled loop.
labelTest: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j == 2) continue labelTest;
    console.log(j); // 0, 1, 0, 1, 0, 1
  }
}

// Labels do not allow us to jump into an arbitrary place in the code. A break directive must be inside a code block. Technically, any labelled code block will do, e.g.:

/* 
label: {
  // ...
  break label; // works
  // ...
}
*/

// …Although, 99.9% of the time break is used inside loops, as we’ve seen in the examples above. A continue is only possible from inside a loop.
