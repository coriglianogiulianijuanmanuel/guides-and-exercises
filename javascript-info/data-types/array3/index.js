"use strict";

// Methods pop/push, shift/unshift

// A queue is one of the most common uses of an array. In computer science, this means an ordered collection of elements which supports two operations:
// push appends an element to the end.
// shift get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st.

// Arrays support both operations. In practice we need it very often. For example, a queue of messages that need to be shown on-screen.

// There’s another use case for arrays – the data structure named stack. It supports two operations:
// push adds an element to the end.
// pop takes an element from the end.

// So new elements are added or taken always from the “end”. A stack is usually illustrated as a pack of cards: new cards are added to the top or taken from the top.

// For stacks, the latest pushed item is received first, that’s also called LIFO (Last-In-First-Out) principle. For queues, we have FIFO (First-In-First-Out).

// Arrays in JavaScript can work both as a queue and as a stack. They allow you to add/remove elements, both to/from the beginning or the end. In computer science, the data structure that allows this, is called deque.

// Methods that work with the end of the array:

// pop
// Extracts the last element of the array and returns it:
let fruits1 = ["Apple", "Orange", "Pear"];

alert(fruits1.pop()); // remove "Pear" and alert it

alert(fruits1); // Apple,Orange
// Both fruits.pop() and fruits.at(-1) return the last element of the array, but fruits.pop() also modifies the array by removing it.

// push
// Append the element to the end of the array and returns the new length of the array:
let fruits2 = ["Apple", "Orange"];

fruits2.push("Pear"); // Here I don't use alert cause push returns the new length of the array

alert(fruits2); // Apple,Orange,Pear
// The call fruits.push(...) is equal to fruits[fruits.length] = ....

// Methods that work with the beginning of the array:

// shift
// Extracts the first element of the array and returns it:
let fruits3 = ["Apple", "Orange", "Pear"];

alert(fruits3.shift()); // remove Apple and alert it

alert(fruits3); // Orange,Pear

// unshift
// Add the element to the beginning of the array and returns the new length of the array:
let fruits4 = ["Orange", "Pear"];

fruits4.unshift("Apple"); // Here I don't use alert cause unshift returns the new length of the array

alert(fruits4); // Apple,Orange,Pear

// Methods push and unshift can add multiple elements at once:
let fruits5 = ["Apple"];

fruits5.push("Orange", "Peach");
fruits5.unshift("Pineapple", "Lemon");

alert(fruits5); // Pineapple,Lemon,Apple,Orange,Peach
