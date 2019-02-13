/****************************************************************
 * 
 * Execution    :Default node   cmd>node companyShares.js
 * Purpose      :To create CompanyShares class. 
 * 
 * @description
 * @file        :companyShares.js
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :13/02/2019
 * 
 ***************************************************************/
var read = require("readline-sync");
var file = require("fs");
var access = require("../../Deeps/UtilProgs/linkedList");
list = new access.LinkedList();
class CompanyShares {
    constructor() {
        this.stock = new access.LinkedList();
        try {
            var data = JSON.parse(
                file.readFileSync("/home/admin1/Deeps/ObjectOrientedProgs/Commercial/company.json")
            );
            for (let j = 0; j < data.Company.length; j++) {
                this.stock.add(data.Company[j]);
            }
        } catch (err) {
            console.log("File not found");
        }
    }
    /**
     * addToList to add the info about the company name,share and price
     * using linkedlist and add it to list. 
     */
    addTolist() {
        var flag = false;
        do {
            var name = read.question("Enter the name want to add : ");
            if (!isNaN(name)) {
                console.log("Enter string only ......!");
            } else {
                flag = true;
            }
        } while (!flag);
        var symbol = read.question("Enter the symbol : ");
        while (!isNaN(symbol)) {
            console.log("Enter a proper symbol");
            symbol = read.question("Enter the symbol : ");
        }
        var share = read.questionInt("Enter the share : ");
        while (share < 0) {
            console.log("Enter positive value");
            share = read.questionInt("Enter the share : ");
        }
        var price = read.questionInt("Enter the price : ");
        while (price < 0) {
            console.log("Enter positive value");
            price = read.questionInt("Enter the price : ");
        }
        this.stock.add({
            name: name,
            symbol: symbol,
            share: share,
            price: price
        });
        console.log("Elemets after adding to list : ");
        console.log(this.stock.printLL());
    }
    /**
     * removeFromList to remove the info about the company name,share and price
     * using linkedlist and add it to list. 
     */
    removeFromList() {
        console.log(this.stock.printLL());
        var company = read.question("Enter company name : ");
        this.stock.removeLL(company);
        console.log(this.stock.printLL());
    }
    /**
     * To print all the details of the company using printlist method.
     */
    print() {
        console.log(this.stock.printLL());
    }
}
module.exports = { CompanyShares };