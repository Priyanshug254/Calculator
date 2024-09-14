let display = document.getElementById('display');

function appendNumber(number) {
    display.innerText += number;
}

function appendOperator(operator) {
    display.innerText += ' ' + operator + ' ';
}

function clearDisplay() {
    display.innerText = '';
}

function calculate() {
    try {
        display.innerText = eval(display.innerText.replace(/[^-()\d/*+.]/g, ''));
    } catch {
        display.innerText = 'Error';
    }
}
