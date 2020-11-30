/* jshint esversion:6 */

let redBox = document.getElementsByClassName("red-box");
let cursor = document.createElement("h3");
    document.body.append(cursor);

redBox[0].addEventListener("mousemove", function(e){
    x = e.clientX;
    y = e.clientY;
    cursor.textContent = "Your Mouse Position Is: X- " + x + " and Y- " + y ;
});
redBox[0].addEventListener("mouseout", function(e){
    cursor.textContent =" ";
});

//redBox[0].addEventListener("mouseout" = e => cursor.textContent = " " );
//cursor.textContent = " " 