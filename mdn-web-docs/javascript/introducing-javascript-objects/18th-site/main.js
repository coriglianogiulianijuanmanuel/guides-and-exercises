class Person {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  saludar() {
    console.log(
      `Buenas, buenas! Me llamo ${this.name} y tengo ${this.age} años.`
    );
  }
}

const juan = new Person("Juan", 24);
juan.saludar();

//If you don't need to do any special initialization, you can omit the constructor, and a default constructor will be generated for you:
class Animal {
  sleep() {
    console.log("ZZzzz... ZZzzz...");
  }
}

const spot = new Animal();
spot.sleep();
