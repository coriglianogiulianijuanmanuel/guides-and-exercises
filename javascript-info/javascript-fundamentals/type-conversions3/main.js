"use strict";

// Boolean conversion is the simplest one.

//It happens in logical operations but can also be performed explicitly with a call to Boolean(value).

// The conversion rule:

// Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
// Other values become true.
alert(Boolean(0)); // false
alert(Boolean("")); // false
alert(Boolean(null)); // false
alert(Boolean(undefined)); // false
alert(Boolean(NaN)); // false
alert(Boolean(1)); // true
alert(Boolean("hello world")); // true
alert(Boolean("0")); //true, because in JavaScript, a non-empty string is always true.
alert(Boolean(" ")); //true, because in JavaScript, a non-empty string is always true.
