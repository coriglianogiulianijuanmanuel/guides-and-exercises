"use strict";

let myName = "Juan";
let myAge = 30;

function greetings() {
  let myProfession = "programmer";
  let myName = "Pepe";
  myAge = 24;
  let message = `Hello, my name is ${myName}, I'm a ${myProfession} and I'm ${myAge}`;
  console.log(message);
}

console.log(myName); // Juan
console.log(myAge); // 30

greetings(); // Hello, my name is Pepe, I'm a programmer and I'm 24

console.log(myName); // Juan
console.log(myAge); // 24
