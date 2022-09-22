"use strict";

// Getting a substring

// There are 3 methods in JavaScript to get a substring: substring, substr and slice:

// 1. str.slice(start [, end])
// Returns the part of the string from start to (but not including) end.
let str = "Somebody once told me the world is gonna roll me";

console.log(str.slice(0, 8)); // 'Somebody', the substring from 0 to 8 (not including 8)
console.log(str.slice(0, 1)); // 'S', from 0 to 1, but not including 1, so only character at 0

// If there is no second argument, then slice goes till the end of the string:
console.log(str.slice(9)); // 'once told me the world is gonna roll me'

// Negative values for start/end are also possible. They mean the position is counted from the string end:
console.log(str.slice(-7, -3)); // 'roll', start at the 4th position from the right, end at the 1st from the right

// 2. str.substring(start [, end])
// Returns the part of the string between start and end.
// This is almost the same as slice, but it allows start to be greater than end.

// these are same for substring
console.log(str.substring(26, 31)); // 'world'
console.log(str.substring(31, 26)); // 'world'

// ...but not for slice:
console.log(str.slice(26, 31)); // 'world'
console.log(str.slice(31, 26)); // '' (an empty string)

// Negative arguments are (unlike slice) not supported, they are treated as 0.
console.log(str.substring(-7, -3)); // '' (an empty string)
console.log(str.substring(-7, 3)); // 'Som' (str.substring(0, 3))

// 3. str.substr(start [, length])
// Returns the part of the string from start, with the given length.
// In contrast with the previous methods, this one allows us to specify the length instead of the ending position:
console.log(str.substr(26, 5)); // 'world', from the 26th position get 5 characters

// The first argument may be negative, to count from the end:
console.log(str.substr(-7, 7)); // 'roll me', from the 7th position get 7 characters

// This method resides in the Annex B of the language specification. It means that only browser-hosted Javascript engines should support it, and it’s not recommended to use it. In practice, it’s supported everywhere.

/* 
Which one to choose?

All of them can do the job. Formally, substr has a minor drawback: it is described not in the core JavaScript specification, but in Annex B, which covers browser-only features that exist mainly for historical reasons. So, non-browser environments may fail to support it. But in practice it works everywhere.

Of the other two variants, slice is a little bit more flexible, it allows negative arguments and shorter to write. So, it’s enough to remember solely slice of these three methods.
*/
