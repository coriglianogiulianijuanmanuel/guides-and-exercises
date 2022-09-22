const myName = "Juan Manuel Corigliano Giuliani";
const yearOfBirth = 1998;
const feelOld = 30;
let actualYear = 2022;
let myAge = actualYear - yearOfBirth;
let yearsLeftTo30 = feelOld - myAge;
let myNextAge = myAge + 1;
const potentialYearsLeftOfLife = 100 - myAge;

console.log(`My name is ${myName}.
I was born in ${yearOfBirth}, so I'm ${myAge} years old.
This year is ${actualYear}.
The next year I'll be ${myNextAge}.
I don't want to become ${feelOld}, there are only ${yearsLeftTo30} years left...
I'll live ${potentialYearsLeftOfLife} more years!
Currently I lived aprox. ${(myAge * 100) / 100}% of my life.`);
