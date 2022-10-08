"use strict";

// Wrapping exceptions

// The purpose of the function readUser in the code above is “to read the user data”. There may occur different kinds of errors in the process. Right now we have SyntaxError and ValidationError, but in the future readUser function may grow and probably generate other kinds of errors.
// The code which calls readUser should handle these errors. Right now it uses multiple ifs in the catch block, that check the class and handle known errors and rethrow the unknown ones.

// The scheme is like this:

/* 
try {
  ...
  readUser()  // the potential error source
  ...
} catch (err) {
  if (err instanceof ValidationError) {
    // handle validation errors
  } else if (err instanceof SyntaxError) {
    // handle syntax errors
  } else {
    throw err; // unknown error, rethrow it
  }
}
*/

/* 
In the code above we can see two types of errors, but there can be more.

If the readUser function generates several kinds of errors, then we should ask ourselves: do we really want to check for all error types one-by-one every time?

Often the answer is “No”: we’d like to be “one level above all that”. We just want to know if there was a “data reading error” – why exactly it happened is often irrelevant (the error message describes it). Or, even better, we’d like to have a way to get the error details, but only if we need to.
*/

// The technique that we describe here is called “wrapping exceptions”.
// 1. We’ll make a new class ReadError to represent a generic “data reading” error.
// 2. The function readUser will catch data reading errors that occur inside it, such as ValidationError and SyntaxError, and generate a ReadError instead.
// 3. The ReadError object will keep the reference to the original error in its cause property.

// Then the code that calls readUser will only have to check for ReadError, not for every kind of data reading errors. And if it needs more details of an error, it can check its cause property.

// Here’s the code that defines ReadError and demonstrates its use in readUser and try..catch:
class ReadError extends Error {
  constructor(message, cause) {
    super(message);
    this.cause = cause;
    this.name = "ReadError";
  }
}

class ValidationError extends Error {
  /*...*/
}
class PropertyRequiredError extends ValidationError {
  /* ... */
}

function validateUser(user) {
  if (!user.age) {
    throw new PropertyRequiredError("age");
  }

  if (!user.name) {
    throw new PropertyRequiredError("name");
  }
}

function readUser(json) {
  let user;

  try {
    user = JSON.parse(json);
  } catch (err) {
    if (err instanceof SyntaxError) {
      throw new ReadError("Syntax Error", err);
    } else {
      throw err;
    }
  }

  try {
    validateUser(user);
  } catch (err) {
    if (err instanceof ValidationError) {
      throw new ReadError("Validation Error", err);
    } else {
      throw err;
    }
  }
}

try {
  readUser("{bad json}");
} catch (e) {
  if (e instanceof ReadError) {
    alert(e);
    // Original error: SyntaxError: Unexpected token b in JSON at position 1
    alert("Original error: " + e.cause);
  } else {
    throw e;
  }
}

/* 
In the code above, readUser works exactly as described – catches syntax and validation errors and throws ReadError errors instead (unknown errors are rethrown as usual).

So the outer code checks instanceof ReadError and that’s it. No need to list all possible error types.

The approach is called “wrapping exceptions”, because we take “low level” exceptions and “wrap” them into ReadError that is more abstract. It is widely used in object-oriented programming.
*/
