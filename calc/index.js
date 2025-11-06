document.addEventListener('DOMContentLoaded', (event) => {
    let display = document.getElementById('display');
    window.appendNumber = function appendNumber(number) {
        display.value += number;
    }
    window.appendOperator = function appendOperator(operator) {
        display.value += operator;
    }
    window.clearDisplay = function clearDisplay() {
        display.value = '';
    }
    window.calculateResult = function calculateResult() {
        display.value = eval(display.value);
    }
})