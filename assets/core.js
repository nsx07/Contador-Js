const bt_decrement = document.getElementById('decrement');
const bt_increment = document.getElementById('increment');
var currentNumber = document.getElementById('currentNumber');
var cont = 0;

bt_decrement.addEventListener("click", decrement);
bt_increment.addEventListener("click", increment);
bt_decrement.addEventListener("click", checkNumber);
bt_increment.addEventListener("click", checkNumber);

function increment() {
    cont += 1;
    currentNumber.innerHTML = cont;
}
function decrement() {
    cont -= 1;
    currentNumber.innerHTML = cont;
}

function checkNumber() {
    if(currentNumber.innerHTML < 0){
        currentNumber.style.backgroundColor = 'red'
        bt_decrement.disabled = true
    } else if(currentNumber.innerHTML >= 10) {
        currentNumber.style.backgroundColor = 'green'
        bt_increment.disabled = true
    } else {
        currentNumber.style.backgroundColor = 'white'
        bt_decrement.disabled = false
        bt_increment.disabled = false
    }
}