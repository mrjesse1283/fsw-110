//#2
var newElem = document.createElement("h1");
newElem.textContent = "Hello World";
/* newElem.style.color = "red";
newElem.style.fontSize = "40px";
newElem.style.border = "2px solid black";
newElem.style.marginRight = "77%";
newElem.style.paddingLeft = "10px"; */

document.body.append(newElem);

//#3 & 4
for (var i = 0; i < 10; i++ ) {
    var newE = document.createElement("h1");
    newE.textContent = "Hello World";
    newE.style.color = "black";
    newE.style.fontSize = "40px";
    newE.style.fontFamily = "indie flower";
    newE.style.border = "2px solid red";
    newE.style.marginRight = "77%";
    newE.style.paddingLeft = "10px";

    document.body.append(newE);  
}

//#5
const names = ["Steve", "Larry", "Joe", "Shirley", "Steph", "Nate", "Rick", "Emily"];

var list = document.createElement("ul");
document.body.append(list);
list.style.fontSize ="30px";
//#6
for (var i = 0; i < names.length; i++){
    list.innerHTML += "<li>" + names[i] + "</li>";
}
