"use strict";

// Excluding and transforming: replacer

// The full syntax of JSON.stringify is: let json = JSON.stringify(value[, replacer, space])

// value
// A value to encode.

// replacer
// Array of properties to encode or a mapping function function(key, value).

// space
// Amount of space to use for formatting

// Most of the time, JSON.stringify is used with the first argument only. But if we need to fine-tune the replacement process, like to filter out circular references, we can use the second argument of JSON.stringify.
// If we pass an array of properties to it, only these properties will be encoded.
let room = {
  number: 23,
};

let meetup = {
  title: "Conference",
  participants: [{ name: "John" }, { name: "Alice" }],
  place: room, // meetup references room
};

room.occupiedBy = meetup; // room references meetup

console.log(JSON.stringify(meetup, ["title", "participants"])); // {"title":"Conference","participants":[{},{}]}
// Here we are probably too strict. The property list is applied to the whole object structure. So the objects in participants are empty, because name is not in the list.
// Let’s include in the list every property except room.occupiedBy that would cause the circular reference:
console.log(
  JSON.stringify(meetup, ["title", "participants", "place", "name", "number"])
); // {"title":"Conference","participants":[{"name":"John"},{"name":"Alice"}],"place":{"number":23}}

// Now everything except occupiedBy is serialized. But the list of properties is quite long.
// Fortunately, we can use a function instead of an array as the replacer.
// The function will be called for every (key, value) pair and should return the “replaced” value, which will be used instead of the original one. Or undefined if the value is to be skipped.

// In our case, we can return value “as is” for everything except occupiedBy. To ignore occupiedBy, the code below returns undefined:
console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    console.log(`${key}: ${value}`);
    return key == "occupiedBy" ? undefined : value;
  })
);

/*
:             [object Object]
title:        Conference
participants: [object Object],[object Object]
0:            [object Object]
name:         John
1:            [object Object]
name:         Alice
place:        [object Object]
number:       23
occupiedBy: [object Object]
{"title":"Conference","participants":[{"name":"John"},{"name":"Alice"}],"place":{"number":23}}
*/

// Please note that replacer function gets every key/value pair including nested objects and array items. It is applied recursively. The value of this inside replacer is the object that contains the current property.

// The first call is special. It is made using a special “wrapper object”: {"": meetup}. In other words, the first (key, value) pair has an empty key, and the value is the target object as a whole. That’s why the first line is ":[object Object]" in the example above.

// The idea is to provide as much power for replacer as possible: it has a chance to analyze and replace/skip even the whole object if necessary.
