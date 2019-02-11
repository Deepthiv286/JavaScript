
class Node {
    /*
    *node class with a parameterized constructor
    */
    constructor(data) {
        this.data = data;
        this.next = null;
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
        *size function returns the number of items on the stack
        *it needs no parameters and returns an integer
        */
        return this.size;
    }
    isEmpty() {
        /*
        *tests whether the stack is empty
        *it needs no parameters and returns boolean value
        */
        if (this.size == 0)
            return true;
        else
            return false;
    }
    push(data) {
        /*
        *push function adds new item to the top of the stack
        *it needs the item and returns nothing
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
        *pop function removes the top item from the stack
        *it needs no parameter and returns the item
        */
        if (this.top == this.capacity - 1)
            console.log("Stack is empty");
        this.size--;
        return this.item.pop();
    }
    peek() {
        /*
        *function to return the top item from the stack
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
module.exports = {Node,Stack,StackLinkedList}