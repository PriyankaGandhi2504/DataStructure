const input = require("./Utility")
const queue = require("./QueueClass")
const number = require("readline-sync")
var numbervalidation = isNumber()
var customerName = []; var globalBalance; var list;
var noOfPeople;

function isNumber() {
    console.log("Please enter an amount for Global Balance");
    globalBalance = input.data.input()
    var numberValidation = input.data.input(globalBalance)
    // console.log("Number validation : " + numberValidation);

    // if (numberValidation == true) {
        console.log("Enter Number of People in Queue");
        noOfPeople = number.questionInt();
        customerDetails(noOfPeople)
    // } else {
    //     console.log("Please enter a valid number");
    //     isNumber()
    // }
}

function customerDetails(noOfPeople) {
    var i
    console.log("Enter username");
    for (i = 1; i <= noOfPeople; i++) {
        customerName = input.data.input();
        customerName = input.data.enterString(customerName)

        if(customerName == true){
            list = input.data.enqueue(customerName)
        }else{
            console.log("Please, enter valid name");
            customerDetails(i)
        }
        // console.log("List : " + list);
    }
}

var oldAmount = globalBalance;
console.log(" Old Amount : ", oldAmount);
cashCounter(list, globalBalance)

function cashCounter(list, globalBalance) {
    var choice
    for (i = 0; i < list.length; i++) {
        do {

            console.log("Welcome To Bank");
            // console.log(customerName + " in queue:");
            console.log("please Enter correct input : ");
            console.log("Enter 1.to Withdraw money:");
            console.log("Enter 2.to Deposit Money: ");
            choice = number.questionInt();

            switch (choice) {
                case 1:
                    console.log("Enter amount TO WithDraw: ");
                    var withdrawAmount = number.questionInt();
                    var updatedvalue = input.data.withdraw(withdrawAmount, globalBalance)
                    if (updatedvalue == false) {
                        console.log("Available Balance: " + globalBalance);

                        console.log("Enter Amount you want to Withdraw");
                        var withdrawAmount = number.questionInt();
                        var updatedvalue = input.data.withdraw(withdrawAmount, globalBalance)
                    }
                    break;

                case 2:
                    console.log("Enter Amount you want to Deposit");
                    var depositAmount = number.questionInt();
                    var updatedvalue = input.data.deposit(depositAmount, globalBalance)
                    if (updatedvalue == false) {
                        console.log("Available Balance: " + globalBalance);
                        console.log("Enter Amount you want to Deposit");
                        var depositAmount = number.questionInt();
                        input.data.withdraw(depositAmount, globalBalance)
                    }
                    break;
                default:
                    console.log("Enter valid Input");
                    break;
            }
        } while (choice < 0 && choice >= 2) {

            input.data.dequeue(); // calling deQueue method to remove the person from queue after their operation
            console.log("person is removed from queue");
            input.data.show();
        }
    }
}




