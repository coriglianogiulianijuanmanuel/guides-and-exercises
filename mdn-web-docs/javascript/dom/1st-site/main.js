const link = document.querySelector("a");
//The above querySelector() call will match the first <a> element that appears in the document. If you wanted to match and do things to multiple elements, you could use Document.querySelectorAll(), which matches every element in the document that matches the selector, and stores references to them in an array-like object called a NodeList.

//const link = document.querySelectorAll("a");

link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride.";
sect.appendChild(para);
const text = document.createTextNode(
  " — the premier source for web development knowledge."
);
const text2 = document.createTextNode(" ((( I'm testing this! )))");
const linkPara = document.querySelector("p");
linkPara.appendChild(text);
para.appendChild(text2);
