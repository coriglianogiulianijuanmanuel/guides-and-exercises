"use strict";

function checkSpam(str) {
  let lowerCaseStr = str.toLowerCase();

  return lowerCaseStr.includes("viagra") || lowerCaseStr.includes("xxx");
}

console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));
