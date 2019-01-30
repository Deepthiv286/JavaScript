/****************************************************************
 * 
 * Execution    :Default node   cmd>node isLeapYear.js
 * Purpose      :To accept year as userinput and print the year is a Leap Year or not.
 * 
 * @description
 * @file        :isLeapYear.js
 * @overview    :With the 4 digit year determine if it is a Leap Year and print the year is a Leap Year or not.
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
var year=read.question("Enter a year to check it is a leapyear or not : ");
/*
 *invokes isLeapYear function from utility.js
 */
access.isLeapYear(year);