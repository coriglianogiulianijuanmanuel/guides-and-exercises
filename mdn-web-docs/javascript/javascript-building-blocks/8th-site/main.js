const actualHour = 9;
let remIsHere = "yes";

switch (!remIsHere || actualHour >= 10) {
  case true:
    console.log("Please, study!");
    break;

  default:
    console.log("Stop studying!");
    break;
}
