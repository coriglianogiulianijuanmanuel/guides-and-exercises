"use strict";

// Using reviver

// Imagine, we got a stringified meetup object from the server. It looks like this:

// title: (meetup title), date: (meetup date)
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// …And now we need to deserialize it, to turn back into JavaScript object. Let’s do it by calling JSON.parse:
let meetup = JSON.parse(str);

//console.log(meetup.date.getDate()); // Error: meetup.date.getDate is not a function
// Whoops! An error! The value of meetup.date is a string, not a Date object. How could JSON.parse know that it should transform that string into a Date?
// Let’s pass to JSON.parse the reviving function as the second argument, that returns all values “as is”, but date will become a Date:
let meetup2 = JSON.parse(str, function (key, value) {
  if (key == "date") return new Date(value);
  return value;
});

console.log(meetup2.date.getDate()); // 30

// By the way, that works for nested objects as well:
let schedule = `{
  "meetups": [
    {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
    {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
  ]
}`;

schedule = JSON.parse(schedule, function (key, value) {
  if (key == "date") return new Date(value);
  return value;
});

console.log(schedule.meetups[0].date.getDate()); // 30
