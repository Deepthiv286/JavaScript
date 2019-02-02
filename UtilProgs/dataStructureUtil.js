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
const readline = require('readline-sync');
/*
 *accepts userinput
*/
var utility = require('../UtilProgs/utility');
class Node {

    constructor(data) {
        this.data = data;
        this.next = null;
    }

}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(data) {
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
        if(this.head == null)
        {
            console.log("List is empty");   
        }
        else{
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
    size()
    {
        return this.size;
    }
    isEmpty() {
        if (this.size == 0)
            return true;
        else
            return false;
    }
    indexOf(data) {
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
    addPos(arr,num)
    {
        console.log(num);
        for(let i=0;i<arr.length-1;i++)
        {
            if(arr[0]>=num)
            return 0;
        else if(arr[i]<num && arr[i+1]>num)
        {
            return i+1;
        }
    }
    return arr.length;
        
    }
    insert(data)
    {
        var n = new Node(data);
        if(this.head == null)
        {
            this.head = n;
            this.size++;
            return;
        }
        else
        {
            n.next = this.head;
            this.head = n;
            this.size++;
            return;
        }
    }
    insertAt(data,index)
    {
        if(index>0 && index>this.size)
        {
            return false;
        }
        else{
            var node = new Node(data);
            var current,prev;
            current= this.head;
            if(index == 0)
            {
                node.next = head;
                this.head = node;
            }
            else
            {
                current = this.head;
                var temp = 0;
                while(temp<index)
                {
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
    constructor() {
        this.item = [];
        this.capacity;
        this.top = -1;
        this.size = 0;
    }
    size() {
        return this.size;
    }
    isEmpty() {
        if (this.size == 0)
            return true;
        else
            return false;
    }
    push(data) {
        if(this.top == this.capacity -1)
        {
            console.log("Stack overflow");
            return;
        }
        this.size++;
        this.item[++this.top] = data;
    }
    pop() {
        if(this.top == this.capacity -1)
        console.log("Stack is empty");
        this.size--;
        return this.item.pop();
    }
    peek() {
        if(this.top == -1)
        console.log("Stack is empty");
        else
        return this.item[top];
    }
    print() {
        var str = "";
        for(let i=0;i<this.size;i++)
        {
            str = str+" "+item[i];
            return str;
        }
    }
}

class Queue
{
    constructor()
    {
        this.item = [];
    }
    enqueue(data)
    {
        this.itemm.push(data);
    }
    dequeue()
    {
        if(this.isEmpty)
        return "Underflow";
        return this.item.shift();
    }
    isEmpty()
    {
        return this.item.length == 0;
    }
    printList()
    {
        var str = "";
        for(let i=0;i<this.item.length;i++)
        {
            str += this.item[i]+" ";
            return str;
        }
    }
}

class DeQueue
{
    constructor()
    {
        this.front = -1;
        this.rear  = 0;
        this.size = 30;
        this.arr = new Array(30);
    }
    isFull()
    {
        if(this.front == 0 && this.rear == this.size-1 || (this.rear+1 == this.front))
        {
            return true;
        }
        return false;
    }
    isEmpty()
    {
        return this.front == -1;
    }
    addFront(item)
    {
        if(this.isFull())
        {
            console.log("Queue overflow");
            return;
            
        }
        if(this.front == -1)
        {
            this.front = 0;
            this.rear = 0;
        }
        else if(this.front == 0)
        {
            this.front = this.arr.length-1;
        }
        else{
            this.front--;
        }
        this.arr[this.front] = item;
    }
    addRear(item)
    {
        if(this.isFull())
        {
            console.log("Queue overflow");
            return;
            
        }
        if(this.front == -1)
        {
            this.front = 0;
            this.rear = 0;
        }
        else if(this.front == this.arr.length-1)
        {
            this.rear = 0;
        }
        else{
            this.rear++;
        }
        this.arr[this.rear] = item;
    }
    removeFront()
    {
        if(this.isEmpty())
        {
        console.log("Queue underflow");
        return;
        }
        var item;
        if(this.front == this.rear)
        {
            item = this.arr[this.front];
            this.front = -1;
            this.rear = -1;
        }
        else if(this.front == this.arr.length-1)
        {
            item = item.arr[this.front];
            this.front--;
        }
        else{
            item = this.arr[this.front];
            this.front++;
        }
        return item;
    }
    removeRear()
    {
        if(this.isEmpty())
        {
            console.log("Queue underflow");
            return;
        }
        var item;
        if(this.rear == this.front)
        {
            item = this.arr[this.rear];
            this.rear = -1;
            this.front = -1;
        }
        else if(this.rear == 0)
        {
            item = this.arr[this.rear];
            this.rear = this.rear--;
        }
        return item;
    }
    getFront()
    {
        if(this.isEmpty())
        {
            return -1;
        }
        return this.arr[this.front];
    }
    getRear()
    {
        if(this.isEmpty())
        {
            return -1;
        }
        return this.arr[this.rear];
    }
    palindromeChecker(str)
    {
        for(let i=0;i<str.length;i++)
        {
            this.addRear(str.charAt(i));
        }
        while(this.front != this.rear && this.front<this.rear)
        {
            if(this.getFront() != this.getRear())
            {
                return false;
            }
            this.front++;
            this.rear--;
        }
        return true;
    }
}

module.exports = { LinkedList, Node, Stack,Queue,DeQueue }


