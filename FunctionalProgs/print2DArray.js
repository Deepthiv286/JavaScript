/****************************************************************
 * 
 * Execution    :Default node   cmd>node print2DArray.js
 * Purpose      :To print 2 dimensional array.
 * 
 * @description
 * @file        :print2DArray.js
 * @overview    :create 2 dimensional array in memory to read in M rows and N cols and print the output to the screen.
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :25/01/2019
 * 
 ***************************************************************/
var access = require('../UtilProgs/utility');
/*
 *accessing data from utility file
*/
var read = require('readline-sync');
var row = read.question("Enter the number of rows : ");
var col = read.question("Enter the number of columns : ");
/*
*accepts userinput
*/
access.print2DArray(row,col,read);
/*
 *invokes print2DArray function from utility.js
 */