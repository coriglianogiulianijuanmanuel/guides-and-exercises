"use strict";

// The pattern on the left side may be more complex and specify the mapping between properties and variables.
// If we want to assign a property to a variable with another name, for instance, make options.width go into the variable named ancho, then we can set the variable name using a colon:

let options1 = {
  title: "Menu",
  width: 100,
  height: 200,
};

// { sourceProperty: targetVariable }
let { width: ancho, height: altura, title } = options1;

// width -> ancho
// height -> altura
// title -> title

console.log(title); // Menu
console.log(ancho); // 100
console.log(altura); // 200
// The colon shows “what : goes where”. In the example above the property width goes to ancho, property height goes to altura, and title is assigned to the same name.

// For potentially missing properties we can set default values using "=", like this:
let options2 = {
  title: "Menu",
};

let { width: w = 100, height: h = 200, title: t = "Index" } = options2;

console.log(w); // 100
console.log(h); // 200
console.log(t); // Menu

// Just like with arrays or function parameters, default values can be any expressions or even function calls. They will be evaluated if the value is not provided.
// In the code below prompt asks for width, but not for title:
let options3 = {
  title: "Menu",
};

let { width: widthOp3 = prompt("width?"), title: titleOp3 = prompt("title?") } =
  options3;

console.log(widthOp3); // (whatever the result of prompt is)
console.log(titleOp3); // Menu

// If we have a complex object with many properties, we can extract only what we need:
let options4 = {
  title: "Menu",
  width: 100,
  height: 200,
};

// only extract title as a variable
let { title: titleOp4 = "defaultTitle" } = options4;

console.log(titleOp4); // Menu

// The rest pattern “…”

// What if the object has more properties than we have variables? Can we take some and then assign the “rest” somewhere? We can use the rest pattern, just like we did with arrays. It’s not supported by some older browsers (IE, use Babel to polyfill it), but works in modern ones.

let options5 = {
  title: "Menu",
  height: 200,
  width: 100,
};

let { title: thisIsATitle = "default title text", ...rest } = options5;

console.log(thisIsATitle); // Menu
console.log(rest); // {height: 200, width: 100}
console.log(rest.height); // 200
console.log(rest.width); // 100

// Gotcha if there’s no let

// In the examples above variables were declared right in the assignment: let {…} = {…}. Of course, we could use existing variables too, without let. But there’s a catch.

/*
let title, width, height;

// error in this line
{title, width, height} = {title: "Menu", width: 200, height: 100};
*/

// The problem is that JavaScript treats {...} in the main code flow (not inside another expression) as a code block. Such code blocks can be used to group statements, like this:

/* 
{
  // a code block
  let message = "Hello";
  // ...
  alert( message );
}
*/

// So here JavaScript assumes that we have a code block, that’s why there’s an error. We want destructuring instead.

// To show JavaScript that it’s not a code block, we can wrap the expression in parentheses (...):
let mainTitle, width, height;

// okay now
({ mainTitle, width, height } = { mainTitle: "Menu", width: 200, height: 100 });

alert(mainTitle); // Menu
