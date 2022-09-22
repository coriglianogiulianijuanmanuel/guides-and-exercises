"use strict";

// Date.parse from a string

// The method Date.parse(str) can read a date from a string.

// The string format should be: YYYY-MM-DDTHH:mm:ss.sssZ, where:
// YYYY-MM-DD – is the date: year-month-day.
// The character "T" is used as the delimiter.
// HH:mm:ss.sss – is the time: hours, minutes, seconds and milliseconds.
// The optional 'Z' part denotes the time zone in the format +-hh:mm. A single letter Z would mean UTC+0.

// Shorter variants are also possible, like YYYY-MM-DD or YYYY-MM or even YYYY.

// The call to Date.parse(str) parses the string in the given format and returns the timestamp (number of milliseconds from 1 Jan 1970 UTC+0). If the format is invalid, returns NaN.

let ms = Date.parse("2012-01-26T13:51:50.417-07:00");
console.log(ms); // 1327611110417 (timestamp)

// We can instantly create a new Date object from the timestamp:
let date = new Date(Date.parse("2012-01-26T13:51:50.417-07:00"));
console.log(date); // Thu Jan 26 2012 17:51:50 GMT-0300 (Argentina Standard Time)

// Note that unlike many other systems, timestamps in JavaScript are in milliseconds, not in seconds.
console.log(`Loading started ${performance.now()} ms ago.`);
// Something like: "Loading started 34731.26000000001ms ago"
// .26 is microseconds (260 microseconds)
// more than 3 digits after the decimal point are precision errors, only the first 3 are correct
// Node.js has microtime module and other ways. Technically, almost any device and environment allows to get more precision, it’s just not in Date.
