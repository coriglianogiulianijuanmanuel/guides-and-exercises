"use strict";

let room = {
  number: 23,
};

let meetup = {
  title: "Conference",
  occupiedBy: [{ name: "John" }, { name: "Alice" }],
  place: room,
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    if (key == "self" || (key == "occupiedBy" && value == meetup))
      return undefined;
    return value;
  })
);

console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    return key != "" && value == meetup ? undefined : value;
  })
);
// Here we also need to test key=="" to exclude the first call where it is normal that value is meetup.

/* result should be:
{
  "title":"Conference",
  "occupiedBy":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/
