/*
* 2. Ordered List
a. Desc -> Read .a List of Numbers from a file and arrange it ascending Order in a
Linked List. Take user input for a number, if found then pop the number out of the
list else insert the number in appropriate position
b. I/P -> Read from file the list of Numbers and take user input for a new number
c. Logic -> Create a Ordered Linked List having Numbers in ascending order.
d. O/P -> The List of Numbers to a File.

Author Name : Priyanka Gandhi
Date : 01/10/2019
*/

const input = require("./Utility")
const number = require("readline-sync")
// const input = require("readline-sync")
const fs = require('fs')
const linklist = require("./LinkListClass")
const list = new linklist.LinkList          //creating an object to access linklist function
var splitwords = []
var keyword; var array = []; var sortedarray = []
var addelementtolist; var removeelementfromlist; var UpdatedList;

fs.readFile('InputNumberFile.txt', (err, data) => {
    var array = data
    console.log("Array Elements " + array);
    for (i = 0; i < array.length; i++) {
        array = array.toString()
        var newarray = array.split("")
        list.addKeyword(newarray[i])        //calling a function to add data to linklist in an ordered way
    }

    isInteger()

    function isInteger() {
        console.log("Please enter keyword to search");
        keyword = number.questionInt()      //taking a user input for keyword to be searched
        var numbervalidation = input.data.enterInteger(keyword)         //function to check whether input is number or not
        // console.log("String Validation Value: " + stringvalidation);
        if (numbervalidation) {
            console.log("Keyword is : " + keyword)
        } else {
            isInteger()         //if entered input is not a number
        }
    }

    var searchelement = list.searchElement(keyword)     //linklist function to search keyword by traversing
    if (searchelement) {
        console.log("Element Found");
        console.log("Removing Element from list");
        UpdatedList = list.searchIndex(keyword)        //function to remove entered keyword from list
        list.printListData()                                  //displaying list
        // removeelementfromlist = list.removeElement(keyword)
        // console.log("Remove Element From List : " + indexOfKeyword);
    } else {
        console.log("Not Found");
        console.log("Adding Element to the list");          
        addelementtolist = list.addKeyword(keyword)             //function to add element to the list if not
        list.printListData()
        // console.log("Adding Element to List : " + addelementtolist);
    }
})
