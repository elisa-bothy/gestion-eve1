const red = document.getElementById('RED');
red.addEventListener("click", fonctionResponseRed);
const blue = document.getElementByID('BLUE');
blue.addEventListener("click", fonctionResponseBlue);


function fonctionResponseRed(){
    document.body.insertBefore(red, document.blue);
}

function fonctionResponseBlue(){
    document.body.insertBefore(blue, document.red);
}