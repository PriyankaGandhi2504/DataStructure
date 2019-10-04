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
    var stringvalidation = input.data.enterString(string)
    if (stringvalidation == true) {
        string = string.split("")
        console.log("Array Elements: " + string);
        for (i = string.length - 1; i >= 0; i--) {
            // console.log("Last Element : " + string[0]);

            addingelement = list.addElement(string[i])
            // console.log("Added Elements: " + addingelement);
            reversedString += addingelement
        }
        // console.log("Updated values : " + reversedString);
        // addingelement = addingelement.split("")
        // console.log("Array Length : " + array.length);

        for (i = 0; i <= reversedString.length - 1; i++) {
            // console.log("Dequeue values " + reversedString[i]);
            reverseelement = list.dequeueElement()
            // console.log("Reversed Elements: " + reverseelement);
            // reversearray += reverseelement
        }
        console.log("Reversed Elements: " + reverseelement);
        // console.log("Reverse String : " + reversearray);
        // console.log("Original String = " + originalstring);

        if (originalstring == reverseelement) {
            console.log("Strings are palindrome");
        } else {
            console.log("Strings are not palindrome");
        }
    } else {
        isString()
    }
}
