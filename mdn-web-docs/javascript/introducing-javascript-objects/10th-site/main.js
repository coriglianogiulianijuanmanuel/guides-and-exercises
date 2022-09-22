function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi, I'm ${this.name}.`);
  };
}

const juan = new Person("Juan Manuel");
console.log(juan.name);
console.log(juan.introduceSelf());

const franco = new Person("Franco");
console.log(franco.name);
console.log(franco.introduceSelf());
