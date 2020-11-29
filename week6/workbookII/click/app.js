/*jshint esversion:6 */
// make the box disapear when the user clicks it


let redBox = document.querySelector(".red-box");
//addEventListener("click", function(){
    //redBox.removeTag(div)});
    redBox.addEventListener("click", function(){
        redBox.className = "none";
    });
/* 
function eraseBox(){
    redBox.document.removeClass("red-box");
}
redBox.addEventListener("click", eraseBox); */
/* redBox.addEventListener("click", function() {
    redBox.default();
}); */
