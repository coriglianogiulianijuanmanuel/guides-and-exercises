"use strict";

// Until now we assumed that all properties of user are primitive. But properties can be references to other objects.
let user = {
  name: "John",
  sizes: {
    height: 182,
    weight: 50,
  },
  age: 30,
};

console.log(user.sizes.height); // 182
console.log(user.sizes.weight); // 50

// Now it’s not enough to copy clone.sizes = user.sizes, because user.sizes is an object, and will be copied by reference, so clone and user will share the same sizes:
let clone = Object.assign({}, user);

console.log(clone); // { name: 'John', sizes: { height: 182, weight: 50 }, age: 30 }

console.log(user.sizes === clone.sizes); // true, same object

// user and clone share sizes
user.sizes.height = 100;
user.sizes.weight = 20;

console.log(clone.sizes.height); // 100
console.log(clone.sizes.weight); // 20

// To fix that and make user and clone truly separate objects, we should use a cloning loop that examines each value of user[key] and, if it’s an object, then replicate its structure as well. That is called a “deep cloning” or “structured cloning”. There’s structuredClone method that implements deep cloning.

// The call structuredClone(object) clones the object with all nested properties.
let user2 = {
  name: "John",
  sizes: {
    height: 182,
    weight: 50,
  },
  age: 30,
};

let clone2 = structuredClone(user2);

console.log(clone2);

console.log(user2.sizes === clone2.sizes); // false, different objects

// user2 and clone2 are totally unrelated now
user2.sizes.height = 100;

console.log(clone2.sizes.height); // 182
// The structuredClone method can clone most data types, such as objects, arrays, primitive values.

// It also supports circular references, when an object property references the object itself (directly or via a chain or references).
let user3 = {};

user3.me = user3; // let's create a circular reference: user3.me references the user3 itself

let clone3 = structuredClone(user3);

console.log(clone3.me === clone3); // true
// As you can see, clone3.me references the clone3, not the user3! So the circular reference was cloned correctly as well.

// Although, there are cases when structuredClone fails. For instance, when an object has a function property:
let user4 = {
  f: function () {},
};

let clone4 = structuredClone(user4);

console.log(clone4); //error, function () {} could not be cloned.

// Function properties aren’t supported. To handle such complex cases we may need to use a combination of cloning methods, write custom code or, to not reinvent the wheel, take an existing implementation.
