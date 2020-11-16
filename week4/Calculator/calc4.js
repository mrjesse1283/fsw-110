//addition
function addTwoNumber(x , y){
    var addNum = +x + +y;
    return addNum;
}

var addButton = document.getElementById("addButton");

addButton.addEventListener("click", function(){
    var addFirstNum = document.getElementById("addFirstNum").value;
    var addSecNum = document.getElementById("addSecNum").value;
    var total = document.getElementById("total");
    var addNum = addTwoNumber(addFirstNum, addSecNum);
    total.textContent = "Total: " + addNum;

});

//subtraction
function subTwoNumber(a , b){
    var subNum = +a - +b;
    return subNum;
}

var subButton = document.getElementById("subButton");

subButton.addEventListener("click", function(){
    var subFirstNum = document.getElementById("subFirstNum").value;
    var subSecNum = document.getElementById("subSecNum").value;
    var total = document.getElementById("total");
    var subNum = subTwoNumber(subFirstNum, subSecNum);
    total.textContent = "Total: " + subNum;

});

//multiply
function multiplyTwoNumber(num1 , num2){
    var mulNum = +num1 * +num2;
    return mulNum;
}

var multiplyButton = document.getElementById("multiplyButton");

multiplyButton.addEventListener("click", function(){
    var multiplyFirstNum = document.getElementById("multiplyFirstNum").value;
    var multiplySecNum = document.getElementById("multiplySecNum").value;
    var total = document.getElementById("total");
    var mulNum = multiplyTwoNumber(multiplyFirstNum, multiplySecNum);
    total.textContent = "Total: " + mulNum;

});

