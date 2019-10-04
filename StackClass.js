class Stack {
    constructor() {
        this.top = 0;
        this.array = [];
    }

    size() {
        return this.top
    }

    push(data) {
        var size = ++this.top;
        this.array[size] = data;
    }

    pop() {
        var size = this.top;
        var deletedData;

        if (size) {
            deletedData = this.array[size];
            this.top--;

            return this.array.pop()
        }
    }

    isEmpty() {
        return this.top = 0;
    }

    show() {
        for (var i = 0; i <= this.top; i++) {
            console.log("Data On stack : " + this.array[i] + " ");
        }
        console.log();
    }

    showReverseData(){
        var display = []
        for (var i = this.top; i > 0 ; i--) {
            display.push(this.array[i])
        }
        console.log("Data on Stack in reverse order : " + display);
        console.log()
    }

    peek() {
        if (this.top === -1) {
            console.log("Stack is empty");
        } else {
            return this.array[this.array.length - 1]
        }
    }
}
module.exports = { Stack }

// var stack = new Stack();
// stack.push(5)
// stack.push(15)
// stack.push(51)
// stack.push(45)
// stack.push(25)
// stack.push(54)

// stack.show()
// stack.pop()
// stack.show()
