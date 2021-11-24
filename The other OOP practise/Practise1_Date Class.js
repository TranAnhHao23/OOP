class MyDate {
    day
    month
    year

    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    getDay() {
        return this.day;
    }

    setDay(daySet) {
        this.day = daySet;
    }

    getMonth() {
        return this.month;

    }

    setMonth(monthSet) {
        this.month = monthSet;
    }

    getYear() {
        return this.year;
    }

    setYear(yearSet) {
        this.year = yearSet;
    }

    setDate(daySet, monthSet, yearSet) {
        this.day = daySet;
        this.month = monthSet;
        this.year = yearSet;

    }

    toString(){
        console.log(this.day + "/" + this.month + "/" + this.year)
        let myDay = new Date(this.day, this.month, this.year)
    }

}

let date = new MyDate(22, 2, 2017);
let dateDay = date.getDay();
let dateMonth = date.getMonth();
let dateYear = date.getYear();
console.log(dateDay + "/" + dateMonth + "/" + dateYear);

date.setDay(10);
date.setMonth(10);
date.setYear(2020);

dateDay = date.getDay();
dateMonth = date.getMonth();
dateYear = date.getYear();
console.log(dateDay + "/" + dateMonth + "/" + dateYear);

date.setDate(7,7,2017);
date.toString()