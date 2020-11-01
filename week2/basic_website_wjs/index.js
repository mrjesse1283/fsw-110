//body.style.backGround = "grey";
document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80)";
document.body.style.backgroundSize = "cover";
//navbar
var navbar = document.createElement("nav");
navbar.style.background = "grey ";
navbar.style.fontSize = "30px";
navbar.style.width = "50%";
navbar.style.height = "40px";
document.body.append(navbar);

var link1 = document.createElement("a");
link1.href = "#";
link1.textContent = "Home base";
link1.style.textDecoration = "none";
link1.style.color = "red";

var link2 = document.createElement("a");
link2.href = "#";
link2.textContent = "Whats up";
link2.style.padding = "0px 30px";
link2.style.textDecoration = "none";
link2.style.color = "limegreen";

var link3 = document.createElement("a");
link3.href ="#";
link3.textContent = "Oh, hey";
link3.style.textDecoration = "none";
link3.style.color = "blue";

//link1.link2.link3.style.fontSize = "50px";
//I was ablet to add all the links in the same append.
navbar.append(link1, link2, link3);

/* h1 */
var text = document.createElement("h1");
text.textContent = "Welcome to my Js site";
document.body.append(text);
//document.getElementById("h1").innerHTML = "Welcome to my JS site";

/* p */
var para = document.createElement("p");
para.textContent = "All of this was created with Javascript";
para.style.fontSize = "30px";
document.body.append(para);

/* ol li */
var list = document.createElement("ol");
list.textContent = "ordered list";
list.style.fontSize = "30px";

var line1 = document.createElement("li");
line1.textContent = "Line Numero uno";
list.append(line1);

var line2 = document.createElement("li");
line2.textContent = "Line Numero dos";
list.append(line2);

var line3 = document.createElement("li");
line3.textContent = "Line Numero three man";
list.append(line3);
//this next line is how I added the li to the ul
//needed to add all the lines to the list than append the list to the document.body
document.body.append(list);

var footer = document.createElement("footer");
footer.textContent = "If it looks like a foot, smells like a foot..Its a foot";
footer.style.fontSize = "25px";
document.body.appendChild(footer);

/* var line1 = document.createElement("li");
line1.textContent = "Line Numero uno";
document.body.append(line1);
 */

/* //playing with anchors
var link1 = document.createElement("a");
link1.href = "#";
link1.textContent = "Line Numero uno";
line1.append(link1); */