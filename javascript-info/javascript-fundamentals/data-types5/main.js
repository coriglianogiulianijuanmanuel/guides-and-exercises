"use strict";

// null

/* 
The special null value does not belong to any of the types described above.

It forms a separate type of its own which contains only the null value:
*/
let age = null;
console.log(age); // null
/* 
In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.

It’s just a special value which represents “nothing”, “empty” or “value unknown”.

The code above states that age is unknown.
*/

// undefined

/* 
The special value undefined also stands apart. It makes a type of its own, just like null.

The meaning of undefined is “value is not assigned”.

If a variable is declared, but not assigned, then its value is undefined:
*/
let bloodType;
console.log(bloodType); // undefined

// Technically, it is possible to explicitly assign undefined to a variable:

let myName = "John";
myName = undefined;
console.log(myName);
// …But we don’t recommend doing that. Normally, one uses null to assign an “empty” or “unknown” value to a variable, while undefined is reserved as a default initial value for unassigned things.
