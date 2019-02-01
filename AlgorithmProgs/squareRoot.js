/****************************************************************
 * 
 * Execution    :Default node   cmd>node getSquareRoot.js
 * Purpose      : To compute the square root of a non-negative number.
 * 
 * @description
 * @file        :getSquareRoot.js
 * @overview    :Using Newton's method compute the square root of a nonnegative number and display the result.
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :29/01/2019
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
var num = read.question("Enter a non-negative number : ");
access.getSquareRoot(num);
/*
 *invokes getSquareRoot function from utility.js
 */