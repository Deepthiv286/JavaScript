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
        *add function adds new item to the list
        *it needs the item and returns nothing
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
        *remove function removes the item from the list
        *it needs the item and modifies the list
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
        *contain function searches for the item in the list
        *it needs the item and returns boolean value 
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
        *size function returns the number of items in the list
        *it needs no parameters and returns an integer
        */
        return this.size;
    }
    isEmpty() {
        /*
        *tests to see whether the list is empty
        *it needs no parameters and returns boolean value
        */
        if (this.size == 0)
            return true;
        else
            return false;
    }
    indexOf(data) {
        /*
        *indexOf function returns the position of the item in the list
        *it needs the item and returns the index
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
        *addPos function returns position
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
        *inserts data in the list
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
        *inserts data in a particular index(position)
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
    printLL(){
       
        var temp=this.head;
        while(temp){
            var str="";
            str=str+"name: "+temp.data.name+", share:"+temp.data.share+", price: "+temp.data.price;
            console.log(str);
            temp=temp.next
        }
}
}
module.exports = {Node,LinkedList}