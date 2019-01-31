/****************************************************************
 * 
 * Execution    :Default node   cmd>node getStringReplace.js
 * Purpose      :To take username as input.Replace <<UserName>> with the proper name and print the string with username.
 * 
 * @description
 * @file        :getStringReplace.js
 * @overview    :With the given input ensure UserName has minimum 3 characters.Replace <<UserName>> with the proper name and print the string with username.
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :24/01/2019
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
var username = read.question("Enter your name to replace username : ");
/*
 *invokes getStringReplace function from utility.js
 */
access.getStringReplace(username);