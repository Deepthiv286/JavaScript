/****************************************************************
 * 
 * Execution    :Default node   cmd>node getFewestNotes.js
 * Purpose      : To calculate the minimum number of notes as well as the Notes to be returned by the vending machine as a change.
 * 
 * @description
 * @file        :getFewestNotes.js
 * @overview    :Use recursion and check for largest value of the Note to return change to get to minimum number of Notes.
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
var amount = read.question("Enter the change in Rs : ");
access.getFewestNotes(amount);
/*
 *invokes getFewestNotes function from utility.js
 */

