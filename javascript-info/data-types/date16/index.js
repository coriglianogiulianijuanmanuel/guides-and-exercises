"use strict";

function formatDate(date) {
  let now = new Date();
  let secondsDiff = (now - date) / 1000;
  let formattedDate = [
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
  ].map((item) => ("0" + item.toString()).slice(-2));

  if (secondsDiff < 1) return "right now";
  else if (secondsDiff < 60) return `${secondsDiff} sec. ago`;
  else if (secondsDiff < 3600) return `${secondsDiff / 60} min. ago`;
  else
    return (
      formattedDate.slice(0, 3).join(".") +
      " " +
      formattedDate.slice(3).join(":")
    );
}

console.log(formatDate(new Date(new Date() - 1))); // "right now"

console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 sec. ago"

console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 min. ago"

// yesterday's date like 31.12.16 20:00
console.log(formatDate(new Date(new Date() - 86400 * 1000)));
