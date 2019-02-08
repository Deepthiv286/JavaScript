/****************************************************************
 * 
 * Execution    :Default node   cmd>node inventoryManagement.js
 * Purpose      :To create inventory object from JSON. Calculate the value for every inventory.
 * 
 * @description
 * @file        :inventoryManagement.js
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :08/02/2019
 * 
 ***************************************************************/

var util = require('../UtilProgs/inventoryManager');
var read = require('readline-sync');
var fs = require('fs');
var file = fs.readFileSync('stockPortfolio.json', 'utf8');
var data = JSON.parse(file);
/*
*converts text to a javascript object
*/
function inventoryManager() {
    try {
        var object = new util.inventoryManager;
        while (choice != 5) {
            console.log("Press 1 to add :");
            console.log("Press 2 to remove :");
            console.log("Press 3 to edit :");
            console.log("Press 4 to print:");
            console.log("Press 5 to exit :");
            var choice = read.questionInt("Enter the number :");
            switch (choice) {
                case 1:
                    object.add(data);
                    break;
                case 2:
                    object.remove(data);
                    break;
                case 3:
                    object.edit(data);
                    break;
                case 4:
                    object.print(data);
                    break;
                case 5:
                    break;
                default:
                    console.log("Please enter the correct number ");
                    break ;
            }
        }
    }
    catch (err) {
        console.log(err.message);
    }
} inventoryManager();