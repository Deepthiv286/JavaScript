/****************************************************************
 * 
 * Execution    :Default node   cmd>node oopUtil.js
 * Purpose      :To deploy all the business logic
 * 
 * @description
 * @file        :oopUtil.js
 * @overview    :All functions with business logic are coded here
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :07/02/2019
 * 
 ***************************************************************/
const read = require('readline-sync');
/*
*accepts userinput
*/
module.exports = {
    /***** JSON Inventory Data Management *****/
    /*
     *1. JSON Inventory Data Management
     *
     * @purpose: To create the JSON from inventory object and output the JSON string.
     * @param: Pass the inventory details as arguements to the function.
     * @function: Create a JSON file having inventory details for rice, pulses and wheats
     *            with properties name, weight, price per kg.
     * 
    */
    inventory(object) {
        var rice = object.Rice;
        var pulses = object.Pulses;
        var wheat = object.Wheat;
        console.log("Rice");
        for (let key in rice) {
            console.log("Cost of " + rice[key].name + " for " + rice[key].weight + "kg = " + rice[key].weight * rice[key].price + "/-");
        }
        console.log("Pulses");
        for (let key in pulses) {
            console.log("Cost of " + pulses[key].name + " for " + pulses[key].weight + "kg = " + pulses[key].weight * pulses[key].price + "/-");
        }
        console.log("Wheat");
        for (let key in wheat) {
            console.log("Cost of " + wheat[key].name + " for " + wheat[key].weight + "kg = " + wheat[key].weight * wheat[key].price + "/-");
        }
    },

    /***** Regular Expression Demonstration *****/
    /*
     *2. Regular Expression Demonstration
     *
     * @purpose: To print the modified message.
     * @param: Pass the contents to replace message as arguement to the function.
     * @function: Read in the following message: Hello <<name>>, We have your full
     *            name as <<full name>> in our system. your contact number is 91­xxxxxxxxxx.
     *            Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016.
     *            Use Regex to replace name, full name, Mobile#, and Date with proper value.
     * 
    */
    replaceUsingRegex(name, fullName, mobileNumber) {
        var fs = require('fs');
        var string = fs.readFileSync('regexFile.txt', 'utf8');
        string = string.replace(/<<name>>/g, name);
        string = string.replace(/<<full name>>/g, fullName);
        string = string.replace(/<<xxxxxxxxxx>>/g, mobileNumber);
        var day = new Date();
        date = day.toDateString();
        string = string.replace(/01.01.2016/g, date);
        console.log(string);

    },

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
    inventoryManager(object) {
        var stock = object.Stock;
        for(let key in stock)
        {
            console.log("Stock value of = "+stock[key].name);
            var total = stock[key].numberOfShares*stock[key].sharePrice;
            console.log(total);
            var sum = 0;
            sum += total;
        }
        console.log("Total value of stocks = "+sum); 
    }

}
