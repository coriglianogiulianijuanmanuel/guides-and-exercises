"use strict";

// Getters/setters

// Just like literal objects, classes may include getters/setters, computed properties etc.
// Here’s an example for user.name implemented using get/set:
class User {
  constructor(name) {
    // invokes the setter
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      alert("Name too short.");
      return;
    }
    this._name = value;
  }
}

let user = new User("Juan");
alert(user.name); // Juan

user = new User(""); // Name too short

// Technically, such class declaration works by creating getters and setters in User.prototype.

// Computed names […]

// Here’s an example with a computed method name using brackets [...]:
class User2 {
  ["say" + "Hi"]() {
    alert("Hello!");
  }
}

new User2().sayHi(); // Hello!
// Such features are easy to remember, as they resemble that of literal objects.
