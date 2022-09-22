function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
  return obj;
}

const juan = createPerson("Juan Manuel");
console.log(juan.name);
console.log(juan.introduceSelf());

const franco = createPerson("Franco");
console.log(franco.name);
console.log(franco.introduceSelf());
