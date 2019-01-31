/****************************************************************
 * 
 * Execution    :Default node   cmd>node getPermutation.js
 * Purpose      :To return all permutation of a string.
 * 
 * @description
 * @file        :getPermutation.js
 * @overview    :Returns all permutation of a string.
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
 *invokes getPermutation function from utility.js
 */
var result = access.getPermutation(str);
console.log(result);

