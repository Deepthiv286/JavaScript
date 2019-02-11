/****************************************************************
 * 
 * Execution    :Default node   cmd>node replaceUsingRegex.js
 * Purpose      :To print the modified message.
 * 
 * @description
 * @file        :replaceUsingRegex.js
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :07/02/2019
 * 
 ***************************************************************/
var access = require('../UtilProgs/oopUtil');
var read = require('readline-sync');
function regexExpression() {
    try {
        //var format = /[a-zA-Z]/;
        var name = read.question("Enter the name : ");
        /*
        *checks if the input is in the format
        */
        if (!isNaN(name)) {
            console.log("Enter string only");
            name = read.question("Enter the name : ");
        }
        var fullName = read.question("Enter the full name : ");
        /*
        *checks if the input is in the format
        */
        if (!isNaN(fullName)) {
            console.log("Enter string only");
            fullName = read.question("Enter the full name : ");
        }
        var mobileNumber = read.question("Enter the mobile number : ");
        if(isNaN(mobileNumber) || mobileNumber.length != 10)
        {
            console.log("Enter 10 digit numbers only");
            mobileNumber = read.question("Enter the mobile number : ");
        }
        access.replaceUsingRegex(name, fullName, mobileNumber);
        /*
        *invoking replaceUsingRegex function
        */

    } catch (error) {
        console.log(error.message);
    }
}
regexExpression();

