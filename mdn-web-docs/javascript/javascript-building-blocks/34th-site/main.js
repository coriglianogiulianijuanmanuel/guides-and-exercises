const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

//Event handlers can also be removed by passing an AbortSignal to addEventListener() and then later calling abort() on the controller owning the AbortSignal. To add an event handler that we can remove with an AbortSignal:

const controller = new AbortController();

btn.addEventListener(
  "click",
  () => {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
  },
  { signal: controller.signal }
);

//Then the event handler created by the code above can be removed like this:
controller.abort();

/*

function changeBackground() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

btn.addEventListener("click", changeBackground);

//this would remove the changeBackground() event handler:
btn.removeEventListener("click", changeBackground);

*/
