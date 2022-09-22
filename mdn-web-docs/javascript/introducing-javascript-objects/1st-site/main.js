const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};

/*

//The syntax always follows this pattern:

const objectName = {
  member1Name: member1Value,
  member2Name: member2Value,
  member3Name: member3Value
};

*/
