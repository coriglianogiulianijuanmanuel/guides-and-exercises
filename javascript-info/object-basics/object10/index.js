"use strict";

function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}

let schedule = {};
console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";
console.log(isEmpty(schedule)); // false
