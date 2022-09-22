"use strict";

let userName = prompt("Please, enter your username.", "");

if (userName == "Admin") {
  let userPassword = prompt("Please, enter your password.", "");
  if (userPassword == "TheMaster") {
    alert("Welcome!");
  } else if (userPassword == "" || userPassword == null) {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (userName == "" || userName == null) {
  alert("Canceled");
} else {
  alert("I don’t know you");
}
