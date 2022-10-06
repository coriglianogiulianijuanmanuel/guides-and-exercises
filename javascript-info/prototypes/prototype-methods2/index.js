"use strict";

// There’re so many ways to manage [[Prototype]]. How did that happen? Why?
// That’s for historical reasons.

// The prototypal inheritance was in the language since its dawn, but the ways to manage it evolved over time.

// * The prototype property of a constructor function has worked since very ancient times. It’s the oldest way to create objects with a given prototype.
// * Later, in the year 2012, Object.create appeared in the standard. It gave the ability to create objects with a given prototype, but did not provide the ability to get/set it. Some browsers implemented the non-standard __proto__ accessor that allowed the user to get/set a prototype at any time, to give more flexibility to developers.
// * Later, in the year 2015, Object.setPrototypeOf and Object.getPrototypeOf were added to the standard, to perform the same functionality as __proto__. As __proto__ was de-facto implemented everywhere, it was kind-of deprecated and made its way to the Annex B of the standard, that is: optional for non-browser environments.
// * Later, in the year 2022, it was officially allowed to use __proto__ in object literals {...} (moved out of Annex B), but not as a getter/setter obj.__proto__ (still in Annex B).

// Why was __proto__ replaced by the functions getPrototypeOf/setPrototypeOf?
// Why was __proto__ partially rehabilitated and its usage allowed in {...}, but not as a getter/setter?
// That’s an interesting question, requiring us to understand why __proto__ is bad. And soon we’ll get the answer.

// Don’t change [[Prototype]] on existing objects if speed matters
// Technically, we can get/set [[Prototype]] at any time. But usually we only set it once at the object creation time and don’t modify it anymore: rabbit inherits from animal, and that is not going to change.
// And JavaScript engines are highly optimized for this. Changing a prototype “on-the-fly” with Object.setPrototypeOf or obj.__proto__= is a very slow operation as it breaks internal optimizations for object property access operations. So avoid it unless you know what you’re doing, or JavaScript speed totally doesn’t matter for you.
