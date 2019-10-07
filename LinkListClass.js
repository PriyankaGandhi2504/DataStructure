const nodeinput = require("./Node")
const stackinput = require("./StackClass")
const stack = new stackinput.Stack
/*
* Link list Class
*/ class LinkList {
    constructor() {
        this.head = null
        this.size = null
    }

    addElement(data) {
        var node = new nodeinput.Node(data)
        var currentnode; var currentarraynode = []
        if (this.head == null) {
            this.head = node;
        }
        else {
            currentnode = this.head;
            while (currentnode.next !== null && currentnode.next !== undefined) {
                currentnode = currentnode.next;
            }
            currentnode.next = node;
            currentarraynode.push(currentnode.data)
        }
        this.size++;
        return currentarraynode
    }

    removeElement(data) {
        var currentnode = this.head
        var previousnode = null; var temp; var count = 0;
        while (currentnode.next !== null) {
            if (currentnode.data == data) {
                if (previousnode == null) {
                    this.head = currentnode.next
                } else {

                    temp = currentnode.next
                    // console.log("Temp : " + temp);     
                    previousnode.next = temp
                    // return previousnode.data

                }
            } else {
                previousnode = currentnode
                currentnode = currentnode.next
                // this.printListData()
                // return currentnode
            }
            this.size--
            this.printListData()
            // console.log("List Data : " + currentnode.data);
            return currentnode.data
        }
        return -1
    }

    dequeueElement() {
        var currentnode = this.head
        var array = []
        var previousnode = null
        while (currentnode != null) {
            array += currentnode.data
            previousnode = currentnode
            currentnode = currentnode.next
        }
        // console.log("Dequeeu elements: " + array)
        return array
    }


    searchElement(data) {
        var currentnode = this.head
        var previousnode = null
        while (currentnode != null) {
            if (currentnode.data == data) {
                return true
            } else {
                previousnode = currentnode
                currentnode = currentnode.next
            }
        }
        return false
    }

    searchIndex(data) {
        var currentnode = this.head
        var previousnode = null; var counter = 0;
        while (currentnode.next != null) {
            if (currentnode.data == data) {
               counter++
                // console.log("Counter Value: " + counter);
                return this.removeAtIndex(counter)
            } else {
                counter++
                previousnode = currentnode
                currentnode = currentnode.next
            }
        }
        // return counter
    }


    removeAtIndex(indexOfKeyword) {
        // console.log("Index Of keyword: " + indexOfKeyword);
        var currentnode = this.head
        var previousnode = null;
        var count = 0
        // if (previousnode == null) {
        //     this.head = currentnode.next
        // }
        if (currentnode.next != null) {
            for (i = 1; i < indexOfKeyword; i++) {
                // count++
                previousnode = currentnode
                currentnode = currentnode.next
            }
            previousnode.next = currentnode.next
        }
        return currentnode.data


        // while (currentnode !== null) {
        //     if (count == indexOfKeyword) {
        //         if (previousnode == null) {
        //             this.head = currentnode.next
        //         } else {
        //             // temp = currentnode
        //             previousnode.next = currentnode.next
        //             currentnode = currentnode.next
        //             // console.log("Current Data : " + currentnode.data);
        //         }
        //     } else {
        //         count++
        //         previousnode = currentnode
        //         currentnode = currentnode.next
        //         // console.log("Current Data : " + currentnode.data);
        //     }
        //     this.size--
        //     // let printdata = this.printListData()
        //     console.log("List Data : " + currentnode.data);
        //     return currentnode.data
        // }
        // return -1
    }

    addKeyword(data) {
        // console.log("Value : "+ data);
        var node = new nodeinput.Node(data);
        // console.log("Node Value : "+ node.data);
        if (this.head == null) {
            this.head = node;
        } else {
            var traverse = this.head;
            if (this.head.data > node.data) {
                this.head = node;
                node.next = traverse;
            } if (this.head.data < node.data) {
                var temp = this.head;
                while (traverse.next != null) {
                    if (traverse.data < node.data) {
                        temp = traverse;
                    }
                    traverse = traverse.next;
                } if (traverse.data < node.data) {
                    temp = traverse;
                }
                var temp1 = temp.next;
                temp.next = node;
                node.next = temp1;
            }
        }
        // this.printListData()
        // console.log("Added Link List " + traverse.data)
    }

    printListData() {
        var currentnode = this.head
        while (currentnode != null) {
            console.log("Print List Data : " + currentnode.data);
            currentnode = currentnode.next
        }
    }

    enqueue(data, noOfPeople) {
        var rear = -1; var front = -1
        if (front == -1 && rear == -1) {
            front = 0
            rear = 0
        } else {
            rear = rear + 1
        }
        string[rear] = data
        return string[rear]
    }

    pushDataUsingLinkList() {
        var showdata
        var currentnode = this.head
        while (currentnode != null) {
            stack.push(currentnode.data)
            // stack.showReverseData()            
            currentnode = currentnode.next
        }
        stack.showReverseData()
    }


    enqueuePrimeNumber(data) {
        var string = []
        var rear = -1; var front = -1
        if (front == -1 && rear == -1) {
            front = 0
            rear = 0
        } else {
            rear = rear + 1
        }
        string[rear] = data
        console.log("Data On Queue Inserted: " + string[rear]);
        return string[rear]
    }

    pushDataOntoQueueUsingLinkList() {
        var showdata
        var currentnode = this.head
        while (currentnode != null) {
            this.enqueuePrimeNumber(currentnode.data)
            // stack.showReverseData()            
            currentnode = currentnode.next
        }
        // stack.showReverseData() 
    }


    printFileData() {
        var currentnode = this.head
        while (currentnode != null) {
            this.updateDataToFile(currentnode.data)
            // console.log("Print List Data : " + currentnode.data);
            currentnode = currentnode.next
        }
    }


    updateDataToFile() {


        fs.writeFile('InputNumberFile.txt', updateDataToFile, (err) => {
            console.log("Updated File Data : " + updateDataToFile);
        })
    }

}
module.exports = { LinkList }