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

//The first way is to add inline styles directly onto elements you want to dynamically style. This is done with the HTMLElement.style property, which contains inline styling information for each element in the document. You can set properties of this object to directly update element styles.
//Notice how the JavaScript property versions of the CSS styles are written in lower camel case whereas the CSS versions are hyphenated.
para.style.color = "white";
para.style.backgroundColor = "black";
para.style.padding = "10px";
para.style.width = "250px";
para.style.textAlign = "center";

//If you look at that paragraph in your browser's Page Inspector/DOM inspector, you'll see that these lines are indeed adding inline styles to the document.
