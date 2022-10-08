"use strict";

// Rethrowing

// In the example above we use try...catch to handle incorrect data. But is it possible that another unexpected error occurs within the try {...} block? Like a programming error (variable is not defined) or something else, not just this “incorrect data” thing.

let json = '{ "age": 30 }'; // incomplete data

try {
  user = JSON.parse(json); // <-- forgot to put "let" before user

  // ...
} catch (err) {
  console.log("JSON Error: " + err); // JSON Error: ReferenceError: user is not defined
  // (no JSON Error actually)
}

/* 
Of course, everything’s possible! Programmers do make mistakes. Even in open-source utilities used by millions for decades – suddenly a bug may be discovered that leads to terrible hacks.

In our case, try...catch is placed to catch “incorrect data” errors. But by its nature, catch gets all errors from try. Here it gets an unexpected error, but still shows the same "JSON Error" message. That’s wrong and also makes the code more difficult to debug.
*/

// To avoid such problems, we can employ the “rethrowing” technique. The rule is simple:
// Catch should only process errors that it knows and “rethrow” all others.

// The “rethrowing” technique can be explained in more detail as:
// 1. Catch gets all errors.
// 2. In the catch (err) {...} block we analyze the error object err.
// 3. If we don’t know how to handle it, we do throw err.

// Usually, we can check the error type using the instanceof operator:
try {
  user = {
    /*...*/
  };
} catch (err) {
  if (err instanceof ReferenceError) {
    console.log("ReferenceError"); // "ReferenceError" for accessing an undefined variable
  }
}

// We can also get the error class name from err.name property. All native errors have it. Another option is to read err.constructor.name.

// In the code below, we use rethrowing so that catch only handles SyntaxError:
let json2 = '{ "age": 30 }'; // incomplete data
try {
  let user = JSON.parse(json2);

  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name");
  }

  blabla(); // unexpected error

  console.log(user.name);
} catch (err) {
  if (err instanceof SyntaxError) {
    console.log("JSON Error: " + err.message);
  } else {
    throw err; // rethrow (*)
  }
}

// The error throwing on line (*) from inside catch block “falls out” of try...catch and can be either caught by an outer try...catch construct (if it exists), or it kills the script.
// So the catch block actually handles only errors that it knows how to deal with and “skips” all others.

// The example below demonstrates how such errors can be caught by one more level of try...catch:
function readData() {
  let json = '{ "age": 30 }';

  try {
    // ...
    blabla(); // error!
  } catch (err) {
    // ...
    if (!(err instanceof SyntaxError)) {
      throw err; // rethrow (don't know how to deal with it)
    }
  }
}

try {
  readData();
} catch (err) {
  console.log("External catch got: " + err); // caught it!
}

// Here readData only knows how to handle SyntaxError, while the outer try...catch knows how to handle everything.
