"use strict";
// 1
let styles = ["Jazz", "Blues"];
// 2
styles.push("Rock-n-Roll");
// 3
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
// 4
console.log(styles.shift());
// 5
styles.unshift("Rap", "Reggae");
