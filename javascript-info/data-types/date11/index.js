"use strict";

function getLocalDay1(date) {
  return date.getDay() == 0 ? 7 : date.getDay();
}

function getLocalDay2(date) {
  let day = date.getDay();

  if (day == 0) {
    // weekday 0 (sunday) is 7 in european
    day = 7;
  }

  return day;
}

let date = new Date(2012, 0, 3); // 3 Jan 2012
alert(getLocalDay1(date)); // tuesday, should show 2
alert(getLocalDay2(date)); // tuesday, should show 2
