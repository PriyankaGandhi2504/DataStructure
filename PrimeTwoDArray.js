const input = require("./Utility")
// var number = 1000
var primenumbers = []
var array = [[], []]
var rangearray = [[], []]
var number = 1000
// console.log("Prime Numbers: " + primenumbers);
var startrange = 1; var endrange = 100;
var isPrime = isPrime(number)
var i
// var display = display()

function isPrime(number) {
    //number of rows
    // console.log("Value of i : " + i);
    primenumbers = input.data.primeNumber(number)
    array.push(primenumbers)

    for (i = 0; i < array.length; i++) {
        var initial = 0; var end = 100;
        

            for(j = initial; j < end; j++){
                while(end<=1000){
                console.log("[ " + "[ " + initial + "-" + end + " ]" + " , " + "[ " + array[i] + "]" + " ]");
                initial += 100;
                end += 100
                console.log();
            }
        }
        
    }


    // array.push(primenumbers[i])
    // startrange = startrange + 100
    // endrange = endrange + 100
    // i++
}


// function display() {
//     var initial = 0; var end = 100; var i; var j;
//     for (i = 0; i < 10; i++) {
//         for (j = 0; j < 2; j++) {
//             // console.log("[ " + "[ " + initial + "-" + end + " ]" + " , " + "[ " + array[i] + "]" + " ]");
//         initial += 100;
//         end += 100
//         console.log();
//         }
//         // console.log(array);
//     }
// }

// function display(){
//     initial = 0; end = 100
//     for (i = 0; i < 10; i++) {
//         console.log("[ " + "[ " + initial + "-" + end + " ]" + " , " + "[ " + primenumbers[i] + "]" + " ]");
//         initial += 100;
//         end += 100
//         console.log();
//     }    
// }