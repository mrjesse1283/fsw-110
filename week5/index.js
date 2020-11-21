var button = document.querySelector("button");
var name1 = document.getElementById("name1");
var age = document.getElementById("age");
var sex = document.getElementById("sex");
var formId = document.getElementById("formId");

formId.style.backgroundColor = "orange";
formId.style.height = "50px";
formId.style.display = "flex";
formId.style.justifyContent = "center";
formId.style.alignItems = "center";
formId.style.padding = "15px";
// function submitButton(btn){
// button.addEventListener("click", function(event){
//     window("Thank you your momma ugly");
// });
//}

button.addEventListener("click",function(){
    alert("Hello " + name1.value + " you are a " + age.value + " year old " + sex.value);
});