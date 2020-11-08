for ( var i = 0; i < 5; i++) {
    var elem = document.createElement("h2");
    elem.textContent = "Whats up H2";
    document.body.append(elem);
    
}
//style h2 element
var e = document.querySelectorAll("h2");
for ( var i = 0; i <e.length; i++) {
    e[i].style.fontSize = "20px";
    e[i].style.fontWeight = "lighter";
    e[i].style.fontFamily = "sans-serif";
    e[i].style.color = "cornflowerblue";
}
//new class
var style = document.querySelectorAll("h2");
for ( var i = 0; i < style.length; i++) {
    style[i].classList.add("border");
}

