/****************************************************************
 * 
 * Execution    :Default node   cmd>node companySharesStack.js
 * Purpose      :To create CompanyShares class with stack using linked list. 
 * 
 * @description
 * @file        :companySharesStack.js
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :13/02/2019
 * 
 ***************************************************************/
var read = require("readline-sync");
var file = require("fs");
var access = require("../UtilProgs/stack");
class CompanySharesStack {
    constructor() {
        this.stock = new access.StackLinkedList;
        try {
            var data = JSON.parse(
                file.readFileSync("/home/admin1/Deeps/ObjectOrientedProgs/Commercial/company.json"))
            for (let j = 0; j < data.Company.length; j++) {
                this.stock.push(data.Company[j]);
            }
        } catch (err) {
            console.log("File not found");
        }
    }
    /**
     * addToStack to add the info about the company name,share and price
     * using stack implemented using linkedlist and push it to stack. 
     */
    addToStack() {
        var flag = false;
        /**
         * validation
         */
        do {
            var name = read.question("Enter the name want to add : ");
            if (!isNaN(name)) {
                console.log("Please enter alphabetics only ......!");
            } else {
                flag = true;
            }
        } while (!flag);
        var share = read.questionInt("Enter the share :");
        var price = read.questionInt("Enter the price :");
        this.stock.push({
            name: name,
            share: share,
            price: price
        });
        console.log("Elemets after adding to list :");
        console.log(this.stock.printSLL());
    }
    /**
     * removeFromStack to remove the info about the company name,share and price
     * using stack implemented using linkedlist and push it to stack. 
     */
    removeFromStack() {
        console.log(this.stock.printSLL());
        var company = read.question("Enter company name: ");
        this.stock.pop(company);
        console.log(this.stock.printSLL());
    }
    /**
     * To print all the details of the company using printlist method.
     */
    print() {
        console.log(this.stock.printSLL());
    }
}
module.exports = { CompanySharesStack }