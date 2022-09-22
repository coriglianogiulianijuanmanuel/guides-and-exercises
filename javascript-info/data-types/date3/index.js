"use strict";

// Setting date components

// The following methods allow to set date/time components:

// setFullYear(year, [month], [date])
// setMonth(month, [date])
// setDate(date)
// setHours(hour, [min], [sec], [ms])
// setMinutes(min, [sec], [ms])
// setSeconds(sec, [ms])
// setMilliseconds(ms)
// setTime(milliseconds) (sets the whole date by milliseconds since 01.01.1970 UTC)

// Every one of them except setTime() has a UTC-variant, for instance: setUTCHours().

// As we can see, some methods can set multiple components at once, for example setHours. The components that are not mentioned are not modified.

let today = new Date();

today.setHours(0);
console.log(today); // still today, but the hour is changed to 0

today.setHours(0, 0, 0, 0);
console.log(today); // still today, now 00:00:00 sharp.
