class DeQue {
    /*
    *deQueue class with empty arguement constructor
    */
    constructor() {
        this.front = -1;
        this.rear = 0;
        this.size = 30;
        this.arr = new Array(30);
    }
    isFull() {
        /*
        *function to check if the queue is full
        */
        if (this.front == 0 && this.rear == this.size - 1 || (this.rear + 1 == this.front)) {
            return true;
        }
        return false;
    }
    size() {
        /*
        *size function returns the number of items in the deque
        *it needs no parameters and returns an integer
        */
        return this.size;
    }
    isEmpty() {
       /*
        *tests whether the deque is empty
        *it needs no parameters and returns boolean value
        */
       return this.front == -1;
    }
    addFront(item) {
        /*
        *adds new item to the front of deque
        *it needs the item and returns nothing 
        */
        if (this.isFull()) {
            console.log("Queue overflow");
            return;

        }
        if (this.front == -1) {
            this.front = 0;
            this.rear = 0;
        }
        else if (this.front == 0) {
            this.front = this.arr.length - 1;
        }
        else {
            this.front--;
        }
        this.arr[this.front] = item;
    }
    addRear(item) {
        /*
        *adds new item to the rear of deque
        *it needs the item and returns nothing 
        */
        if (this.isFull()) {
            console.log("Queue overflow");
            return;

        }
        if (this.front == -1) {
            this.front = 0;
            this.rear = 0;
        }
        else if (this.front == this.arr.length - 1) {
            this.rear = 0;
        }
        else {
            this.rear++;
        }
        this.arr[this.rear] = item;
    }
    removeFront() {
        /*
        *removes the front item from deque
        *it needs no parameter and returns the item
        */
        if (this.isEmpty()) {
            console.log("Queue underflow");
            return;
        }
        var item;
        if (this.front == this.rear) {
            item = this.arr[this.front];
            this.front = -1;
            this.rear = -1;
        }
        else if (this.front == this.arr.length - 1) {
            item = item.arr[this.front];
            this.front--;
        }
        else {
            item = this.arr[this.front];
            this.front++;
        }
        return item;
    }
    removeRear() {
        /*
        *removes the rear item from deque
        *it needs no parameter and returns the item
        */
        if (this.isEmpty()) {
            console.log("Queue underflow");
            return;
        }
        var item;
        if (this.rear == this.front) {
            item = this.arr[this.rear];
            this.rear = -1;
            this.front = -1;
        }
        else if (this.rear == 0) {
            item = this.arr[this.rear];
            this.rear = this.rear--;
        }
        return item;
    }
    getFront() {
        /*
        *function to get the front items
        */
        if (this.isEmpty()) {
            return -1;
        }
        return this.arr[this.front];
    }
    getRear() {
        /*
        *function to get the rear items
        */
        if (this.isEmpty()) {
            return -1;
        }
        return this.arr[this.rear];
    }
    palindromeChecker(str) {
        /*
        *function to check palindrome of a string
        */
        for (let i = 0; i < str.length; i++) {
            this.addRear(str.charAt(i));
        }
        while (this.front != this.rear && this.front < this.rear) {
            if (this.getFront() != this.getRear()) {
                return false;
            }
            this.front++;
            this.rear--;
        }
        return true;
    }
}
module.exports={DeQue}