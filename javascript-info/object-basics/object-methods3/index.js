"use strict";

// It’s common that an object method needs to access the information stored in the object to do its job.
// For instance, the code inside user.sayHi() may need the name of the user

// To access the object, a method can use the this keyword. The value of this is the object “before dot”, the one used to call the method.
let user1 = {
  name: "Juan",
  age: 24,

  sayHi() {
    // "this" is the "current object"
    console.log(this.name);
  },
};

user1.sayHi(); // Juan
// Here during the execution of user.sayHi(), the value of this will be user.

// Technically, it’s also possible to access the object without this, by referencing it via the outer variable:
let user2 = {
  name: "Juan",
  age: 24,

  sayHi() {
    console.log(user2.name);
  },
};

user2.sayHi(); // Juan
// …But such code is unreliable. If we decide to copy user2 to another variable, e.g. admin = user2 and overwrite user2 with something else, then it will access the wrong object.

// That’s demonstrated below:
let user3 = {
  name: "John",
  age: 30,

  sayHi() {
    console.log(user3.name); // leads to an error
  },
};

let admin = user3;
user3 = null; // overwrite to make things obvious

admin.sayHi(); // TypeError: Cannot read property 'name' of null
// If we used this.name instead of user3.name inside the console.log, then the code would work.
