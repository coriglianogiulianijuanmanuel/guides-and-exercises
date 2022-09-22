"use strict";

let count = {
  counter: 0,

  counterUp() {
    this.counter++;
    return this;
  },

  counterDown() {
    this.counter--;
    return this;
  },

  showCounter() {
    console.log(this.counter);
    return this;
  },
};

count.showCounter().counterUp().showCounter().counterDown().showCounter();
