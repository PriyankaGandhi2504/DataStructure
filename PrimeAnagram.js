const input = require("./Utility")
// var number = 1000
var primenumbers = []
// console.log("Prime Numbers: " + primenumbers);
var startrange = 1; var endrange = 100;
var isPrime = isPrime()
var display = display()

function isPrime(){
    var i = 0
    while(i < 10){      //number of rows
        // console.log("Value of i : " + i);
        primenumbers[i] = input.data.isAnagramPrime(startrange, endrange)
        startrange = startrange + 100
        endrange = endrange + 100
        i++
    }
}

function display(){
    initial = 0; end = 100
    for (i = 0; i < 10; i++) {
        console.log("[ " + "[ " + initial + "-" + end + " ]" + " , " + "[ " + primenumbers[i] + "]" + " ]");
        initial += 100;
        end += 100
        console.log();
    }    
}