const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

btn.onclick = bgChange;

/*

With event handler properties, you can't add more than one handler for a single event.
This is impossible with event handler properties because any subsequent attempts to set the property will overwrite earlier ones:

element.onclick = function1;
element.onclick = function2;

*/
