const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  let inputValue = input.value;
  input.value = "";
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button2 = document.createElement("button");
  li.appendChild(span);
  span.textContent = inputValue;
  li.appendChild(button2);
  button2.textContent = "Delete";
  list.appendChild(li);
  button2.addEventListener("click", () => {
    list.removeChild(li);
  });
  input.focus();
});
