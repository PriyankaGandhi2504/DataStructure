/*
* 7. Number of Binary Search Tree
Solve the Problem in the following link
https://www.hackerrank.com/challenges/number-of-binary-search-tree​ .

Author : Priyanka Gandhi
Date : 04/10/2019
*/

const input = require("./Utility")
const read = require("readline-sync")
var binaryTree = binary()
var numberOfNodes

function binary(numberOfNodes) {
    try {
        console.log("Enter number of nodes: ");
        numberOfNodes = read.questionInt()
        if (numberOfNodes < 1) {
            throw "Enter valid number of nodes"
        } else {
            // calculate number of trees.
            var result = input.data.binaryTree(numberOfNodes);     // calling a binary tree function to calculate number of trees
        }
        console.log("Number of Trees formed from " + numberOfNodes + " are : " + result);
    } catch (err) {
        console.log(err)
    }
}


//(2n)! / ((n + 1)! * n!)