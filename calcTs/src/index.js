"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
document.addEventListener('DOMContentLoaded', function () {
    var display = document.getElementById('display');
    if (display) {
        var calc_1 = new Calculator(display);
        window.appendNumber = function (number) { return calc_1.appendNumber(number); };
        window.appendOperator = function (operator) { return calc_1.appendOperator(operator); };
        window.clearDisplay = function () { return calc_1.clearDisplay(); };
        window.calculateResult = function () { return calc_1.calculateResult(); };
    }
});
var Calculator = /** @class */ (function () {
    function Calculator(displayElement) {
        this.display = new HTMLInputElement;
        this.currentInput = "";
        this.display = displayElement;
        this.update();
    }
    Calculator.prototype.appendNumber = function (number) {
        this.currentInput += number;
        this.update();
    };
    Calculator.prototype.appendOperator = function (operator) {
        this.currentInput += operator;
        this.update();
    };
    Calculator.prototype.clearDisplay = function () {
        this.currentInput = "";
        this.display.value = "";
        this.update();
    };
    Calculator.prototype.calculateResult = function () {
        this.display.value = eval(this.currentInput);
        this.update();
    };
    Calculator.prototype.update = function () {
        this.display.value = this.currentInput;
    };
    return Calculator;
}());
