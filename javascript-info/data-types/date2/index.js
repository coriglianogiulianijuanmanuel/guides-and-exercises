"use strict";

// Access date components

// There are methods to access the year, month and so on from the Date object:
let date = new Date();
// getFullYear() --> Get the year (4 digits)
console.log(date.getFullYear());
// Not getYear(), but getFullYear()
// Many JavaScript engines implement a non-standard method getYear(). This method is deprecated. It returns 2-digit year sometimes. Please never use it. There is getFullYear() for the year.

// getMonth() --> Get the month, from 0 to 11.
console.log(date.getMonth());

// getDate() --> Get the day of month, from 1 to 31, the name of the method does look a little bit strange.
console.log(date.getDate());

// getHours(), getMinutes(), getSeconds(), getMilliseconds() --> Get the corresponding time components.
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());

// getDay() --> Get the day of week, from 0 (Sunday) to 6 (Saturday). The first day is always Sunday, in some countries that’s not so, but can’t be changed.
console.log(date.getDay());

// All the methods above return the components relative to the local time zone.
// There are also their UTC-counterparts, that return day, month, year and so on for the time zone UTC+0: getUTCFullYear(), getUTCMonth(), getUTCDay(). Just insert the "UTC" right after "get".
console.log(date.getUTCFullYear());
console.log(date.getUTCMonth());
console.log(date.getUTCDate());
console.log(date.getUTCHours());
console.log(date.getUTCMinutes());
console.log(date.getUTCSeconds());
console.log(date.getUTCMilliseconds());
console.log(date.getUTCDay());

// Besides the given methods, there are two special ones that do not have a UTC-variant:

// getTime() --> Returns the timestamp for the date – a number of milliseconds passed from the January 1st of 1970 UTC+0.
console.log(date.getTime());

// getTimezoneOffset() --> Returns the difference between UTC and the local time zone, in minutes:
console.log(date.getTimezoneOffset());
