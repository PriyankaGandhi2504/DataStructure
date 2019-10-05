/*
* 11. Take a range of 0 - 1000 Numbers and find the Prime numbers in that range. Store
the prime numbers in a 2D Array, the first dimension represents the range 0-100,
100-200, and so on. While the second dimension represents the prime numbers in
that range

Author Name : Priyanka Gandhi
Date : 04/10/2019
*/

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
        primenumbers[i] = input.data.primerange(startrange, endrange)       //function to calculate prime numbers for a range
        startrange = startrange + 100
        endrange = endrange + 100
        i++
    }
    // isPrime()
}

function display(){
    initial = 0; end = 100
    for (i = 0; i < 10; i++) {
        console.log("[ " + "[ " + initial + "-" + end + " ]" + " , " + "[ " + primenumbers[i] + "]" + " ]");        //printing prime numbers according to its range
        initial += 100;
        end += 100
        console.log();
    }    
}