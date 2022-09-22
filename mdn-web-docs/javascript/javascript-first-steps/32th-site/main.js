const birds = ["Parrot", "Falcon", "Owl"];
let falconIndex = birds.indexOf("Falcon");

if (falconIndex !== -1) {
  console.log(`The Falcon's index is ${falconIndex}`);
} else if (falconIndex === -1) {
  console.log("'Falcon' is not in the array.");
}

let kiwiIndex = birds.indexOf("Kiwi");

if (kiwiIndex !== -1) {
  console.log(`The Kiwi's index is ${kiwiIndex}`);
} else if (kiwiIndex === -1) {
  console.log("'Kiwi' is not in the array.");
}
