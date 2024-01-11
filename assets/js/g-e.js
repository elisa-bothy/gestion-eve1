const div = document.querySelector("div");
const red = document.getElementById("red");
red.addEventListener("click", fonctionResponseRed);
const green = document.getElementById("green");
green.addEventListener("click", fonctionResponseGreen);
const yellow = document.getElementById("yellow");
yellow.addEventListener("click", fonctionResponseYellow);

function fonctionResponseRed(){
    if (!div.classList.contains('RED')){
        div.classList.add('RED');
        div.classList.remove('YELLOW');
        div.classList.remove('GREEN');
    }
}

function fonctionResponseGreen(evt){
    if (!div.classList.contains('GREEN')){
        div.classList.add('GREEN');
        div.classList.remove('YELLOW');
        div.classList.remove('RED');
    }
}

function fonctionResponseYellow(evt){
    if (!div.classList.contains('YELLOW')){
        div.classList.add('YELLOW');
        div.classList.remove('RED');
        div.classList.remove('GREEN');
    }
}