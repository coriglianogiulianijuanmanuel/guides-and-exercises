//If we set the prototype of a constructor, we can ensure that all objects created with that constructor are given that prototype:
const personPrototype = {
  greet() {
    console.log(`hello, my name is ${this.name}!`);
  },
};

function Person(name) {
  this.name = name;
}

Object.assign(Person.prototype, personPrototype);
// or
// Person.prototype.greet = personPrototype.greet;

const reuben = new Person("Reuben");
reuben.greet(); // hello, my name is Reuben!

//Properties that are defined directly in the object, like name here, are called own properties, and you can check whether a property is an own property using the static Object.hasOwn() method:
const irma = new Person("Irma");

console.log(Object.hasOwn(irma, "name")); // true
console.log(Object.hasOwn(irma, "greet")); // false
