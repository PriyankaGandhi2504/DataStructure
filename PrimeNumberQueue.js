const input = require("./Utility")
// const read = require("./StackClass")
// const stack = new read.Stack
const linklist = require("./LinkListClass")
const list = new linklist.LinkList
var number = 1000
var primenumbers = [];
primenumbers = input.data.isAnagramAndPrime(number)
console.log("[ " + primenumbers + " ]");
for (i = 0; i <= primenumbers.length; i++){
    primeNumberLinkList = list.addElement(primenumbers[i])
}
list.pushDataOntoQueueUsingLinkList()