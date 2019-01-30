/****************************************************************
 * 
 * Execution    :Default node   cmd>node insertionSort.js
 * Purpose      :To print the sorted list.
 * 
 * @description
 * @file        :insertionSort.js
 * @overview    :Use insertion sort to sort the words in the string array and prints them in sorted order.
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :28/01/2019
 * 
 ***************************************************************/
var access = require('../UtilProgs/utility');
/*
 *accessing data from utility file
*/
var read = require('readline-sync');
var size = read.question("Enter the size of an array : ");
/*
*accepts userinput
*/
access.insertionSort(size);
/*
 *invokes insertionSort function from utility.js
 */