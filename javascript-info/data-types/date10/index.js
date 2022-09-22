"use strict";

function getWeekDay1(date) {
  let day = date.getDay();
  if (day == 0) return "SU";
  else if (day == 1) return "MO";
  else if (day == 2) return "TU";
  else if (day == 3) return "WE";
  else if (day == 4) return "TH";
  else if (day == 5) return "FR";
  else if (day == 6) return "SA";
}

function getWeekDay2(date) {
  let days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  return days[date.getDay()];
}

let date = new Date(2012, 0, 3); // 3 Jan 2012
alert(getWeekDay1(date)); // should output "TU"
alert(getWeekDay2(date)); // should output "TU"
