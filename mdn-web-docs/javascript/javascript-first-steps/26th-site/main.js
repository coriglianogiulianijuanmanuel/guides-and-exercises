const fullMetal = "hagane no renkinjutsushi full metal alchemist fullmetal";

const firstOccurrence = fullMetal.indexOf("full");
const secondOccurrence = fullMetal.indexOf("full", firstOccurrence + 1);

console.log(firstOccurrence);
console.log(secondOccurrence);
