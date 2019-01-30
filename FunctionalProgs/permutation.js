/****************************************************************
 * 
 * Execution    :Default node   cmd>node permutation.js
 * Purpose      :To 
 * 
 * @description
 * @file        :permutation.js
 * @overview    :
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :26/01/2019
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

var str = read.question("Enter a string to be permuted : ");

/*
 *invokes permutation function from utility.js
 */
var result = access.permutation("",str);
console.log(result);
