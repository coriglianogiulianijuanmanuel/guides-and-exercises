class Person {
  name;

  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`);
  }
}

/*
The name; declaration is optional: you could omit it, and the line this.name = name; in the constructor will create the name property before initializing it. However, listing properties explicitly in the class declaration might make it easier for people reading your code to see which properties are part of this class.

You could also initialize the property to a default value when you declare it, with a line like name = '';.
*/

const giles = new Person("Giles");
giles.introduceSelf();
