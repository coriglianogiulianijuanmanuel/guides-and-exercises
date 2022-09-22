const gamesToBuy = ["nekopara1", "nekopara2", "nekopara3", "nekopara4"];
const nekopara3Index = gamesToBuy.indexOf("nekopara3");

if (nekopara3Index !== -1) {
  gamesToBuy.splice(nekopara3Index, 2); //In this call to splice(), the first argument says where to start removing items, and the second argument says how many items should be removed.
}

console.log(gamesToBuy);
