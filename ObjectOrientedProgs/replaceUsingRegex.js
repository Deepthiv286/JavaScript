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
regexExpression()
{
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
if (!isNaN(fullName)) {
    console.log("Enter string only");
    fullName = read.question("Enter the full name : ");
}
var mobileNumber = read.questionInt("Enter the mobile number : ");
//var date = read.questionInt("Enter the date : ");
access.replaceUsingRegex(name, fullName, mobileNumber);
/*
*invoking replaceUsingRegex function
*/
}
regexExpression();
