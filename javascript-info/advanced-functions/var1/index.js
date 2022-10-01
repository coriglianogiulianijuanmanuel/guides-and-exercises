"use strict";

// The old "var"

// In the very first chapter about variables, we mentioned three ways of variable declaration:
// 1. let
// 2. const
// 3. var

// The var declaration is similar to let. Most of the time we can replace let by var or vice-versa and expect things to work:
var message = "Hi";
console.log(message); // Hi

// But internally var is a very different beast, that originates from very old times. It’s generally not used in modern scripts, but still lurks in the old ones.
// If you don’t plan on meeting such scripts you may even skip this chapter or postpone it.
// On the other hand, it’s important to understand differences when migrating old scripts from var to let, to avoid odd errors.
