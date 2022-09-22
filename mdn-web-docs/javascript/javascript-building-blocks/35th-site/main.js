const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

//By making more than one call to addEventListener(), providing different handlers, you can have multiple handlers for a single event:

btn.addEventListener("click", functionA);
btn.addEventListener("click", functionB);
