/****************************************************************
 * 
 * Execution    :Default node   cmd>node getHarmonicValue.js
 * Purpose      :To accept harmonic value N and print the Nth harmonic number.
 * 
 * @description
 * @file        :getHarmonicValue.js
 * @overview    :With the harmonic value N compute 1/1 + 1/2 + 1/3 + ... + 1/N and print the Nth harmonic value.
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
var num = read.questionInt("Enter a number for nth harmonic value : ");
/*
 *invokes getHarmonicValue function from utility.js
 */
access.getHarmonicValue(num);