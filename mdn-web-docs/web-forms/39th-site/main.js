const input = document.querySelector("input");
const output = document.querySelector("output");

output.textContent = `${input.value.length}/6`;

input.addEventListener("input", () => {
  output.textContent = `${input.value.length}/6`;
});
