const myData = {
  name: "Juan Manuel Corigliano Giuliani",
  age: 24,
  gamesToPlay: ["nekopara", "fate"],
  introduction() {
    console.log(
      `Hi! My name is ${this.name}, I'm ${this.age}. I want to play ${this.gamesToPlay[0]} & ${this.gamesToPlay[1]}`
    );
  },
};
