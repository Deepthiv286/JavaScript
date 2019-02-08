/****************************************************************
 * 
 * Execution    :Default node   cmd>node stockReport.js
 * Purpose      :To print the stock report.
 * 
 * @description
 * @file        :stockReport.js
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :07/02/2019
 * 
 ***************************************************************/
var access = require('../UtilProgs/stock');
var read = require('readline-sync');
function stock() {
    try {
        var stocks = read.questionInt("Enter the number of stocks : ");
        for (let i = 0; i < stocks; i++) {
            console.log("Stock " + (i + 1));
            var name = read.question("Enter the share name : ");
            if (!isNaN(name)) {
                /*
                *checks if the name input is a string
                */
                console.log("Enter string only");
                var name = read.question("Enter the share name : ");
            }
            var num = read.questionInt("Enter the number of shares : ");
            var price = read.questionFloat("Enter the share price : ");
            var stock = new access.Stock(name, num, price);
            /*
            *accessing Stock class
            */
            var stockValue = stock.stockValue();
            /*
            *invoking total function from stock class
            */
            console.log("Stock value of " + name + " = " + stockValue);
        }
    } catch (error) {
        console.log(error.message);
    }
}
stock();