"use strict";

// Date and time

// Let’s meet a new built-in object: Date. It stores the date, time and provides methods for date/time management. For instance, we can use it to store creation/modification times, to measure time, or just to print out the current date.

// Creation

// To create a new Date object call new Date() with one of the following arguments:

// new Date()
// Without arguments – create a Date object for the current date and time:
let now = new Date();
console.log(now); // Wed Sep 21 2022 10:23:05 GMT-0300 (Argentina Standard Time)

// new Date(milliseconds)
// Create a Date object with the time equal to number of milliseconds (1/1000 of a second) passed after the Jan 1st of 1970 UTC+0.
// 0 means 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
console.log(Jan01_1970);

// now add 24 hours, get 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
console.log(Jan02_1970);

// An integer number representing the number of milliseconds that has passed since the beginning of 1970 is called a timestamp.
// It’s a lightweight numeric representation of a date. We can always create a date from a timestamp using new Date(timestamp) and convert the existing Date object to a timestamp using the date.getTime() method (see below).
// Dates before 01.01.1970 have negative timestamps, e.g.:
// 31 Dec 1969
let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log(Dec31_1969);

// new Date(datestring)
// If there is a single argument, and it’s a string, then it is parsed automatically. The algorithm is the same as Date.parse uses, we’ll cover it later.
let date1 = new Date("2017-01-26");
console.log(date1);
// The time is not set, so it's assumed to be midnight GMT and
// is adjusted according to the timezone the code is run in
let date2 = new Date("2013-08-05");
console.log(date2);

// new Date(year, month, date, hours, minutes, seconds, ms)
// Create the date with the given components in the local time zone. Only the first two arguments are obligatory.
// * The year should have 4 digits. For compatibility, 2 digits are also accepted and considered 19xx, e.g. 98 is the same as 1998 here, but always using 4 digits is strongly encouraged.
// * The month count starts with 0 (Jan), up to 11 (Dec).
// * The date parameter is actually the day of month, if absent then 1 is assumed.
// * If hours/minutes/seconds/ms is absent, they are assumed to be equal 0.

console.log(new Date(2011, 0, 1, 0, 0, 0, 0)); // 1 Jan 2011, 00:00:00
console.log(new Date(2011, 0, 1)); // the same, hours etc are 0 by default
console.log(new Date(2011, 0)); // the same

// The maximal precision is 1 ms (1/1000 sec):
let date = new Date(2011, 0, 1, 2, 3, 4, 567);
console.log(date); // 1.01.2011, 02:03:04.567
