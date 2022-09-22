"use strict";

// Map and Set

// Till now, we’ve learned about the following complex data structures:
// * Objects are used for storing keyed collections.
// * Arrays are used for storing ordered collections.
// But that’s not enough for real life. That’s why Map and Set also exist.

// Map

// Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

// Methods and properties are:

// new Map() – creates the map.
// map.set(key, value) – stores the value by the key.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the value by the key.
// map.clear() – removes everything from the map.
// map.size – returns the current element count.

let map1 = new Map();
map1.set("1", "str1"); // a string key
map1.set(1, "num1"); // a numeric key
map1.set(true, "bool1"); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
console.log(map1.get("1")); // "str1"
console.log(map1.get(1)); // "num1"
console.log(map1.get(true)); // "bool1"

console.log(map1.size); // 3
// As we can see, unlike objects, keys are not converted to strings. Any type of key is possible.

// map[key] isn’t the right way to use a Map
// Although map[key] also works, e.g. we can set map[key] = 2, this is treating map as a plain JavaScript object, so it implies all corresponding limitations (only string/symbol keys and so on).
//So we should use map methods: set, get and so on.

// Map can also use objects as keys.
let juan = { name: "Juan" };

// for every user, let's store their visits count
let map2 = new Map();

// juan is the key for the map
map2.set(juan, 456);

console.log(map2.get(juan)); // 456

// Using objects as keys is one of the most notable and important Map features. The same does not count for Object. String as a key in Object is fine, but we can’t use another Object as a key in Object.
let john = { name: "John" };
let ben = { name: "Ben" };

let visitsCountObj = {}; // try to use an object

visitsCountObj[ben] = 234; // try to use ben object as the key
visitsCountObj[john] = 123; // try to use john object as the key, ben object will get replaced

console.log(visitsCountObj); // { '[object Object]': 123 }
// That's what got written!
console.log(visitsCountObj["[object Object]"]); // 123
// As visitsCountObj is an object, it converts all Object keys, such as john and ben above, to same string "[object Object]". Definitely not what we want.

// How Map compares keys
// To test keys for equivalence, Map uses the algorithm SameValueZero. It is roughly the same as strict equality ===, but the difference is that NaN is considered equal to NaN. So NaN can be used as the key as well.
// This algorithm can’t be changed or customized.

// Chaining
// Every map.set call returns the map itself, so we can “chain” the calls:
let map3 = new Map();
map3.set("1", "str1").set(1, "num1").set(true, "bool1").set(NaN, "nan1");
console.log(map3); // Map(4) { '1' => 'str1', 1 => 'num1', true => 'bool1', NaN => 'nan1' }

// testing the other map methods
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the value by the key.
// map.clear() – removes everything from the map.
let map4 = new Map();
map4.set(1, 1).set(2, 2).set(3, 3);
console.log(map4.has(2)); // true
map4.delete(2);
console.log(map4.has(2)); // false
map4.clear();
console.log(map4); // Map(0) {}
