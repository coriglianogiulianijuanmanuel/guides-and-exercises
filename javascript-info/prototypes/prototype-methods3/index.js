"use strict";

// "Very plain" objects

// As we know, objects can be used as associative arrays to store key/value pairs.
// …But if we try to store user-provided keys in it (for instance, a user-entered dictionary), we can see an interesting glitch: all keys work fine except "__proto__".

let obj1 = {};

let key = prompt("What's the key?", "__proto__");
obj1[key] = "some value";

alert(obj1[key]); // [object Object], not "some value"!

// Here, if the user types in __proto__, the assignment in line 4 is ignored!
// That could surely be surprising for a non-developer, but pretty understandable for us. The __proto__ property is special: it must be either an object or null. A string can not become a prototype. That’s why an assignment a string to __proto__ is ignored.
// But we didn’t intend to implement such behavior, right? We want to store key/value pairs, and the key named "__proto__" was not properly saved. So that’s a bug!
// Here the consequences are not terrible. But in other cases we may be storing objects instead of strings in obj, and then the prototype will indeed be changed. As a result, the execution will go wrong in totally unexpected ways.
// What’s worse – usually developers do not think about such possibility at all. That makes such bugs hard to notice and even turn them into vulnerabilities, especially when JavaScript is used on server-side.
// Unexpected things also may happen when assigning to obj.toString, as it’s a built-in object method.

// How can we avoid this problem?
// First, we can just switch to using Map for storage instead of plain objects, then everything’s fine:
let map = new Map();

let key2 = prompt("What's the key?", "__proto__");
map.set(key2, "some value");

alert(map.get(key2)); // "some value" (as intended)

// …But Object syntax is often more appealing, as it’s more concise.
// Fortunately, we can use objects, because language creators gave thought to that problem long ago.

// As we know, __proto__ is not a property of an object, but an accessor property of Object.prototype.
// So, if obj.__proto__ is read or set, the corresponding getter/setter is called from its prototype, and it gets/sets [[Prototype]].
// As it was said in the beginning of this tutorial section: __proto__ is a way to access [[Prototype]], it is not [[Prototype]] itself.

// Now, if we intend to use an object as an associative array and be free of such problems, we can do it with a little trick:
let obj2 = Object.create(null);
// or: obj = { __proto__: null }

let key3 = prompt("What's the key?", "__proto__");
obj2[key3] = "some value";

alert(obj2[key3]); // "some value"

// Object.create(null) creates an empty object without a prototype ([[Prototype]] is null).
// So, there is no inherited getter/setter for __proto__. Now it is processed as a regular data property, so the example above works right.
// We can call such objects “very plain” or “pure dictionary” objects, because they are even simpler than the regular plain object {...}.
// A downside is that such objects lack any built-in object methods, e.g. toString:

/* 
let obj = Object.create(null);

alert(obj); // Error (no toString)
*/

// …But that’s usually fine for associative arrays.

// Note that most object-related methods are Object.something(...), like Object.keys(obj) – they are not in the prototype, so they will keep working on such objects:
let chineseDictionary = Object.create(null);
chineseDictionary.hello = "你好";
chineseDictionary.bye = "再见";

alert(Object.keys(chineseDictionary)); // hello,bye
