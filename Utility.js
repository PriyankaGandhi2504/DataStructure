var methods = {}

methods.input = function () {
    var inputdata = require("readline-sync")
    var value = inputdata.question()
    return value
}
exports.data = methods

/*
* Try Catch For String
*/
methods.enterString = function (str) {
    try {
        if (isNaN(str)) {
            // console.log(str);
            return true
        } else {
            throw "Invalid Input"
        }
    }
    catch (err) {
        console.log(err);
        return false
        // enterString(str)
    }
}

/*
* Try Catch For Integer
*/
methods.enterInteger = function (num) {
    try {
        if (!isNaN(num)) {
            return true
        } else {
            throw "Invalid Input"
        }
    }
    catch (err) {
        console.log(err);
        return false
    }
}


/*
* Insertion Sort 
*/
methods.insertionSort = function (array) {
    // var array = []
    // array = splitwords.toString()
    // array = array.split("")
    // array = array.push()
    for (i = 0; i <= array.length - 1; i++) {
        for (j = i + 1; j <= array.length; j++) {
            // console.log("I : " + array[i]);
            // console.log("J : " + array[j]);
            if (array[i] > array[j]) {
                var temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }
    }
    return array
}


methods.enqueue = function (data) {
    var string = []
    rear = -1; front = -1
    rear = rear + 1
    string[rear] = data
    return string[rear]
}



methods.dequeue = function () {
    var removingelement = []
    // front = 0; rear = addingelement.length-1

    if (front == -1 && rear == -1) {
        return "No Customer Remaning"
    } else if (front == rear) {
        front = -1;
        rear = -1
    } else {
        front = front + 1
        // console.log("Front Element : " + addingelement[front]);
    }
    return removingelement[front]
}


methods.show = function () {
    for (var i = 0; i < this.size; i++) {
        console.log(this.arr[this.front + i] + " ");
    }
    console.log();
}


methods.withdraw = function (withdrawAmount, globalBalance) {
    if (withdrawAmount > 0 && withdrawAmount <= globalBalance) {
        globalBalance = parseInt(globalBalance) - parseInt(withdrawAmount);
        console.log("Collect your money. ThankYou -->");
        if (globalBalance == 0) {
            console.log("Cash is not present !");
        }
        console.log("Updated amount is = " + globalBalance);
        return globalBalance;
    }
    else {
        console.log("Enter Valid amount");
        return false
    }
    // console.log("Global Balance : " + globalBalance);

    // return this.globalBalance;
}


methods.deposit = function (depositAmount, globalBalance) {
    var oldAmount = parseInt(globalBalance);
    if (depositAmount > 0) {

        console.log("old amount  " + oldAmount)
        globalBalance = parseInt(globalBalance) + parseInt(depositAmount);  // updating bank amount
        console.log("updated amount = " + globalBalance);
        return globalBalance
    }
    else {
        console.log("please Enter valid amount");
        return false;
    }
    // return this.globalBalance;
}



methods.binaryTree = function (numberOfNodes) {
    if (numberOfNodes >= 1 && numberOfNodes <= 85) {
        var numberOfTrees = Math.floor((this.factorial(2 * numberOfNodes)) / (this.factorial(numberOfNodes + 1) *
            this.factorial(numberOfNodes)));
        console.log(numberOfTrees);
    } else {
        console.log(" number should be between 1 to 1000");
    }


    return numberOfTrees;
}


methods.factorial = function (numberOfNodes) {
    let fact = 1;
    for (i = 1; i <= numberOfNodes; i++) {
        fact = fact * i;
    }
    return fact;
}

/*
* Function to calculate Prime Range
*/

methods.primerange = function (initial, end) {
    var array = []; var k = 0; var count = 0;
    var flag = 0
    for (i = initial; i <= end; i++) {
        for (j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
                flag = 0
                count++
                break
            } else {
                flag = 1
            }
        }
        if (flag == 1) {
            array[k++] = i
            // k++
        }

    }
    //  console.log("Prime Numbers: "+JSON.stringify(arr))
    return array;
}


methods.isAnagramPrime = function (startrange, endrange) {
    var primes = this.primerange(startrange, endrange);
    var n = primes.length;
    // console.log("Length : " + n);

    var anagramPrimes = [];
    var k = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (this.checkIfAnagram(primes[i], primes[j])) {
                // anagramPrimes[k++] = primes[i];
                // anagramPrimes[k++] = primes[j];
            }

        }
        anagramPrimes[k++] = primes[i];
    }

    return anagramPrimes;
}


methods.checkIfAnagram = function (str1, str2) {
    var b;
    let string1 = str1;
    let string2 = str2;
    if (string1.length != string2.length) {
        return false;
    }
    sortedString1 = this.sort(string1);
    sortedString2 = this.sort(string2);
    b = this.check(sortedString1, sortedString2);
    if (true) {
        return true;
    }
    else {
        return false;
    }
}

methods.check = function (string1, string2) {
    for (let i = 0; i < string1.length; i++) {
        if (string1.charAt(i) != string2.charAt(i)) {
            return false;
        }
    }
    return true;
}


methods.sort = function (string1) {
    string1 = string1.toString()
    let char = string1.split("");
    for (let i = 0; i < string1.length; i++) {
        for (let j = i + 1; j < string1.length; j++) {
            if (char[i] > char[j]) {
                let temp = char[i];
                char[i] = char[j];
                char[j] = temp;
            }
        }
    }
    var sortedString = "";
    for (let i = 0; i < char.length; i++) {
        sortedString += char[i];
    }
    return sortedString;
}


methods.isAnagramAndPrime = function (number) {
    var primes = this.primeNumber(number);
    var n = primes.length;
    // console.log("Length : " + n);

    var anagramPrimes = [];
    var k = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (this.checkIfAnagram(primes[i], primes[j])) {
                // anagramPrimes[k++] = primes[i];
                // anagramPrimes[k++] = primes[j];
            }

        }
        anagramPrimes[k++] = primes[i];
    }

    return anagramPrimes;
}

methods.primeNumber = function (n) {
    //var i = 2;
    /*if(n % i == 0){
        console.log("2")
    }*/
    var arr = []
    for (i = 2; i <= n; i++) {
        var count = 0;
        for (j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
                count++

            }
        }

        if (count == 0) {
            // console.log(i)
            arr.push(i)
        }
    }
    //  console.log("Prime Numbers: "+JSON.stringify(arr))
    return arr;
}

/**
 * Function of Calendar
 */
methods.calendar = function (month, year) {
    var month = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    var dayOfWeek = ['0', '1', '2', '3', '4', '5', '6']
}

// methods.dayOfWeek = function (dayOfWeek, month, year) {
//     a = year​ − ((14 − ​ month) / 12)
//     x = a + a / 4 − a / 100 + a / 400
//     m0 = month + 12 × ((14 − ​ month) / 12) − 2
//     d0 = (dayOfWeek + x + 31​ * m​0 / 12) % 7
// }