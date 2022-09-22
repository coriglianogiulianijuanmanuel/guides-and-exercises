const myObject = {
  city: "Madrid",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};

myObject.greet();

console.log(myObject.toString());

//The prototype for myObject:
console.log(Object.getPrototypeOf(myObject)); // Object { }
//This is an object called Object.prototype, and it is the most basic prototype, that all objects have by default.

//The prototype of Object.prototype is null, so it's at the end of the prototype chain:
console.log(Object.getPrototypeOf(Object.getPrototypeOf(myObject))); // null
