
class csStyle {
    styleName: string;
    value: string;
    constructor(styleName :string, value :string) {
        this.styleName = styleName;
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    getStyle() {
        return this.styleName;
    }
}

let arr = [
    new csStyle("color", "red"),
    new csStyle("font", "50px"),
];


function textConverter(array : csStyle[], text:string) {
    arr.forEach((item)=>{
        const newP = document.createElement("p");
        newP.textContent = text;

        if (item.getStyle() === "font"){
            newP.style.fontSize = item.getValue();
        }
        if (item.getStyle() === "color"){
            newP.style.color = item.getValue();
        }
        document.body.appendChild(newP);
    })
}
document.addEventListener("DOMContentLoaded", function(){
    textConverter(arr, "alsdmlpaksfmksf");
})


//task2
//1

function replace(text:string){
    let res = "";

    for(let i=0;i<text.length;i++){
        let char = text.charAt(i);

        if (char === char.toUpperCase() && char !== " " && !/[0-9]/.test(char) ){
            res += char.toLowerCase()
        }
        if (char === " "){
            res += " ";
        }
        if (char === char.toLowerCase() && char !== " " && !/[0-9]/.test(char) ){
            res += char.toUpperCase()
        }
        if (/[0-9]/.test(char)){
            res += "_";
        }
    }
    return res;
}

console.log(replace("Hello World 123"))

//2

function toCamelCase(str :string){
    let res = '';
    let toUpperCase = false;

    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);

        if (char === '-') {
            toUpperCase = true;
        } else {
            if (toUpperCase) {
                res += char.toUpperCase();
                toUpperCase = false;
            } else {
                res += char;
            }
        }
    }
    return res;
}

console.log(toCamelCase("hue-sos"))
//3
function sss(text:string){
    let abbreviation = '';
    let wordStarted = false;

    for (let i = 0; i < text.length; i++) {
        let char = text.charAt(i);

        if (char !== ' ' && !wordStarted) {
            abbreviation += char.toUpperCase();
            wordStarted = true;
        }

        if (char === ' ') {
            wordStarted = false;
        }
    }

    return abbreviation;
}
console.log(sss("Hello World 123"))
//4

function getLnkInfo(link:string){
    let url = new URL(link);
    let res = "";
    res += "protokool: " + url.protocol + " pathname: " + url.pathname ;
    return res;
}
console.log(getLnkInfo("https://itstep.org/ua/about"))
//5

/*function print(template: string, ...args: (string | number)[])  {
    return template.replace(/%(\d+)/g, (match, index) => args[index - 1].toString());
}
console.log(print("Today is %1 %2.%3.%4", "Monday", 10, 8, 2020));*/
