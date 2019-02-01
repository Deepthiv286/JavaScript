/****************************************************************
 * 
 * Execution    :Default node   cmd>node mergeSort.js
 * Purpose      : To do merge sort of list of strings. 
 * 
 * @description
 * @file        :mergeSort.js
 * @overview    :To merge sort an array, we divide it into two halves, sort the two halves
 *               independently, and then merge the results to sort the full array.
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
var num = read.question("Enter the size of an array : ");
var arr = [];
while(num!=arr.length)
{
    var number = read.question("Enter the array elements : ");
    arr.push(number);
}
/*
 *invokes mergeSort function from utility.js
 */
access.mergeSort(arr);
console.log(arr);
    


