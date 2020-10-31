/* h1 */
var text = document.createElement("h1");
text.textContent = "Welcome to my Js site";
document.body.appendChild(text);
//document.getElementById("h1").innerHTML = "Welcome to my JS site";

/* p */
var para = document.createElement("p");
para.textContent = "All of this was created with Javascript";
document.body.appendChild(para);

/* ol li */
var list = document.createElement("ol");
list.textContent = "ordered list";

var line1 = document.createElement("li");
line1.textContent = "Line Numero uno";
list.append(line1);

var line2 = document.createElement("li");
line2.textContent = "Line Numero dos";
list.append(line2);

var line3 = document.createElement("li");
line3.textContent = "Line Numero three man";
list.append(line3);

document.body.append(list);

/* var line1 = document.createElement("li");
line1.textContent = "Line Numero uno";
document.body.append(line1);
 */

/* //playing with anchors
var link1 = document.createElement("a");
link1.href = "#";
link1.textContent = "Line Numero uno";
line1.append(link1); */