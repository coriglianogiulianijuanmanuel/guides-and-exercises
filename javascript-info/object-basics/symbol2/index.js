"use strict";

// Symbols don’t auto-convert to a string

// Most values in JavaScript support implicit conversion to a string. For instance, we can alert almost any value, and it will work. Symbols are special. They don’t auto-convert.

let id = Symbol("id");
alert(id); // TypeError: Cannot convert a Symbol value to a string
// That’s a “language guard” against messing up, because strings and symbols are fundamentally different and should not accidentally convert one into another.

// If we really want to show a symbol, we need to explicitly call .toString() on it:
alert(id.toString()); // Symbol(id), now it works

// Or get symbol.description property to show the description only:
alert(id.description); // id
