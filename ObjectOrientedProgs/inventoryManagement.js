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
/***** Inventory Management *****/
/*
 *4.Inventory Management
 *
 *@purpose: To create inventory object from JSON. Calculate the value for every inventory.
 *@param: Pass N number of stocks, for each stock read in the share name, number of
 *        share, and share price.
 *@function: Create InventoryManager to manage the inventory. The inventory manager will use inventoryfactory to create inventory
 *           object from JSON. The inventorymanager will call each inventory object in its list
 *           to calculate the inventory price and then call the inventory object to return the JSON string.
 * 
*/
var fs = require('fs');
var file = fs.readFileSync('stockPortfolio.json', 'utf8');
var data = JSON.parse(file);
/*
*converts text to a javascript object
*/
function inventoryManager() {
    try {
        var object = new util.inventoryManager;
        /*
        *creating inventoryManager object
        */
        while (choice != 4) {
            console.log("Press 1 to add : ");
            console.log("Press 2 to remove : ");
            console.log("Press 3 to print : ");
            console.log("Press 4 to exit : ");
            /*
            *creating console based menu
            */
            var choice = read.questionInt("Enter the number : ");
            switch (choice) {
                /*
                *accessing the functions from inventoryManager class
                */
                case 1:
                    object.add(data);
                    break;
                case 2:
                    object.remove(data);
                    break;
                case 3:
                    object.print(data);
                    break;
                case 4:
                    console.log("Exiting.....");
                    break;
                default:
                    console.log("Enter numbers within 1-4");
                    break;
            }
        }
    }
    catch (err) {
        console.log(err.message);
    }
} inventoryManager();