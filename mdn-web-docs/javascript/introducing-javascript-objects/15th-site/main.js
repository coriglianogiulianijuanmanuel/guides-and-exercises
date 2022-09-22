const personPrototype = {
  greet() {
    console.log("hello!");
  },
  bye() {
    console.log("goodbye!");
  },
};

const carl = Object.create(personPrototype);
carl.greet(); // hello!

const frank = Object.create(personPrototype);
frank.bye(); // goodbye!
