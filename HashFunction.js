const input = require("./Utility")
const read = require("readline-sync")
const fs = require('fs')
var array = []; var slot = [10]
fs.readFile('HashFile.txt', (err,data) => {
    var filedata = data
    for (i = 0; i < 10 ; i++){
        slot[i] = filedata[i]
    }
    console.log("Data " + slot);
    
    console.log("Enter a Number to be searched : ");
    var number = read.questionInt()
    
})