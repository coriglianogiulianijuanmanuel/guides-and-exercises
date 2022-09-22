const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Declaring the array of image filenames */
const imageFilenames = [
  "pic1.jpg",
  "pic2.jpg",
  "pic3.jpg",
  "pic4.jpg",
  "pic5.jpg",
];

/* Declaring the alternative text for each image file */
const alternativeText = {
  "pic1.jpg": "A photo of an eye.",
  "pic2.jpg": "Idk.",
  "pic3.jpg": "A photo of flowers.",
  "pic4.jpg": "A photo of egyptians.",
  "pic5.jpg": "A photo of a butterfly.",
};

/* Looping through images */
for (const filename of imageFilenames) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", `images/${filename}`);
  newImage.setAttribute("alt", alternativeText[filename]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener("click", () => {
    displayedImage.setAttribute("src", `images/${filename}`);
    displayedImage.setAttribute("alt", alternativeText[filename]);
  });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
  if (btn.getAttribute("class") === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  } else if (btn.getAttribute("class") === "light") {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
});
