/*
* 5. Palindrome-Checker
a. Desc -> A palindrome is a string that reads the same forward and backward, for
example, radar, toot, and madam. We would like to construct an algorithm to
input a string of characters and check whether it is a palindrome.
b. I/P -> Take a String as an Input
c. Logic -> The solution to this problem will use a deque to store the characters of
the string. We will process the string from left to right and add each character to
the rear of the deque.
d. O/P -> True or False to Show if the String is Palindrome or not.

Author : Priyanka Gandhi
Date : 03/10/2019
*/

const input = require("./Utility")
const linklist = require("./LinkListClass")
const list = new linklist.LinkList
var isstring = isString()
var array = []; var i;
var addingelement; var reverseelement; var reversedString

function isString() {
    console.log("Enter any string");
    var string = input.data.input()
    var originalstring = string
    var stringvalidation = input.data.enterString(string)       //function to check if input is string or not
    if (stringvalidation == true) {
        string = string.split("")           //splitting a string to an individual character
        console.log("Array Elements: " + string);
        for (i = string.length - 1; i >= 0; i--) {
            addingelement = list.addElement(string[i])      //adding individual character to linklist as a node in reverse order
            reversedString += addingelement
        }
        for (i = 0; i <= reversedString.length - 1; i++) {     
            reverseelement = list.dequeueElement()          //dequeue function called to get a string to be compared for palindrome
        }
        console.log("Reversed Elements: " + reverseelement);
        if (originalstring == reverseelement) {     //condition to check if strings are palindrome
            console.log("Strings are palindrome");
        } else {
            console.log("Strings are not palindrome");
        }
    } else {
        isString()
    }
}