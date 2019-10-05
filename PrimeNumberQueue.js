/*
* 14. Add the Prime Numbers that are Anagram in the Range of 0 - 1000 in a Queue using
the Linked List and Print the Anagrams from the Queue. Note no Collection Library
can be used.

Author Name : Priyanka Gandhi
Date : 04/10/2019
*/

const input = require("./Utility")
// const read = require("./StackClass")
// const stack = new read.Stack
const linklist = require("./LinkListClass")
const list = new linklist.LinkList
var number = 1000
var primenumbers = [];
primenumbers = input.data.isAnagramAndPrime(number)         //function to return 
console.log("[ " + primenumbers + " ]");
for (i = 0; i <= primenumbers.length; i++){
    primeNumberLinkList = list.addElement(primenumbers[i])
}
list.pushDataOntoQueueUsingLinkList()