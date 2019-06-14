var counter = 0;
var input;
var display = 0;


var inputEl; 
var plusButtonEl;
var minusButtonEl;


document.addEventListener("DOMContentLoaded", function() {
    inputEl = document.getElementById("input");
    plusButtonEl = document.getElementById("plus");
    minusButtonEl = document.getElementById("minus");
    numberEl = document.getElementById("number");
    
    plusButtonEl.addEventListener("click", function (e) {
        input = inputEl.value;
        display = add(display, input); 
        if (display < 0) {
            numberEl.classList.add("red");
        } else {
            numberEl.classList.remove("red");
        }
        numberEl.textContent = display; 
    });
    
    minusButtonEl.addEventListener("click", function(e) {
        input = inputEl.value;
        display = subtract(display, input);
        if (display < 0) {
            numberEl.classList.add("red");
        } else {
            numberEl.classList.remove("red");
        }
        numberEl.textContent = display; 
    });

});



function add(display, input) {
    display = parseInt(display);
    counter = parseInt(input);
    counter = counter + display;
    return counter;
}


function subtract(display, input) {
    display = parseInt(display);
    counter = parseInt(input);
    counter = display - counter;
    return counter;
}