const input = document.getElementById('input');
const container = document.querySelector('.container');
const mode = document.getElementById('toggle-mode');
const body = document.querySelector('body');
const button = document.getElementById('button');
const operator = document.getElementById('operator');
const small = document.getElementById('small');
mode.onclick = function () {
    container.classList.toggle('active');
    body.classList.toggle('active');
    small.classList.toggle('active');
    input.classList.toggle('active');
}
function display(number) {
    if (number == '=') {
        input.innerHTML = eval(input.innerHTML);
    }
    else if (number == 'DEL') {
        let value = input.innerHTML;
        input.innerHTML = input.innerHTML.slice(0, value.length - 1)
    }
    else if (number == 'AC') {
        input.innerHTML = "";
    }
    else {
        input.innerHTML += number;
    }
}