const gamesToBuy = ["nekopara1", "nekopara2", "nekopara3", "nekopara4"];

gamesToBuy.push("nekopara5");
console.log(gamesToBuy);

//The new length of the array is returned when the method call completes. If you wanted to store the new array length in a variable, you could do something like this:
let lengthUpdate = gamesToBuy.push("nekopara6", "nekopara7");
console.log(gamesToBuy);
console.log(lengthUpdate);
