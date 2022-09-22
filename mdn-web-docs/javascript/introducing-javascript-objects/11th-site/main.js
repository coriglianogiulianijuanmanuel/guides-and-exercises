function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.myIntroduction = function () {
    console.log(
      `Hi! I'm ${this.name}. I'm ${this.age}, and I want to be a ${this.job}.`
    );
  };
}
