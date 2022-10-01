"use strict";

// Recursive structures

/* 
A recursive (recursively-defined) data structure is a structure that replicates itself in parts.

We’ve just seen it in the example of a company structure above.

A company department is:

Either an array of people.
Or an object with departments.
For web-developers there are much better-known examples: HTML and XML documents.

In the HTML document, an HTML-tag may contain a list of:

Text pieces.
HTML-comments.
Other HTML-tags (that in turn may contain text pieces/comments or other tags etc).
That’s once again a recursive definition.

For better understanding, we’ll cover one more recursive structure named “Linked list” that might be a better alternative for arrays in some cases.
*/

// Linked list

// Imagine, we want to store an ordered list of objects.

// The natural choice would be an array: let arr = [obj1, obj2, obj3];

// …But there’s a problem with arrays. The “delete element” and “insert element” operations are expensive. For instance, arr.unshift(obj) operation has to renumber all elements to make room for a new obj, and if the array is big, it takes time. Same with arr.shift().
// The only structural modifications that do not require mass-renumbering are those that operate with the end of array: arr.push/pop. So an array can be quite slow for big queues, when we have to work with the beginning.

// Alternatively, if we really need fast insertion/deletion, we can choose another data structure called a linked list.
// The linked list element is recursively defined as an object with:
// * value.
// * next property referencing the next linked list element or null if that’s the end.

let list1 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// An alternative code for creation:
let list2 = { value: 1 };
list2.next = { value: 2 };
list2.next.next = { value: 3 };
list2.next.next.next = { value: 4 };
list2.next.next.next.next = null;
// Here we can even more clearly see that there are multiple objects, each one has the value and next pointing to the neighbour. The list variable is the first object in the chain, so following next pointers from it we can reach any element.

// The list can be easily split into multiple parts and later joined back:
let secondList = list1.next.next;
list1.next.next = null;

console.log(list1); // { value: 1, next: { value: 2, next: null } }
console.log(secondList); // { value: 3, next: { value: 4, next: null } }

// To join:
list1.next.next = secondList;
console.log(list1); // { value: 1, next: { value: 2, next: { value: 3, next: [Object] } } }

// And surely we can insert or remove items in any place.
// For instance, to prepend a new value, we need to update the head of the list:
let list3 = { value: 1 };
list3.next = { value: 2 };
list3.next.next = { value: 3 };
list3.next.next.next = { value: 4 };
list3.next.next.next.next = null;

// prepend the new value to the list
list3 = { value: "new item", next: list3 };
console.log(list3);
/* 
{
  value: 'new item',
  next: { value: 1, next: { value: 2, next: [Object] } }
}
*/

// To remove a value from the middle, change next of the previous one:
list3.next = list3.next.next;
console.log(list3);
/* 
{
  value: 'new item',
  next: { value: 2, next: { value: 3, next: [Object] } }
}
*/

/* 
We made list.next jump over 1 to value 2. The value 1 is now excluded from the chain. If it’s not stored anywhere else, it will be automatically removed from the memory.

Unlike arrays, there’s no mass-renumbering, we can easily rearrange elements.

Naturally, lists are not always better than arrays. Otherwise everyone would use only lists.

The main drawback is that we can’t easily access an element by its number. In an array that’s easy: arr[n] is a direct reference. But in the list we need to start from the first item and go next N times to get the Nth element.

…But we don’t always need such operations. For instance, when we need a queue or even a deque – the ordered structure that must allow very fast adding/removing elements from both ends, but access to its middle is not needed.

Lists can be enhanced:

* We can add property prev in addition to next to reference the previous element, to move back easily.
* We can also add a variable named tail referencing the last element of the list (and update it when adding/removing elements from the end).
* …The data structure may vary according to our needs.
*/
