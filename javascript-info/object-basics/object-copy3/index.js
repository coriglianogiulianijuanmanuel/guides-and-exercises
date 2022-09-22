"use strict";

/* 
So, copying an object variable creates one more reference to the same object.

But what if we need to duplicate an object?

We can create a new object and replicate the structure of the existing one, by iterating over its properties and copying them on the primitive level.
*/

let user = {
  name: "John",
  age: 30,
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
  clone[key] = user[key];
}

// now clone is a fully independent object with the same content
console.log(user); // { name: 'John', age: 30 }
console.log(clone); // { name: 'John', age: 30 }

clone.name = "Juan";
clone.age = 24;

console.log(user); // { name: 'John', age: 30 }
console.log(clone); // { name: 'Juan', age: 24 }

// We can also use the method Object.assign.
// The syntax is: Object.assign(dest, src1[, src2, src3...])

// The first argument dest is a target object.
// Further arguments src1, ..., srcN (can be as many as needed) are source objects.
// It copies the properties of all source objects src1, ..., srcN into the target dest. In other words, properties of all arguments starting from the second are copied into the first object.
// The call returns dest.

// For instance, we can use it to merge several objects into one:
let user2 = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user2
Object.assign(user2, permissions1, permissions2);

console.log(user2); // { name: 'John', canView: true, canEdit: true }

// If the copied property name already exists, it gets overwritten:
let user3 = { name: "John" };

Object.assign(user3, { name: "Pepe" });

console.log(user3); // { name: 'Pepe' }

// We also can use Object.assign to replace for..in loop for simple cloning:
let user4 = {
  name: "John",
  age: 30,
};

let clone2 = Object.assign({}, user4);
console.log(clone2); // { name: 'John', age: 30 }
// It copies all properties of user into the empty object and returns it.

// There are also other methods of cloning an object, e.g. using the spread syntax clone = {...user}
