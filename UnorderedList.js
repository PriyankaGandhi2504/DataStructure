/*1. UnOrdered List
a. Desc -> Read the Text from a file, split it into words and arrange it as Linked List.
Take a user input to search a Word in the List. If the Word is not found then add it
to the list, and if it found then remove the word from the List. In the end save the
list into a file
b. I/P -> Read from file the list of Words and take user input to search a Text
c. Logic -> Create a Unordered Linked List. The Basic Building Block is the Node
Object. Each node object must hold at least two pieces of information. One ref to
the data field and second the ref to the next node object.
d. O/P -> The List of Words to a File.

Author : Priyanka Gandhi
Date : 30/09/2019
*/

const number = require("./Utility")
// const input = require("readline-sync")
const fs = require('fs')
const linklist = require("./LinkListClass")
const list = new linklist.LinkList
var splitwords = []
var keyword; var indexOfKeyword;

fs.readFile('InputFile.txt', (err, data) => {
    var paragraph = data.toString()
    var splitwords = paragraph.split(" ")
    splitwords.push()
    console.log("SplitWords: " + splitwords);    //displaying split words from an array
    console.log(isString());

    function isString() {
        console.log("Please enter keyword to search");
        keyword = number.data.input()
        var stringvalidation = number.data.enterString(keyword)
        // console.log("String Validation Value: " + stringvalidation);
        if (stringvalidation) {
            console.log("Keyword is : " + keyword)
        } else {
            isString()
        }
    }
    var newlinklist = []
    for (i = 0; i <= splitwords.length; i++) {
        newlinklist = list.addElement(splitwords[i])
    }
    var searchelement = list.searchElement(keyword)
    if (searchelement) {
        console.log("Element Found");
        console.log("Removing Element from list");
        indexOfKeyword = list.searchIndex(keyword)
        // console.log("Index Value : " + indexOfKeyword);
        
        // removeelementfromlist = list.removeAtIndex(indexOfKeyword)
        console.log("Remove Element From List : " + indexOfKeyword);
        list.printListData()
    } else {
        console.log("Not Found");
        console.log("Adding Element to the list");
        addelementtolist = list.addElement(keyword)
        console.log("Adding Element to List : " + addelementtolist);
        list.printListData()
    }   
    // console.log("Print Data : " + printdata);
})