"use strict";

// As we know from the chapter Garbage collection, JavaScript engine keeps a value in memory while it is “reachable” and can potentially be used.
let john = { name: "John" };

// the object can be accessed, john is the reference to it

// overwrite the reference
john = null;
// the object will be removed from memory

// Usually, properties of an object or elements of an array or another data structure are considered reachable and kept in memory while that data structure is in memory.

// For instance, if we put an object into an array, then while the array is alive, the object will be alive as well, even if there are no other references to it.
let juan = { name: "Juan" };

let array = [juan];

juan = null; // overwrite the reference

// the object previously referenced by juan is stored inside the array
// therefore it won't be garbage-collected
// we can get it as array[0]
console.log(array[0]); // { name: 'Juan' }
console.log(array); // [ { name: 'Juan' } ]

// Similar to that, if we use an object as the key in a regular Map, then while the Map exists, that object exists as well. It occupies memory and may not be garbage collected.
let jonny = { name: "John" };

let map = new Map();
map.set(jonny, "...");

jonny = null; // overwrite the reference

// jonny is stored inside the map,
// we can get it by using map.keys()

// WeakMap is fundamentally different in this aspect. It doesn’t prevent garbage-collection of key objects.
