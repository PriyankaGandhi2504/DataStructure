const input = require("./Utility")
const number = require("readline-sync")
// const input = require("readline-sync")
const fs = require('fs')
const linklist = require("./LinkListClass")
const list = new linklist.LinkList
var splitwords = []
var keyword; var array = []; var sortedarray = []
var addelementtolist; var removeelementfromlist

fs.readFile('InputNumberFile.txt', (err, data) => {
    var array = data
    // var splitwords = paragraph.split("")
    // array = array.toString()
    // splitwords = array.split("")
    // splitwords = splitwords.trim(" ")
    console.log("SplitWords: " + array);    //displaying split words from an array
    sortedarray = input.data.insertionSort(array)
    console.log("Ordered  Link List" + sortedarray);
    sortedarray = sortedarray.toString()
    var newsortedarray = sortedarray.split("")
    var newlinklist = []
    for (i = 0; i <= newsortedarray.length; i++) {
        newlinklist = list.addElement(newsortedarray[i])
    }

    isInteger()

    function isInteger() {
        console.log("Please enter keyword to search");
        keyword = number.questionInt()
        var numbervalidation = input.data.enterInteger(keyword)
        // console.log("String Validation Value: " + stringvalidation);
        if (numbervalidation) {
            console.log("Keyword is : " + keyword)
        } else {
            isInteger()
        }
    }

    var searchelement = list.searchElement(keyword)
    if (searchelement) {
        console.log("Element Found");
        console.log("Removing Element from list");
        removeelementfromlist = list.removeElement(keyword)
        console.log("Remove Element From List : " + removeelementfromlist);
    } else {
        console.log("Not Found");
        console.log("Adding Element to the list");
        addelementtolist = list.addKeyword(keyword)
        console.log("Adding Element to List : " + addelementtolist);

    }
    
    var printdata = list.printListData()
    // console.log("Print Data : " + printdata);
    // sortedarray = input.data.insertionSort(array)
    // console.log("Sorted Array : " + sortedarray);
})