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

class Militar extends Person {
  rank;

  constructor(name, age, rank) {
    super(name, age);
    this.rank = rank;
  }

  saludar() {
    console.log(`Atencionnnn!!! Soy ${this.name}, de ${this.age} años.`);
  }

  miRangoEs() {
    console.log(`Soy ${this.rank}`);
  }
}

const fito = new Militar("Fito", 49, "Capitán general");
fito.saludar();
fito.miRangoEs();
