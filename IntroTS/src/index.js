/*
let message: string = prompt("Обьем флешки:");

if (message! !== null) {
    let number = Number(message);
    alert(number*8000);
}

*/
/*
let message = prompt("Напишите трехзначное число: ");

if (message !== null) {
    for (let i = message.length-1; i >= 0; i--)  {
        alert(message[i]);
    }
}


let message = prompt("Напишите число: ");
if (message !== null) {
    let result: string = Number(message) % 2 === 0 ? "Четное" : "Нечетное";
    alert(result);
}
*/
/*let message = prompt("What is your age?");
if (message !== null) {
    let age: number = Number(message);
    if (age <= 12) {
        alert("kid");
    } else if (age > 12 && age < 18) {
        alert("teenager");
    } else if (age >= 18 && age < 60) {
        alert("adult");
    } else {
        alert("pora na pensiyu drujok");
    }
}*/
/*let message = prompt("napisi chislo");
if (message !== null) {
    switch (message) {
        case "1":
            alert("!");
            break;
        case "2":
            alert("@");
            break;
        case "3":
            alert("#");
            break;
        case "4":
            alert("$");
            break;
        case "5":
            alert("%");
            break;
        case "6":
            alert("^");
            break;
        case "7":
            alert("&");
            break;
        case "8":
            alert("*");
            break;
        case "9":
            alert("(");
            break;
        default:
            alert("Invalid input");
    }
}*/
/*let message = prompt("napisi god");
if (message !== null) {
    let year: number = Number(message);
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        alert(true);
    } else {
        alert(false);
    }
}*/
/*
let message = prompt("Напиши 5 чисел через пробел: ");
if (message !== null) {
    let arr: string[] = message.split(" ");
    let pos = 0;
    let neg = 0;
    let zero = 0;

    for (let i = 0; i < arr.length; i++) {
        let num = Number(arr[i]);
        if (num > 0) {
            pos++;
        }
        if (num < 0) {
            neg++;
        }
        if (num === 0) {
            zero++;
        }
    }
    alert(pos);
    alert(neg);
    alert(zero);
}*/
/*

let flag: boolean = true;

while (flag) {
    let first = prompt("первое число");
    let sign = prompt("ведите знак");
    let second = prompt("второе число");

    if (first && sign && second !== null) {
        switch (sign) {
            case "+":
                alert(Number(first) + Number(second));
                break;
            case "-":
                alert(Number(first) - Number(second));
                break;
            case "*":
                alert(Number(first) * Number(second));
                break;
            case "/":
                alert(Number(first) / Number(second));
                break;
            default:
                alert("Invalid operator");
        }
    }

    let mess: string | null = prompt("Выйти (да или нет)");
    if (mess === "нет") {
        flag = false;
    }
}*/
/*
let first  = prompt('Enter first');
let last = prompt('Enter last');

function func1 (first: string, last: string) : number {
    if (first === last) {
        return 0;
    }
    if (first > last) {
        return 1;
    }
    if (first < last) {
        return -1;
    }
    return -1;
}
if (first && last !== null){
    alert(func1(first, last));
}*/
/*

let hours = prompt("hours");
let minutes = prompt("minutes");
let sec = prompt("sec");

function converter(s: number, m: number, h: number): number {
    return h * 3600 + m * 60 + s;
}

if (hours && minutes && sec !== null) {
    alert(converter(Number(sec), Number(minutes), Number(hours)));
}
*/
/*
let message = prompt("Enter seconds");

function secConverter(seconds: number): string {
    let minutes = (seconds % 3600) / 60;
    let hours = seconds / 3600;
    let sec = seconds % 60;

    return `${hours}:${minutes}:${sec}`;
}

if (message !== null) {
    alert(secConverter(Number(message)));
}
*/
/*

function sum(...numbers: number[]): number {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}*/
