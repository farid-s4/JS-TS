class ExtendedDate extends Date{
    toReadableString(){
        return this.getFullYear() + '-' + (this.getMonth() + 1) + '-' + (this.getDate());
    }
    IsFuture(){
        return this > new Date();
    }
    IsLeapYear(){
        return new Date(this.getFullYear(), 1, 29).getDate() === 29;
    }
}

let date =  new ExtendedDate();
console.log(date.toReadableString());
console.log(date.IsFuture());
console.log(date.IsLeapYear());