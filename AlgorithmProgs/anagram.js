/****************************************************************
 * 
 * Execution    :Default node   cmd>node anagram.js
 * Purpose      :To determine two strings are anagram or not.
 * 
 * @description
 * @file        :anagram.js
 * @overview    :Check whether two strings are anagram or not.
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :27/01/2019
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
var string1 = read.question("Enter a string : ");
var string2 = read.question("Enter another string : ");
/*
 *invokes anagram function from utility.js
 */
access.anagram(string1,string2);