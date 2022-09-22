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

class AgenteSecreto extends Person {
  #mission;
  #secretCode;

  constructor(name, age, mission, secretCode) {
    super(name, age);
    this.#mission = mission;
    this.#secretCode = secretCode;
  }

  saludar() {
    console.log(`I'm ${this.name}, ${this.age} years.`);
  }

  #myMissionPrivate() {
    console.log(`My mission is ${this.#mission}`);
  }

  secretCodeVerification(code) {
    if (code === this.#secretCode) {
      this.#myMissionPrivate();
    }
  }
}
