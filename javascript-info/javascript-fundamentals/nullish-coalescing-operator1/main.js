"use strict";

// Nullish coalescing operator '??'
// The nullish coalescing operator is written as two question marks ??.

// As it treats null and undefined similarly, we’ll use a special term here. For brevity, we’ll say that a value is “defined” when it’s neither null nor undefined.

// The result of a ?? b is:
// * If a is defined (it’s neither null nor undefined), then a.
// * If a isn’t defined (it’s null or undefined), then b.

// ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.

/* 
The nullish coalescing operator isn’t anything completely new. It’s just a nice syntax to get the first “defined” value of the two.

We can rewrite result = a ?? b using the operators that we already know, like this:

result = (a !== null && a !== undefined) ? a : b;
*/

// The common use case for ?? is to provide a default value:

// Here we show user if its value isn’t null/undefined, otherwise Anonymous.
let user;

console.log(user ?? "Anonymous"); // "Anonymous", cause user is undefined

// Here’s the example with user assigned to a name:

let user2 = "John";

console.log(user2 ?? "Anonymous"); // "John", cause user is defined
