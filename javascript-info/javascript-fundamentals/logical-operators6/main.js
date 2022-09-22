"use strict";

if (age >= 14 && age <= 90) {
  console.log("The age is between 14 and 90 inclusively");
}

if (!(age >= 14 && age <= 90)) {
  console.log("The age is NOT between 14 and 90 inclusively");
}

if (age < 14 || age > 90) {
  console.log("The age is NOT between 14 and 90 inclusively");
}
