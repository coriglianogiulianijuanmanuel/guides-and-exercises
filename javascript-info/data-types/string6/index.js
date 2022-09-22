"use strict";

//Changing the case

// Methods toLowerCase() and toUpperCase() change the case:
console.log("Interface".toLowerCase()); // interface
console.log("Interface".toUpperCase()); // INTERFACE

// Or, if we want a single character lowercased:
console.log("Interface"[0].toLowerCase());

// Searching for a substring

// There are multiple ways to look for a substring within a string:

// str.indexOf
// The first method is str.indexOf(substr, pos). It looks for the substr in str, starting from the given position pos, and returns the position where the match was found or -1 if nothing can be found.
let str1 = "Widget with id";

console.log(str1.indexOf("Widget")); // 0, because 'Widget' is found at the beginning
console.log(str1.indexOf("widget")); // -1, not found, the search is case-sensitive
console.log(str1.indexOf("id")); // 1, "id" is found at the position 1 (..idget with id)

// The optional second parameter allows us to start searching from a given position.
// For instance, the first occurrence of "id" is at position 1. To look for the next occurrence, let’s start the search from position 2:
console.log(str1.indexOf("id", 2)); // 12

// If we’re interested in all occurrences, we can run indexOf in a loop. Every new call is made with the position after the previous match:
let str2 = "As sly as a fox, as strong as an ox";

let target = "as"; // let's look for it

let pos1 = 0;
while (true) {
  let foundPos1 = str2.indexOf(target, pos1);
  if (foundPos1 == -1) break;

  console.log(`Found at ${foundPos1}`);
  pos1 = foundPos1 + 1; // continue the search from the next position
}

// The same algorithm can be layed out shorter:
let pos2 = -1;
while ((pos2 = str2.indexOf(target, pos2 + 1)) != -1) {
  console.log(`Found at ${pos2}`);
}

// str.lastIndexOf(substr, position)
// There is also a similar method str.lastIndexOf(substr, position) that searches from the end of a string to its beginning. It would list the occurrences in the reverse order.
let pos3 = str2.length;
while ((pos3 = str2.lastIndexOf(target, pos3 - 1)) != -1) {
  console.log(`Found at ${pos3}`);
}

// There is a slight inconvenience with indexOf in the if test. We can’t put it in the if like this:
let str3 = "Widget with id";

if (str3.indexOf("Widget")) {
  console.log("We found it"); // doesn't work!
}
// The console.log in the example above doesn’t show because str.indexOf("Widget") returns 0 (meaning that it found the match at the starting position). Right, but if considers 0 to be false.
// So, we should actually check for -1, like this:
if (str3.indexOf("Widget") != -1) {
  console.log("We found it"); // works now!
}
