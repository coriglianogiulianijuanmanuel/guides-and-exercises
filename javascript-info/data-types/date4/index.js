"use strict";

// Autocorrection

// The autocorrection is a very handy feature of Date objects. We can set out-of-range values, and it will auto-adjust itself.
let date1 = new Date(2011, 0, 32); // 32 Jan 2011 ?!?
console.log(date1); // Wed Feb 01 2011 00:00:00 GMT-0300 (Argentina Standard Time)
// ...is 1st Feb 2011!

// Out-of-range date components are distributed automatically.
// Let’s say we need to increase the date “28 Feb 2016” by 2 days. It may be “2 Mar” or “1 Mar” in case of a leap-year. We don’t need to think about it. Just add 2 days. The Date object will do the rest:
let date2 = new Date(2016, 1, 28);
date2.setDate(date2.getDate() + 2);
console.log(date2); // 1 Mar 2016

// That feature is often used to get the date after the given period of time. For instance, let’s get the date for “70 seconds after now”:
let date3 = new Date();
date3.setSeconds(date3.getSeconds() + 70);
console.log(date3);

// We can also set zero or even negative values. For example:
let date4 = new Date(2016, 0, 2); // 2 Jan 2016
date4.setDate(1); // set day 1 of month
console.log(date4);
date4.setDate(0); // min day is 1, so the last day of the previous month is assumed
console.log(date4); // 31 Dec 2015
