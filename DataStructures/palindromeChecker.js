/****************************************************************
 * 
 * Execution    :Default node   cmd>node primeChecker.js
 * Purpose      :True or False to show if the string is palindrome or not. 
 * 
 * @description
 * @file        :primeChecker.js
 * @overview    :A palindrome is a string that reads the same forward and backward, for
 *               example, radar, toot, and madam. We would like to construct an algorithm to
 *               input a string of characters and check whether it is a palindrome.
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :02/02/2019
 * 
 ***************************************************************/
var access = require('../UtilProgs/dataStructureUtil');
var read = require('readline-sync');
var deq = new access.DeQueue;
/*
*creates dequeue object
*/
var string = read.question("Enter a string : ");
var output = deq.palindromeChecker(string);
/*
*invoking palindromeChecker function
*/
if(output == false)
{
    /*
    *checks if it is a palindrome or not
    */
    console.log("String is not a palindrome");
    
}
else{
    console.log("String is a palindrome");
    
}