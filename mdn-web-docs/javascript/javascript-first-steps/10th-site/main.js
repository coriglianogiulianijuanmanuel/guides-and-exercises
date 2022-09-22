let myNumber = "74";
myNumber += 3;
console.log(myNumber);
console.log(typeof myNumber);

myNumber = "74";
myNumber = Number(myNumber) + 3;
console.log(myNumber);
console.log(typeof myNumber);

let longNumber = "1.333333333333333333";
longNumber = Number(longNumber).toFixed(2);
longNumber = Number(longNumber) + 0.67;
console.log(longNumber);
