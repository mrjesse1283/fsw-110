/* jshint esversion:6 */

let todoInput1 = document.getElementById("todo-input1");
let todoInput2 = document.getElementById("todo-input2");
let todoList = document.getElementById("todo-list");
let form1 = document.getElementById("form1");
let button = document.getElementById("button");

//funcitons
//todo list add to function
let btn = (e) => {
    e.preventDefault();
    if (todoInput1.value != "" ) {
        
        let toDoItems = document.createElement("li");
        toDoItems.innerHTML = todoInput1.value + " " + todoInput2.value;
        toDoItems.style.border ="1px solid black";
        toDoItems.style.fontSize = "20px";
        //toDoItems.style.height = "20px";
        toDoItems.style.padding = "20px";
        toDoItems.style.listStyleType = "none";
        toDoItems.style.backgroundColor = "white";
        toDoItems.style.marginRight = "40%";
        toDoItems.style.marginLeft = "40%";

        let x = document.createElement("button");
        x.textContent = "Done";
        x.classList.add("del");

        toDoItems.append(x);
        todoList.append(toDoItems);
        
        form1.reset();
    }else (alert("what the frick! fill it out"));

};
//delete button function using arrow function
let del = (e) => {
     let delBtn = document.getElementsByClassName("del");
     for(i = 0; i < delBtn.length; i++){
         if(e.target == delBtn[i]){
             let toDoItems = delBtn[i].parentNode;
             todoList.removeChild(toDoItems);
         }
     }
};
//event listeners
button.addEventListener("click", btn);
todoList.addEventListener("click", del);

//let list = [];


