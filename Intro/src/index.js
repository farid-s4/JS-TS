
/*
let message = prompt("Обьем флешки:")
alert(message*8000)*/

/*
let message = prompt("Напишите трехзначное число: ");

for (let i = message.length-1; i >= 0; i--)  {
    alert(message[i]);
}

*/

/////////////////////
/*
let message = prompt("Напишите число: ")
let result = message % 2 == 0 ?  "Четное" :  "Нечетное"
alert(result)*/
//////////////////////
/*

let message = prompt("What is your age?");

if (message <= 12) {
    alert("kid");
}
if (message > 12 && message < 18) {
    alert("teenager");
}
if(message >= 18 && message < 60){
    alert("adult")
}
else{
    alert("pora na pensiyu drujok")
}*/


/*
let message = prompt("napisi chislo");
switch (message) {
    case "1":{
        alert("!")
    }
    case "2":{
        alert("@")
    }
    case "3":{
        alert("#")
    }
    case "4":{
        alert("$")
    }
    case "5":{
        alert("%")
    }
    case "6":{
        alert("^")
    }
    case "7":{
        alert("&")
    }
    case "8":{
        alert("*")
    }
    case "9":{
        alert("(")
    }
}

*/

/*
let message = prompt("napisi god");

if (message % 400 == 0 || message % 4 == 0 && message % 100 != 0) {
    alert(true);
}
else{
    alert(false);
}

*/
///////////////////////////////////////////////////////

/*
let arr = [];

arr = prompt("Напиши 5 чисел через пробел: ")
arr = arr.split(" ");

let pos = 0;
let neg = 0;
let zero = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0){
        pos++;
    }
    if (arr[i] < 0){
        neg++;
    }
    if (arr[i] === 0){
        zero++;
    }
}
alert(pos);
alert(neg);
alert(zero);*/
/*

let flag = true;

while (flag) {
    let first = prompt("первое число")
    let sign = prompt("ведите знак")
    let second = prompt("второое чилсо")

    switch (sign) {
        case "+":{
            alert(Number(first) + Number(second));
            break;
        }
        case "-":{
            alert(Number(first) - Number(second));
            break;
        }
        case "*":{
            alert(Number(first) * Number(second));
            break;
        }
        case "/":{
            alert(Number(first) / Number(second));
        }
    }

    let mess = prompt("Выйти (да или нет)")

    if (mess === "нет") {
        flag = false;
    }
}*/

//////////////////////////////////////////////////////////////////////

/*let first  = prompt('Enter first');
let last = prompt('Enter last');

function func1 (first, last) {

    if (first === last) {
        return 0;
    }
    if (first > last) {
        return 1;
    }
    if (first < last) {
        return -1;
    }
}

alert(func1(first, last));*/

/*///////////////////////////////

let number = prompt('Enter number');

function func2 (num) {
    if (num === 0){
        return 1;
    }
    return num * func2(num-1);
}

alert(func2(number));*/

////////////////////////////
/*/////////////////
let hours = prompt("hours");
let minutes = prompt("minutes")
let sec = prompt("sec")

function converter(s,m,h){
    return h*3600+m*60+s;
}

alert(converter(hours,minutes,sec));*/
////////////////////////////////////////


/*/////////////////////////
let mess = prompt("Enter seconds");

function secConverter(seconds){
    let minutes = (seconds%3600)/60;
    let hours = seconds % 3600;
    let sec = seconds % 60;

    return `${hours}:${minutes}:${sec}`;
}

alert(secConverter(mess));*/
//////////////////////////
/*
function sum(...numbers){
    let sum = 0;
    for (let number of numbers){
        sum += number;
    }
    return sum;
}
*/
