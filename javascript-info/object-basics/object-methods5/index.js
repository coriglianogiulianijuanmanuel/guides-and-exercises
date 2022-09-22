"use strict";

// We can even call the function without an object at all:
function sayHi() {
  console.log(this);
}

sayHi(); // undefined

/*
In this case this is undefined in strict mode. If we try to access this.name, there will be an error. In non-strict mode the value of this in such case will be the global object (window in a browser, we’ll get to it later in the chapter Global object). This is a historical behavior that "use strict" fixes. Usually such call is a programming error. If there’s this inside a function, it expects to be called in an object context.

If you come from another programming language, then you are probably used to the idea of a "bound this", where methods defined in an object always have this referencing that object. In JavaScript this is “free”, its value is evaluated at call-time and does not depend on where the method was declared, but rather on what object is “before the dot”. The concept of run-time evaluated this has both pluses and minuses. On the one hand, a function can be reused for different objects. On the other hand, the greater flexibility creates more possibilities for mistakes. Here our position is not to judge whether this language design decision is good or bad. We’ll understand how to work with it, how to get benefits and avoid problems.
*/
