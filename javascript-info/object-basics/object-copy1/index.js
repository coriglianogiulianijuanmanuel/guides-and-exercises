"use strict";

/* 
One of the fundamental differences of objects versus primitives is that objects are stored and copied “by reference”, whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.

That’s easy to understand if we look a bit under the hood of what happens when we copy a value.
*/

// Let’s start with a primitive, such as a string. Here we put a copy of message into phrase:
let message = "Hello!";
let phrase = message;
// As a result we have two independent variables, each one storing the string "Hello!".

// Objects are not like that. A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it. Let’s look at an example of such a variable:
let user = {
  name: "John",
};
// The object is stored somewhere in memory, while the user variable has a “reference” to it. We may think of an object variable, such as user, like a sheet of paper with the address of the object on it.
// When we perform actions with the object, e.g. take a property user.name, the JavaScript engine looks at what’s at that address and performs the operation on the actual object.

// Now here’s why it’s important. When an object variable is copied, the reference is copied, but the object itself is not duplicated.
let admin = user; // copy the reference
// Now we have two variables, each storing a reference to the same object. There’s still one object, but now with two variables that reference it. We can use either variable to access the object and modify its contents:
admin.name = "Pepe"; // changed by the "admin" reference

console.log(user.name); // "Pepe", changes are seen from the "user" reference
// It’s as if we had a cabinet with two keys and used one of them (admin) to get into it and make changes. Then, if we later use another key (user), we are still opening the same cabinet and can access the changed contents.
