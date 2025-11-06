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
    }
    appendNumber(number : string) {
        this.currentInput += number;
    }
    appendOperator(operator : string) {
        this.currentInput += operator;
    }
    clearDisplay() {
        this.currentInput = "";
        this.display.value = "";
    }
    calculateResult() {
        this.display.value = eval(this.currentInput);

    }

}