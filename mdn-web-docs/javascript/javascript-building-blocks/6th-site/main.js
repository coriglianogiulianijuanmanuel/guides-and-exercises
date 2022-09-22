const studyHour = 9;
let remIsHere = "yes"; //the variable has to be defined

if (remIsHere || studyHour === 10) {
  console.log("Stop playing games!");
} else {
  console.log("Keep playing!");
}

if (!(remIsHere || studyHour === 10)) {
  //the ! operator can be used to negate an expression
  console.log("Stop playing games!");
} else {
  console.log("Keep playing!");
}

if ((!remIsHere && studyHour < 10) || (!remIsHere && studyHour > 17)) {
  console.log("Keep playing!");
} else if ((remIsHere && studyHour >= 10) || (remIsHere && studyHour <= 17)) {
  console.log("Stop playing games!");
}
