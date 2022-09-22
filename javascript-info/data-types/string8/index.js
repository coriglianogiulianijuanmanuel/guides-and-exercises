"use strict";

// includes, startsWith, endsWith

// The more modern method str.includes(substr, pos) returns true/false depending on whether str contains substr within.
// It’s the right choice if we need to test for the match, but don’t need its position:
console.log("Widget with id".includes("id")); // true
console.log("Hello".includes("Bye")); // false

// The optional second argument of str.includes is the position to start searching from:
console.log("Widget with id".includes("id")); // true
console.log("Widget with id".includes("id", 3)); // true

// The methods str.startsWith and str.endsWith do exactly what they say:
console.log("Widget".startsWith("Wid")); // true, "Widget" starts with "Wid"
console.log("Widget".endsWith("get")); // true, "Widget" ends with "get"
