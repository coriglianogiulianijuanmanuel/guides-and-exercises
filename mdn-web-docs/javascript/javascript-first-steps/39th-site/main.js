function numberPlusTwo(number) {
  return number + 2;
}

function evenGreaterOrEqualToThree(number) {
  return (number % 2 === 0) & (number >= 3);
}

const myNumbers = [1, 2, 3, 4, 5, 6];
const myNewNumbers = myNumbers.map(numberPlusTwo);

console.log(myNewNumbers);

const myNewNumbers2 = myNumbers.filter(evenGreaterOrEqualToThree);

console.log(myNewNumbers2);
