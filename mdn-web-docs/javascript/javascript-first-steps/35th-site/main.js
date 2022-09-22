const gamesToBuy = ["nekopara1", "nekopara2", "nekopara3", "nekopara4"];

gamesToBuy.pop();
console.log(gamesToBuy);

//The pop() method returns the item that was removed. To save that item in a new variable, you could do this:
const removedItem = gamesToBuy.pop();
console.log(gamesToBuy);
console.log(removedItem);
