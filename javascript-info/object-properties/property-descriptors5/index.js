"use strict";

// Object.defineProperties

// There’s a method Object.defineProperties(obj, descriptors) that allows to define many properties at once.

/* 
Object.defineProperties(obj, {
  prop1: descriptor1,
  prop2: descriptor2
  // ...
});
*/

let user1 = {
  name: "Juan",
  surname: "Manuel",
};

Object.defineProperties(user1, {
  name: { value: "Pepe", writable: false },
  surname: { value: "Frog", writable: false },
});

console.log(user1); // { name: 'Pepe', surname: 'Frog' }

// Object.getOwnPropertyDescriptors

// To get all property descriptors at once, we can use the method Object.getOwnPropertyDescriptors(obj).
let descriptors1 = Object.getOwnPropertyDescriptors(user1);
console.log(JSON.stringify(descriptors1, null, 2));

/* 
{
  "name": {
    "value": "Pepe",
    "writable": false,
    "enumerable": true,
    "configurable": true
  },
  "surname": {
    "value": "Frog",
    "writable": false,
    "enumerable": true,
    "configurable": true
  }
}
*/

// Together with Object.defineProperties it can be used as a “flags-aware” way of cloning an object:
// let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));

// Normally when we clone an object, we use an assignment to copy properties, like this:

/*
for (let key in user) {
  clone[key] = user[key]
}
*/

// …But that does not copy flags. So if we want a “better” clone then Object.defineProperties is preferred.
// Another difference is that for..in ignores symbolic and non-enumerable properties, but Object.getOwnPropertyDescriptors returns all property descriptors including symbolic and non-enumerable ones.

let user2 = Object.defineProperties(
  {},
  Object.getOwnPropertyDescriptors(user1)
);

console.log(user2); // { name: 'Pepe', surname: 'Frog' }

let descriptors2 = Object.getOwnPropertyDescriptors(user2);
console.log(JSON.stringify(descriptors2, null, 2));

/* 
{
  "name": {
    "value": "Pepe",
    "writable": false,
    "enumerable": true,
    "configurable": true
  },
  "surname": {
    "value": "Frog",
    "writable": false,
    "enumerable": true,
    "configurable": true
  }
}
*/
