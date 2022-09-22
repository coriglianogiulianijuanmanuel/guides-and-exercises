"use strict";

// String conversion happens when we need the string form of a value.

// For example, alert(value) does it to show the value.

// We can also call the String(value) function to convert a value to a string:

let value = false;
alert(value); // false
alert(typeof value); // boolean

value = String(value); // now value is a string "false"
alert(value); // "false"
alert(typeof value); // string

// A false becomes "false", null becomes "null", etc.
