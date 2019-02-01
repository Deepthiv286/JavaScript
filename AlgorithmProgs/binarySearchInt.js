/****************************************************************
 * 
 * Execution    :Default node   cmd>node binarySearchInt.js
 * Purpose      : To perform binary search for a number.
 * 
 * @description
 * @file        :binarySearchInt.js
 * @overview    :Performs binary search for a number.
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
var arr = [];
var size = read.questionInt("Enter the size of an array : ");
for(let i=0;i<size;i++)
{
    arr[i] = read.questionInt("Enter the array elements : ");
}
var searchInt= read.questionInt("Enter an int value to search : ");
var result = access.binarySearchInt(arr,searchInt);
/*
 *invokes binarySearchInt function from utility.js
 */
console.log(result);