"use strict";

function getSecondsToday() {
  let date = new Date();
  return Math.round(
    date.getHours() * 3600 +
      date.getMinutes() * 60 +
      date.getSeconds() +
      date.getMilliseconds() / 1000
  );
}

console.log(getSecondsToday());
