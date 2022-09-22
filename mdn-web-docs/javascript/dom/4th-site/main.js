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
const linkPara = document.querySelector("p");
linkPara.appendChild(text);

//Now we'll turn to a very useful method for general HTML manipulation — Element.setAttribute() — this takes two arguments, the attribute you want to set on the element, and the value you want to set it to. In this case we will set a class name of highlight on our paragraph:

para.setAttribute("class", "highlight");
