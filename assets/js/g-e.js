const red = document.getElementsByClassName('RED');
red.addEventListener("click", fonctionResponseRed);
const blue = document.getElementsByClassName('BLUE');
blue.addEventListener("click", fonctionResponseBlue);


function fonctionResponseRed(){
    document.body.insertBefore(red, document.blue);
}

function fonctionResponseBlue(){
    document.body.insertBefore(blue, document.red);
}