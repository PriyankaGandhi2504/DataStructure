const input = require("./Utility")
const read = require("readline-sync")
console.log("Enter Number of Month");
var month = read.questionInt()
console.log("Enter year ");
var year = read.questionInt()
var week = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"]
var dayOfWeek; var array = [];
input.data.calendar(month, year)






/**
* y ​ 0​ = ​ y ​ − (14 − ​ m ) ​ / 12
x ​ = ​ y 0​ ​ + ​ y ​ 0​ /4 − ​ y 0​ ​ /100 + ​ y ​ 0​ /400
m ​ 0​ = ​ m ​ + 12 × ((14 − ​ m ​ ) / 12) − 2
d ​ 0​ = (​ d ​ + ​ x ​ + 31​ m ​ 0​ / 12) mod 7
 */