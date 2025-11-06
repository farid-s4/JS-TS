export {};
declare global {
    interface Window {
        appendNumber: (number: string) => void;
        appendOperator: (operator: string) => void;
        clearDisplay: () => void;
        calculateResult: () => void;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        const calc = new Calculator(display);
        window.appendNumber = (number: string) => calc.appendNumber(number);
        window.appendOperator = (operator: string) => calc.appendOperator(operator);
        window.clearDisplay = () => calc.clearDisplay();
        window.calculateResult = () => calc.calculateResult();
    }
})

class Calculator {
    private display = new HTMLInputElement;
    private currentInput = "";
    constructor(displayElement : HTMLInputElement) {
        this.display = displayElement;
        this.update();
    }
    appendNumber(number : string) {
        this.currentInput += number;
        this.update();
    }
    appendOperator(operator : string) {
        this.currentInput += operator;
        this.update();
    }
    clearDisplay() {
        this.currentInput = "";
        this.display.value = "";
        this.update();
    }
    calculateResult() {
        this.display.value = eval(this.currentInput);
        this.update();
    }
    private update() {
        this.display.value = this.currentInput;
    }
}