var methods = {}

// methods.Queue = function(){
//     constructor() {
//         this.front = -1;
//         this.rear = -1;
//         this.arr = [];
//         this.size = 0;
//     }
// }

    methods.enqueue = function(data) {
        this.rear++
        this.arr[this.rear] = data;
        this.size++;
        return this.arr[this.rear]
    }

    methods.dequeue = function() {

        var deletedData = this.arr[this.front];
        delete this.arr[this.front];
        this.front++;
        this.size--;
        return deletedData;
    }

    methods.show = function() {
        for (var i = 0; i < this.size; i++) {
            console.log(this.arr[this.front + i] + " ");
        }
        console.log();
    }
exports.data = methods