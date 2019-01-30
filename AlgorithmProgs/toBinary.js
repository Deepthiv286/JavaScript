/****************************************************************
 * 
 * Execution    :Default node   cmd>node toBinary.js
 * Purpose      : To 
 * 
 * @description
 * @file        :toBinary.js
 * @overview    :
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :29/01/2019
 * 
 ***************************************************************/
var access = require('../UtilProgs/utility');
/*
 *accessing data from utility file
*/
var read = require('readline-sync');
/*
*accepts userinput
*/

var num = read.question("Enter a number to convert to binary : ");
var result = access.toBinary(num);
/*
 *invokes toBinary function from utility.js
 */
console.log(result);