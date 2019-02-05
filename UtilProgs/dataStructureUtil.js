/****************************************************************
 * 
 * Execution    :Default node   cmd>node dataStructuresUtil.js
 * Purpose      :To deploy all the business logic
 * 
 * @description
 * @file        :dataStructuresUtil.js
 * @overview    :All functions with business logic are coded here
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :31/01/2019
 * 
 ***************************************************************/

class Node {
    /*
    *node class with a parameterized constructor
    */
    constructor(data) {
        this.data = data;
        this.next = null;
    }

}
class LinkedList {
    /*
    *linked list class with an empty arguement constructor
    */
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(data) {
        /*
        *add function takes data as parameter and adds it to the node
        */
        var node = new Node(data);
        if (this.head == null)
            this.head = node;
        else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    remove(data) {
        /*
        *remove function takes data as parameter and removes it from the node
        */
        var current = this.head;
        var prev = null;
        while (current != null) {
            if (current.data == data) {
                if (prev == null)
                    this.head = current.next;
                else
                    prev.next = current.next;

                this.size--;
                return current.data;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }
    contain(data1) {
        /*
        *contain function takes data as parameter and searches if it exists in the node 
        */
        if (this.head == null) {
            console.log("List is empty");
        }
        else {
            var temp = this.head;
            while (temp) {
                if (temp.data == data1) {
                    return true;
                }
                else
                    temp = temp.next;
            }
            return false;
        }
    }
    size() {
        /*
        *size function returns the number of elements in the list
        */
        return this.size;
    }
    isEmpty() {
        /*
        *if size is 0 that means the list is empty
        */
        if (this.size == 0)
            return true;
        else
            return false;
    }
    indexOf(data) {
        /*
        *indexOf function searches for a data and returns the index in which it is found
        */
        var count = 0;
        var current = this.head;
        while (current != null) {
            if (current.data == data)
                return count;
            count++;
            current = current.next;
        }
        return false;
    }
    addPos(arr, num) {
        /*
        *addPos function adds numbers in those positions
        */
        console.log(num);
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[0] >= num)
                return 0;
            else if (arr[i] < num && arr[i + 1] > num) {
                return i + 1;
            }
        }
        return arr.length;

    }
    insert(data) {
        /*
        *inserts data in a node
        */
        var n = new Node(data);
        if (this.head == null) {
            this.head = n;
            this.size++;
            return;
        }
        else {
            n.next = this.head;
            this.head = n;
            this.size++;
            return;
        }
    }
    insertAt(data, index) {
        /*
        *inserts data in a particular index
        */
        if (index > 0 && index > this.size) {
            return false;
        }
        else {
            var node = new Node(data);
            var current, prev;
            current = this.head;
            if (index == 0) {
                node.next = head;
                this.head = node;
            }
            else {
                current = this.head;
                var temp = 0;
                while (temp < index) {
                    temp++;
                    prev = current;
                    current = current.next;
                }
                node.next = current;
                prev.next = node;
            }
            this.size++;
        }
    }
    print() {
        /*
        *function to print the list
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

class Stack {
    /*
    *Stack class with an empty arguement constructor
    */
    constructor() {
        this.item = [];
        this.capacity;
        this.top = -1;
        this.size = 0;
    }
    size() {
        /*
        *size function returns the number of elements in the stack
        */
        return this.size;
    }
    isEmpty() {
        /*
        *if size is 0 that means the stack is empty
        */
        if (this.size == 0)
            return true;
        else
            return false;
    }
    push(data) {
        /*
        *push function pushes the data to the stack
        */
        if (this.top == this.capacity - 1) {
            console.log("Stack overflow");
            return;
        }
        this.size++;
        this.item[++this.top] = data;
    }
    pop() {
        /*
        *pop function pops the data from the stack
        */
        if (this.top == this.capacity - 1)
            console.log("Stack is empty");
        this.size--;
        return this.item.pop();
    }
    peek() {
        /*
        *function to take a peek in the stack
        */
        if (this.top == -1)
            console.log("Stack is empty");
        else
            return this.item[top];
    }
    print() {
        /*
        *function to print the contents from the stack
        */
        var str = "";
        for (let i = 0; i < this.size; i++) {
            str = str + " " + item[i];
            return str;
        }
    }
}
class StackLinkedList {
    /*
    *Stacklinkedlist class with an empty arguement constructor
    */
    constructor() {
        this.head = null;
        this.size = 0;
    }
    push(data) {
        /*
        *push function pushes the data to the stack
        */
        var node = new Node(data);
        if (this.head == null) {
            this.head = node;
            this.size++;
        }
        else {
            var temp = this.head;
            while (temp.next) {
                temp = temp.next;
            }
            temp.next = node;
            this.size++;
        }
    }
    peek() {

        // check for empty stack 
        if (!isEmpty()) {
            return high.data;
        }
        else {
            console.log("Stack is empty");
            return -1;
        }
    }
    size() {
        /*
        *size function returns the number of elements in the stack
        */
        return this.size;
    }
    isEmpty() {
        /*
        *if size is 0 that means the stack is empty
        */
        if (this.size == 0)
            return true;
        else
            return false;
    }
    pop() // remove at the beginning 
    {
        // check for stack underflow 
        if (this.head == null) {
            console.log("\nStack Underflow");
            return null;
        }
        var curr = this.head;
        var prev = this.head;
        if (curr.next == null) {
            this.head = null;
            return curr.data;
        }
        while (curr.next) {
            prev = curr;
            curr = curr.next;
        }
        var data = curr.data;
        prev.next = null;
        this.size--;
        return data;
    }
    print() {
        /*
        *function to print the contents from the stacklinkedlist
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

class Queue {
    /*
    *Queue class with an empty arguement constructor
    */
    constructor() {
        this.item = [];
    }
    enqueue(data) {
        /*
        *enqueue function pushes the data to the item array
        */
        this.item.push(data);
    }
    dequeue() {
        /*
        *dequeue function sends the data out from the item array
        */
        if (this.isEmpty())
            return "Underflow";

        return this.item.shift();
    }
    isEmpty() {
        /*
        *if the length of item array is 0 that means the queue is empty
        */
        return this.item.length == 0;
    }
    print() {
        /*
        *prints the data in the item array
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

class DeQueue {
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
    isEmpty() {
        /*
        *function to check if the queue is empty
        */
        return this.front == -1;
    }
    addFront(item) {
        /*
        *function to add items in the front
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
        *function to add items in the rear
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
        *function to remove items in the front
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
        *function to remove items in the rear
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
        *function to get the front elements
        */
        if (this.isEmpty()) {
            return -1;
        }
        return this.arr[this.front];
    }
    getRear() {
        /*
        *function to get the rear elements
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
var util = require('../UtilProgs/algoUtil');
module.exports = {
    LinkedList, Node, Stack, Queue, DeQueue, StackLinkedList, QueueLinkedList,

    binaryTree(num) {
        /*
        *function to generate binary tree
        */
        try {
            var fact = 1;
            for (let i = 1; i <= num; i++) {
                fact = fact * i;
            }
            return fact;
        } catch (error) {
            console.log(error.message);
        }
    },

    day(month, day, year) {
        /*
        *function to calculate the day
        */
        try {
            var y = year - Math.floor((14 - month) / 12);
            var x = y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400);
            var m = month + 12 * Math.floor((14 - month) / 12) - 2;
            var d = (day + x + Math.floor((31 * m) / 12)) % 7;
            return d;
        } catch (error) {
            console.log(error.message);
        }
    },


    isLeapYear(year) {
        /*
        *function to check if its a leap year
        */
        try {
            if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
                return true;
            else
                return false;
        } catch (error) {
            console.log(error.message);
        }
    },
    months(month) {
        try {
        /*
        *switch case for the number of months
        */
            switch (month) {
                case 1: return 31;
                    break;
                case 2: return 28;
                    break;
                case 3: return 31;
                    break;
                case 4: return 30;
                    break;
                case 5: return 31;
                    break;
                case 6: return 30;
                    break;
                case 7: return 31;
                    break;
                case 8: return 31;
                    break;
                case 9: return 30;
                    break;
                case 10: return 31;
                    break;
                case 11: return 30;
                    break;
                case 12: return 31;
                    break;
            }
        } catch (error) {
            console.log(error.message);
        }
    },

    /*
    *function to print numbers that are prime and anagram in a 2D array
    */
    dArray() {
        try {
        var arr = [];
        var arr1 = [];
        var array = [["0-100 "], ["100-200 "], ["200-300 "], ["300-400 "], ["400-500 "], ["500-600 "], ["600-700 "], ["700-800 "], ["800-900 "], ["900-1000 "]];
        for (let i = 2; i < 1000; i++) {
            if (util.isPrime(i)) {
                arr.push(i);
                /*
                *adds prime numbers to the array
                */
            }
        }
        var range = 100, k = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (util.anagram(arr[i], arr[j])) {
                    if (arr[i] <= range) {
                        if (arr[j] <= range) {
                            array[k].push(arr[i]);
                            /*
                            *checks if the prime number is an anagram and adds to the array
                            */
                            arr1.push(arr[i])
                            arr1.push(arr[j])
                            array[k].push(arr[j]);
                        }
                    } else {
                        range = range + 100;
                        k++;
                        if (arr[j] <= range) {
                            array[k].push(arr[i]);
                            array[k].push(arr[j]);
                        }
                    }
                }
            }
        }
        console.log("Numbers which are prime and anagram ");
        var req = require('util')
        for (let i = 0; i < array.length; i++) {
            /*
            *loop to print the numbers that are prime and anagram
            */
            for (let j = 0; j < array[i].length; j++) {
                req.print(array[i][j]);
                if (j == 0) {
                    req.print(" => ");
                } else {
                    if (j != array[i].length - 1)
                        req.print(",")
                }
            }
            console.log();
        }
        return arr1;
        } catch (error) {
            console.log(error.message);   
        }
    },



}


