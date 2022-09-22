"use strict";

// Alternative default parameters:

// 1
function showMessage1(text) {
  if (text === undefined) {
    text = "empty message";
  }
  console.log(text);
}

showMessage1(0);
showMessage1(null);
showMessage1(undefined);
showMessage1();

// 2
function showMessage2(text) {
  text = text || "empty message";
  console.log(text);
}

showMessage2(0);
showMessage2(null);
showMessage2(undefined);
showMessage2();

// 3
function showMessage3(text) {
  console.log(text ?? "empty message");
}

showMessage3(0);
showMessage3(null);
showMessage3(undefined);
showMessage3();
