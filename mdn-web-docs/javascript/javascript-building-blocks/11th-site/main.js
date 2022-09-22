//The for...of loop

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}

//map()

function toUpper(string) {
  return string.toUpperCase();
}

const cats2 = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = cats2.map(toUpper);

console.log(upperCats);

//filter()

function lCat(cat) {
  return cat.startsWith("L");
}

const cats3 = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats3.filter(lCat);

console.log(filtered);

//Using function expressions - map()

const cats5 = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats2 = cats5.map((string) => string.toUpperCase());
console.log(upperCats2);

//Using function expressions - filter()

const cats4 = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered2 = cats4.filter((cat) => cat.startsWith("L"));
console.log(filtered2);
