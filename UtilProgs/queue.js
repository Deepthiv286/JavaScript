class Queue {
    /*
    *Queue class with an empty arguement constructor
    */
    constructor() {
        this.item = [];
    }
    enqueue(data) {
        /*
        *enqueue function adds new item to the rear of the queue
        *it needs the item and returns nothing
        */
        this.item.push(data);
    }
    dequeue() {
        /*
        *dequeue function removes front item from the queue
        *it needs no parameter and returns the item
        */
        if (this.isEmpty())
            return "Underflow";

        return this.item.shift();
    }
    size() {
        /*
        *size function returns the number of items in the queue
        *it needs no parameters and returns an integer
        */
        return this.size;
    }
    isEmpty() {
       /*
        *tests whether the queue is empty
        *it needs no parameters and returns boolean value
        */
        return this.item.length == 0;
    }
    print() {
        /*
        *prints the items in the queue
        */
        var str = "";
        for (let i = 0; i < this.item.length; i++) {
            str += this.item[i] + " ";
            return str;
        }
    }
}
class QueueLinkedList {
    /*
    *Queuelinkedlist class with an empty arguement constructor
    */
    constructor() {
        this.head = null;
        this.tail = null;
    }
    enqueue(item) {
        /*
        *creates a new node and adds item to the node
        */
        var node = new Node(item);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
    }
    dequeue() {
        /*
        *pops the data from the node
        */
        if (!this.head) {
            return "no item";
        }
        else {
            var itemPop = this.head;
            this.head = this.head.next;
            return itemPop.data;
        }
    }
    isEmpty() {
        /*
        *if the length of queue is 0 that means the queue is empty
        */
        return this.size() < 1;
    }
    size() {
        /*
        *size function returns the number of items in the queue
        */
        var curr = this.head;
        var count = 0;
        while (curr) {
            count++;
            curr = curr.next;
        }
        return count;
    }
    print() {
        /*
        *prints the data 
        */
        var str = "";
        var temp = this.head;
        while (temp) {
            str = str + " " + temp.data;
            temp = temp.next;
        }
        return str;

    }
}
module.exports = {Queue,QueueLinkedList}