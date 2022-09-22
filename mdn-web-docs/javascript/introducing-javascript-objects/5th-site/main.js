const person = {
  name: {
    first: "Bob",
    last: "Smith",
  },
  age: 32,
  bio() {
    console.log(
      `${this["name"]["first"]} ${this["name"]["last"]} is ${this["age"]} years old.`
    );
  },
  introduceSelf() {
    console.log(`Hi! I'm ${this["name"]["first"]}.`);
  },
};
//If an object property name is defined at runtime then you can't use dot notation to access the value, but you can pass the name as a variable inside brackets as shown with input below:
const input = prompt("Get name or age?");
console.log(person[input]);
