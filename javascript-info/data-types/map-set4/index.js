"use strict";

// Set

// A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

// Its main methods are:

// new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
// set.add(value) – adds a value, returns the set itself.
// set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// set.has(value) – returns true if the value exists in the set, otherwise false.
// set.clear() – removes everything from the set.
// set.size – is the elements count.

// The main feature is that repeated calls of set.add(value) with the same value don’t do anything. That’s the reason why each value appears in a Set only once.

// For example, we have visitors coming, and we’d like to remember everyone. But repeated visits should not lead to duplicates. A visitor must be “counted” only once.
let set1 = new Set();

let john = { name: "John" };
let pepe = { name: "Pepe" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set1.add(john);
set1.add(pepe);
set1.add(mary);
set1.add(john);
set1.add(mary);

// set keeps only unique values
console.log(set1); // Set(3) { { name: 'John' }, { name: 'Pepe' }, { name: 'Mary' } }
console.log(set1.size); // 3

for (let user of set1) {
  console.log(user.name); // John, Pepe, Mary
}
// The alternative to Set could be an array of users, and the code to check for duplicates on every insertion using arr.find. But the performance would be much worse, because this method walks through the whole array checking every element. Set is much better optimized internally for uniqueness checks.

// testing the other set methods:
// set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// set.has(value) – returns true if the value exists in the set, otherwise false.
// set.clear() – removes everything from the set.
let set2 = new Set();
set2.add("this is the text 1");
set2.add("this is the text 2");
set2.add("this is the text 3");
console.log(set2);
/* 
Set(3) {
  'this is the text 1',
  'this is the text 2',
  'this is the text 3'
}
*/
console.log(set2.has("this is the text 2")); // true
set2.delete("this is the text 2");
console.log(set2.has("this is the text 2")); // false
set2.clear();
console.log(set2); // Set(0) {}

// Iteration over Set

// We can loop over a set either with for..of or using forEach:

let set3 = new Set(["oranges", "apples", "bananas"]);
console.log(set3); // Set(3) { 'oranges', 'apples', 'bananas' }

for (let value of set3) {
  console.log(value); // oranges, apples, bananas
}

// the same with forEach:
set3.forEach((value, valueAgain, set3) => {
  console.log(value); // oranges, apples, bananas
});
// Note the funny thing. The callback function passed in forEach has 3 arguments: a value, then the same value valueAgain, and then the target object. Indeed, the same value appears in the arguments twice.
// That’s for compatibility with Map where the callback passed forEach has three arguments. Looks a bit strange, for sure. But may help to replace Map with Set in certain cases with ease, and vice versa.

// The same methods Map has for iterators are also supported:
// set.keys() – returns an iterable object for values,
// set.values() – same as set.keys(), for compatibility with Map,
// set.entries() – returns an iterable object for entries [value, value], exists for compatibility with Map.
