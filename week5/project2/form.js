document.body.style.backgroundImage = "url(https://images.unsplash.com/flagged/photo-1555685460-1d9cf532761b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80)"; 
document.body.style.backgroundSize = "cover";

var button = document.getElementById("button").addEventListener("click",function(){

    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    //var age = document.getElementById("number");
    
    //var gender = document.getElementById("gender");
    var male = document.getElementById("male");
    var female = document.getElementById("female");

    var location1 = document.getElementById("location1");
    // var loc = document.getElementById("loc")
    // var tokyo = document.getElementById("Tokyo");
    // var LA = document.getElementById("LA");
    // var Denver = document.getElementById("Denver");

    // var diet1 = document.getElementById("diet1");
    var diet2 = document.getElementById("diet2");
    var veggie = document.getElementById("Veggie");
    var kosher = document.getElementById("Kosher");
    var lactose = document.getElementById("Lactose");

    function maleFemale(){
        if(male.checked) {
            return "male";
        } else if (female.checked) {
            return "female";
        }
    }

    function diet(){
        if (veggie.checked && kosher.checked && lactose.checked === true) {
            return "Vegan, Kosher, Lactose";
        } else if (veggie.checked && kosher.checked === true) {
            return "Vegan, Kosher";
        } else if (kosher.checked && lactose.checked === true) {
            return "Kosher, Lactose";
        } else if (veggie.checked && lactose.checked === true) {
            return "Vegan, Lactose";
        } else if (veggie.checked === true) {
            return "Vegan";
        } else if (kosher.checked === true) {
            return "Kosher";
        } else if (lactose.checked === true) {
            return "Lactose";
        }

    }

    alert(`first name: ${firstname.value} \nLastname: ${lastname.value} \nGender: ${maleFemale()} \nLocation: ${location1.value} \nDietary Restrictions: ${diet()}`);


});
