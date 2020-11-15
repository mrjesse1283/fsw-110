
var square = document.getElementById("box")

square.style.display= "flex";
square.style.alignItems= "center";
square.style.justifyContent= "center";
square.style.border= "2px solid black";
square.style.width= "60%";
square.style.height= "200px";

square.addEventListener("mouseover", function(){
    square.style.background= "blue";
});

square.addEventListener("mousedown", function(){
    square.style.background= "red";
});

square.addEventListener("mouseup", function(){
    square.style.background= "yellow";
});

square.addEventListener("dblclick", function(){
    square.style.background= "green";
});

document.addEventListener("wheel", function(){
    square.style.background= "orange";
});

document.addEventListener("keydown", function(event){
    if (event.code == "KeyB"){
        square.style.backgroundColor = "blue";
    } else  if (event.code == "KeyR"){
        square.style.backgroundColor = "red";
    } else if (event.code == "KeyY"){
        square.style.backgroundColor = "yellow";
    } else if (event.code == "KeyG"){
        square.style.backgroundColor = "green";
    } else if (event.code == "KeyO"){
        square.style.backgroundColor = "orange";
    } else (console.log("nothing happens"))
});