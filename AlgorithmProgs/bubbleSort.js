/****************************************************************
 * 
 * Execution    :Default node   cmd>node bubbleSort.js
 * Purpose      :To print the sorted list.
 * 
 * @description
 * @file        :bubbleSort.js
 * @overview    :Use bubble sort to sort the words in the string array and prints them in sorted order.
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
var size = read.question("Enter the size of an array : ");
/*
*accepts userinput
*/
access.bubbleSort(size);
/*
 *invokes bubbleSort function from utility.js
 */