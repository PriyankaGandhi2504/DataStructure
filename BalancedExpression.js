/*
* 3. Simple Balanced Parentheses
a. Desc -> Take an Arithmetic Expression such as
(5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3) where parentheses are used to order the
performance of operations. Ensure parentheses must appear in a balanced
fashion.
b. I/P -> read in Arithmetic Expression such as (5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3)
c. Logic -> Write a Stack Class to push open parenthesis “(“ and pop closed
parenthesis “)”. At the End of the Expression if the Stack is Empty then the Arithmetic Expression is Balanced. Stack Class Methods are Stack(), push(),
pop(), peak(), isEmpty(), size()
d. O/P -> True or False to Show Arithmetic Expression is balanced or not.

Author Name : Priyanka Gandhi
Date : 04/10/2019
*/

const input = require("./StackClass")       //Importing Stack class to access stack operations
const str = require("./Utility")
const read = require("readline-sync")
const stack = new input.Stack           //creating an object of stack
console.log("Enter any arithmatic expression");
var string = read.question()            //taking user input for an arithmatic expression
string = string.toString()
string = string.split("")               //Splitting string to push individual character on stack
console.log("String = " + string);
var deletedData; var topelement;

var stackElements = checkBalancedExpression(string)     //calling a function to check entered expression

function checkBalancedExpression(string) {
    for (i = 0; i < string.length; i++) {
        const currentElement = string[i]
        if (currentElement === '{' || currentElement === '(' || currentElement === '[') {       //checking if expression have opening brackets
            stack.push(currentElement)      //pushing element on to the stack 
            // console.log("Data on to the stack : " + pushOntoStack);
        } else {                                //if element is closing bracket 
            if (stack.size() === 0) {           
                console.log("Stack is empty");
            } else {
                topelement = stack.peek()       //accessing top element of the stack
                console.log("Top Element : " + topelement);
                
                // console.log("Top Element : " + topelement);
                console.log("Current element : " + currentElement);
                
                if (topelement === '{' && currentElement === '}') {         //if opening equals closing bracket then pop
                    topelement = stack.pop()
                    stack.show()
              
                    // topelement = stack.peek()

                } else if (topelement === '[' && currentElement === ']') {
                    topelement = stack.pop()
                    stack.show()
                    

                } else if (topelement === '(' && currentElement === ')') {
                    topelement = stack.pop()
                    stack.show()
                   

                } else {
                    console.log("No element matched");          //if no condition matched this message will be displayed
                     
                }
                topelement = stack.peek()
            }
        }
       
        // console.log("Top element = " + stack.top);
        
    }console.log("Top Element " + stack.top)
    if(stack.top == 0){
        console.log("Balanced Expression ");        //if stack is empty then it is an balanced expression
    }else{
        console.log("Not balanced");
        
    }

   
}






// console.log(balancedP());


// function balancedP() {
//     try {

//         var stack = require("./StackClass");
//         var readline = require("readline-sync");
//         var expression = readline.question("Enter Arithmatic Expression to check: ");
//         var ss = new stack.Stack();

//         var ArithmaticExpression = expression.split("");
//         console.log(ArithmaticExpression)
//         let ch;
//         // var count = 0;
//         // var counter = 0;
//         // var coun = 0;
//         for (let i = 0; i < ArithmaticExpression.length; i++) {
//             ch = expression.charAt(i);
//             // push in stack if "("
//             if (ch == '(' || ch == '{' || ch == '[') {
//                 // console.log("arithmetic expression ", ArithmaticExpression[i])
//                 ss.push(ch);
//             }
//             // pop from the stack if ")"
//             else if (ch == ')' || ch == '}' || ch == ']') {

//                 // if stack is empty and ")"
//                 if (ch == '}') {
//                     if (ss.isEmpty()) {
//                         ss.push(ch);
//                         count++;
//                         break;
//                     } else {
//                         ss.pop();
//                         count--;
//                     }
//                 }
//                 if (ch == ']') {
//                     if (ss.isEmpty()) {
//                         ss.push(ch);
//                         counter++;
//                         break;
//                     } else {
//                         ss.pop();
//                         counter--;
//                     }
//                 } else {
//                     if (ss.isEmpty()) {
//                         ss.push(ch);
//                         coun++;
//                         break;
//                     } else {
//                         ss.pop();
//                         coun--;
//                     }
//                 }
//             }
//         }

//         var output = count == 0 && counter == 0 && coun == 0;
//         if (count == 0 && counter == 0 && coun == 0) {
//             console.log(" expression is balanced");

//         } else {
//             console.log(" expression not balcned");
//         }

//         //var ans=ss.isEmpty();

//         return [expression, coun, count, counter, output];
//     }
//     catch (err) {
//         console.log(err);
//     }
// }
// // module.exports = balancedP();