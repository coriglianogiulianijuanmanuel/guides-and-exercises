"use strict";

// func.apply

// Instead of func.call(this, ...arguments) we could use func.apply(this, arguments).
// The syntax of built-in method func.apply is: func.apply(context, args)

// It runs the func setting this=context and using an array-like object args as the list of arguments.
// The only syntax difference between call and apply is that call expects a list of arguments, while apply takes an array-like object with them.

// So these two calls are almost equivalent:

/*
func.call(context, ...args);
func.apply(context, args);
*/

// They perform the same call of func with given context and arguments.

// There’s only a subtle difference regarding args:
// * The spread syntax ... allows to pass iterable args as the list to call.
// * The apply accepts only array-like args.

// …And for objects that are both iterable and array-like, such as a real array, we can use any of them, but apply will probably be faster, because most JavaScript engines internally optimize it better.

// Passing all arguments along with the context to another function is called call forwarding.

// That’s the simplest form of it:

/*
let wrapper = function() {
  return func.apply(this, arguments);
};
*/

// When an external code calls such wrapper, it is indistinguishable from the call of the original function func.

// Borrowing a method

// Now let’s make one more minor improvement in the hashing function:

/* 
function hash(args) {
  return args[0] + ',' + args[1];
}
*/

// As of now, it works only on two arguments. It would be better if it could glue any number of args.

// The natural solution would be to use arr.join method:

/* 
function hash(args) {
  return args.join();
}
*/

// …Unfortunately, that won’t work. Because we are calling hash(arguments), and arguments object is both iterable and array-like, but not a real array. So calling join on it would fail

// Still, there’s an easy way to use array join:

function hash() {
  console.log([].join.call(arguments)); // 1,2
}

hash(1, 2);

/* 
The trick is called method borrowing.

We take (borrow) a join method from a regular array ([].join) and use [].join.call to run it in the context of arguments.

Why does it work?

That’s because the internal algorithm of the native method arr.join(glue) is very simple.

Taken from the specification almost “as-is”:

1. Let glue be the first argument or, if no arguments, then a comma ",".
2. Let result be an empty string.
3. Append this[0] to result.
4. Append glue and this[1].
5. Append glue and this[2].
6. …Do so until this.length items are glued.
7. Return result.

So, technically it takes this and joins this[0], this[1] …etc together. It’s intentionally written in a way that allows any array-like this (not a coincidence, many methods follow this practice). That’s why it also works with this=arguments.
*/

/* 
Decorators and function properties

It is generally safe to replace a function or a method with a decorated one, except for one little thing. If the original function had properties on it, like func.calledCount or whatever, then the decorated one will not provide them. Because that is a wrapper. So one needs to be careful if one uses them.

E.g. in the example above if slow function had any properties on it, then cachingDecorator(slow) is a wrapper without them.

Some decorators may provide their own properties. E.g. a decorator may count how many times a function was invoked and how much time it took, and expose this information via wrapper properties.

There exists a way to create decorators that keep access to function properties, but this requires using a special Proxy object to wrap a function.
*/
