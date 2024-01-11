const div = document.querySelector("div");
const red = document.getElementById("red");
red.addEventListener("click", fonctionResponseRed);
const green = document.getElementById("green");
green.addEventListener("click", fonctionResponseGreen);
const yellow = document.getElementById("yellow");
yellow.addEventListener("click", fonctionResponseYellow);

function fonctionResponseRed(){
    div.style.background = 'RED';
}

function fonctionResponseGreen(){
    div.style.background = 'GREEN';
}

function fonctionResponseYellow(){
    div.style.background = 'YELLOW';
}