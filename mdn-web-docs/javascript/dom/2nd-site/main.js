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

//If we wanted to move the paragraph with the link inside it to the bottom of the section, we could do this:
sect.appendChild(linkPara);

//If you wanted to make a copy and add that as well, you'd need to use Node.cloneNode() instead:
const linkParaClone = linkPara.cloneNode(true);
sect.appendChild(linkParaClone);

//Removing a node is pretty simple as well, at least when you have a reference to the node to be removed and its parent:
sect.removeChild(linkParaClone);

//When you want to remove a node based only on a reference to itself, which is fairly common, you can use Element.remove():
linkPara.remove();

//This method is not supported in older browsers. They have no method to tell a node to remove itself, so you'd have to do the following:
//linkPara.parentNode.removeChild(linkPara);
