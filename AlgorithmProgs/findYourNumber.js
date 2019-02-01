/****************************************************************
 * 
 * Execution    :Default node   cmd>node findYourNumber.js
 * Purpose      :To print the intermediary number and the final answer.
 * 
 * @description
 * @file        :findYourNumber.js
 * @overview    :Use binary search to find the number.Recursively ask true/false if the number is between a high and low value.
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :28/01/2019
 * 
 ***************************************************************/
var access = require('../UtilProgs/algoUtil');
/*
 *accessing data from utility file
*/
var read = require('readline-sync');
/*
 *accepts userinput
*/
var num = process.argv[2];
/*
 *invokes findYourNumber function from utility.js
 */
var result = access.findYourNumber(0,num-1,read);
console.log(result);
