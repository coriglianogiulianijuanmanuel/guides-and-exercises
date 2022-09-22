"use strict";

// WeakMap

// The first difference between Map and WeakMap is that keys must be objects, not primitive values:
let weakMap1 = new WeakMap();

let obj1 = {};

weakMap1.set(obj1, "ok"); // works fine (object key)

// can't use a string as the key
//weakMap1.set("test", "oops"); // TypeError: Invalid value used as weak map key
// Error, because "test" is not an object

// Now, if we use an object as the key in it, and there are no other references to that object – it will be removed from memory (and from the map) automatically.
let john = { name: "John" };

let weakMap2 = new WeakMap();

weakMap2.set(john, "...");
console.log(weakMap2.get(john)); // "..."

john = null; // overwrite the reference
console.log(weakMap2.get(john)); // undefined

// john is removed from memory!
// Now if john only exists as the key of WeakMap – it will be automatically deleted from the map (and memory).

// WeakMap does not support iteration and methods keys(), values(), entries(), so there’s no way to get all keys or values from it.

// WeakMap has only the following methods:

// weakMap.get(key)
// weakMap.set(key, value)
// weakMap.delete(key)
// weakMap.has(key)

// Why such a limitation? That’s for technical reasons. If an object has lost all other references (like john in the code above), then it is to be garbage-collected automatically. But technically it’s not exactly specified when the cleanup happens.

// The JavaScript engine decides that. It may choose to perform the memory cleanup immediately or to wait and do the cleaning later when more deletions happen. So, technically, the current element count of a WeakMap is not known. The engine may have cleaned it up or not, or did it partially. For that reason, methods that access all keys/values are not supported.
