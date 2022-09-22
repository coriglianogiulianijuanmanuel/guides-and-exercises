const button = document.querySelector("button");

function greet() {
  const name = prompt("What's your name?");
  alert(`Hello ${name}, nice to meet you!`);
}

button.addEventListener("click", greet);
