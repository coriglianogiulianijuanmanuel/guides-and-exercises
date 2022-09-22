const gamesToBuy = ["nekopara1", "nekopara2", "nekopara3", "nekopara4"];
console.log(gamesToBuy.length); // Length of an array (how many items are in it).

console.log(gamesToBuy[2]); // Items in an array are numbered, starting from zero. This number is called the item's index. So the first item has index 0, the second has index 1, and so on. You can access individual items in the array using bracket notation and supplying the item's index.

//You can also modify an item in an array by giving a single array item a new value.
gamesToBuy[1] = "DON'T BUY NEKOPARA!";
console.log(gamesToBuy);

//An array inside an array is called a multidimensional array. You can access an item inside an array that is itself inside another array by chaining two sets of square brackets together.
const multidimensionalArray = [
  1,
  3,
  5,
  [1, 3, 5, [1, 3, 5, [1, 3, 5, [1, 3, 5, 7]]]],
];
console.log(multidimensionalArray[3][3][3][3][3]);
