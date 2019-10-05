/*
* 4. Simulate Banking Cash Counter
a. Desc -> Create a Program which creates Banking Cash Counter where people
come in to deposit Cash and withdraw Cash. Have an input panel to add people
to Queue to either deposit or withdraw money and dequeue the people. Maintain
the Cash Balance.
b. I/P -> Panel to add People to Queue to Deposit or Withdraw Money and dequeue
c. Logic -> Write a Queue Class to enqueue and dequeue people to either deposit
or withdraw money and maintain the cash balance
d. O/P -> True or False to Show Arithmetic Expression is balanced or not.

Author Name : Priyanka Gandhi
Date : 04/10/2019
*/

const input = require("./Utility")
const queue = require("./QueueClass")
const number = require("readline-sync")
var numbervalidation = isNumber()
var customerName = []; var globalBalance; var list;
var noOfPeople;

function isNumber() {
    console.log("Please enter an amount for Global Balance");
    globalBalance = number.questionInt()        //taking user input for global amount of Bank
    console.log("Enter Number of People in Queue");
    noOfPeople = number.questionInt();
    customerDetails(noOfPeople)
}

function customerDetails(noOfPeople) {
    var i
    console.log("Enter username");
    for (i = 1; i <= noOfPeople; i++) {
        customerName = input.data.input();
        // customerName = input.data.enterString(customerName)
        // if(customerName == true){
        list = input.data.enqueue(customerName)         //Adding customers to queue
        // }else{
        // console.log("Please, enter valid name");
        // customerDetails(i)
        // }
        // console.log("List : " + list);
    }
}

var oldAmount = globalBalance;
console.log(" Old Amount : ", oldAmount);
cashCounter(list, globalBalance)                        //calling a function to perform operation

function cashCounter(list, globalBalance) {
    var choice
    for (i = 0; i <= list.length-1; i++) {
        // console.log("Number of people in Queue : " + list.length);
        
        do {
            console.log("Welcome To Bank");
            console.log( " Please enter correct input : ");
            console.log("Enter 1.to Withdraw money:");
            console.log("Enter 2.to Deposit Money: ");
            choice = number.questionInt();
            withdrawOrDeposit(choice)       
        } while (choice < 0 && choice >= 2) {        
            input.data.dequeue(); // calling deQueue method to remove the person from queue after their operation
            console.log("person is removed from queue");
        }
    }
}

function withdrawOrDeposit(choice){
    switch (choice) {
        case 1:
            console.log("Enter amount TO WithDraw: ");
            var withdrawAmount = number.questionInt();
            globalBalance = input.data.withdraw(withdrawAmount, globalBalance)
            if (globalBalance == false) {                //function will return false if teh amount entered is not valid
                console.log("Available Balance: " + globalBalance);
                console.log("Enter Amount you want to Withdraw");
                var withdrawAmount = number.questionInt();
                var updatedvalue = input.data.withdraw(withdrawAmount, globalBalance)
            }
            break;

        case 2:
            console.log("Enter Amount you want to Deposit");
            var depositAmount = number.questionInt();
            globalBalance = input.data.deposit(depositAmount, globalBalance)
            if (globalBalance == false) {                //function will return false if teh amount entered is not valid
                console.log("Available Balance: " + globalBalance);     //display the current available balance
                console.log("Enter Amount you want to Deposit");
                var depositAmount = number.questionInt();
                input.data.deposit(depositAmount, globalBalance)
            }
            break;
        default:
            console.log("Enter valid Input");               //if user enters invalid input
            let choice = number.questionInt()               //taking user input again to enter proper choice
            withdrawOrDeposit(choice)
            break;
    }
}