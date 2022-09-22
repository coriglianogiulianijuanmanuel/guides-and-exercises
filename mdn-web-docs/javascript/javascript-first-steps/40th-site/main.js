//ways of converting a string to an array:

const data = "Manchester6London6Liverpool6Birmingham6Leeds6Carlisle";
const cities = data.split("6");

console.log(cities);
console.log(cities.length);
console.log(cities[2]);
console.log(cities.length - 1);

//ways of converting an array to a string:

const data2 = cities.join("6"); //with join() you can specify different separators
console.log(data2);

const data3 = cities.toString(); //toString() always uses a comma
console.log(data3);
