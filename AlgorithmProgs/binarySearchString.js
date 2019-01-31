/****************************************************************
 * 
 * Execution    :Default node   cmd>node binarySearchString.js
 * Purpose      : To perform binary search for a string.
 * 
 * @description
 * @file        :binarySearchString.js
 * @overview    :Performs binary search for a string.
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
var arr = [];
var size = read.question("Enter the size of an array : ");
for(let i=0;i<size;i++)
{
    arr[i] = read.question("Enter the string array elements : ");
}
var string = read.question("Enter a string to search : ");
var result = access.binarySearchString(arr,string);
/*
 *invokes binarySearchString function from utility.js
 */
console.log(result);
