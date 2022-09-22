"use strict";

// Custom “toJSON”

// Like toString for string conversion, an object may provide method toJSON for to-JSON conversion. JSON.stringify automatically calls it if available.

let room = {
  number: 23,
};

let meetup = {
  title: "Conference",
  date: new Date(Date.UTC(2017, 0, 1)),
  room,
};

console.log(JSON.stringify(meetup));

/*
  {
    "title":"Conference",
    "date":"2017-01-01T00:00:00.000Z",  // (1)
    "room": {"number":23}               // (2)
  }
*/

// Here we can see that date (1) became a string. That’s because all dates have a built-in toJSON method which returns such kind of string.

// Now let’s add a custom toJSON for our object room (2):
let room2 = {
  number: 23,
  toJSON() {
    return this.number;
  },
};

let meetup2 = {
  title: "Conference",
  room2,
};

console.log(JSON.stringify(room2)); // 23

console.log(JSON.stringify(meetup2)); // {"title":"Conference","room2":23}
// As we can see, toJSON is used both for the direct call JSON.stringify(room2) and when room2 is nested in another encoded object.
