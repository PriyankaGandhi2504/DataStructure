const input = require("./StackClass")
const str = require("./Utility")
const read = require("readline-sync")
const stack = new input.Stack
console.log("Enter any arithmatic expression");
var string = read.question()
string = string.toString()
string = string.split("")
console.log("String = " + string);
var deletedData; var topelement;


var stackElements = checkBalancedExpression(string)

function checkBalancedExpression(string) {
    for (i = 0; i < string.length; i++) {
        const currentElement = string[i]
        if (currentElement === '{' || currentElement === '(' || currentElement === '[') {
            stack.push(currentElement)
            // console.log("Data on to the stack : " + pushOntoStack);
        } else {
            if (stack.size() === 0) {
                console.log("Stack is empty");
            } else {
                topelement = stack.peek()
                console.log("Top Element : " + topelement);
                
                // console.log("Top Element : " + topelement);
                console.log("Current element : " + currentElement);
                
                if (topelement === '{' && currentElement === '}') {
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
                    console.log("No element matched");
                     
                }
                topelement = stack.peek()
            }
        }
       
        // console.log("Top element = " + stack.top);
        
    }console.log("Top Element " + stack.top)
    if(stack.top == 0){
        console.log("Balanced Expression ");
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