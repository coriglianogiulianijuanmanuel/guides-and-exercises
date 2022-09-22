let myString = "fullmetal alchemist";
const updatedString = myString.replace("fullmetal", "fire"); // 'replace()' doesn't change the string it was called on, but returns a new string

console.log(myString);
console.log(updatedString);

myString = myString.replace("fullmetal", "fire"); // if you want to update the original variable, you would have to do something like this
console.log(myString);

/* 'replace()' in this form only changes the first occurrence of the substring.
If you want to change all occurrences, you can use 'replaceAll()' */

let myString2 = "Please, kill me. If you don't kill me, I'll kill you!";
myString2 = myString2.replaceAll("kill", "hug");

console.log(myString2);
