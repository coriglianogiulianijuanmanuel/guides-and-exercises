const myName = "Juan Manuel Corigliano Giuliani";
const nameLength = myName.length;
const myAge = 24;

if (nameLength > 30 && myAge === 24) {
  console.log("1");
} else if (nameLength < 30 && myAge === 24) {
  console.log("2");
} else if (nameLength === 30 && myAge === 24) {
  console.log("3");
} else if (nameLength === 31 && myAge === 24) {
  //this also works, but another condition worked first
  console.log("4");
} else {
  console.log("5");
}
