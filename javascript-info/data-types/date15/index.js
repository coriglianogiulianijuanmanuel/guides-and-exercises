"use strict";

function getSecondsToTomorrow() {
  let now = new Date();

  let tomorrow = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
    0,
    0,
    0,
    0
  );

  return Math.round((tomorrow - now) / 1000);
}

console.log(getSecondsToTomorrow());
