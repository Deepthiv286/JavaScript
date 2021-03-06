/****************************************************************
 * 
 * Execution    :Default node   cmd>node printQuadraticRoots.js
 * Purpose      :To find the roots of x.
 * 
 * @description
 * @file        :printQuadraticRoots.js
 * @overview    :Find the roots of the equation a*x*x + b*x + c and display the roots of x.
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :25/01/2019
 * 
 ***************************************************************/
var access = require('../UtilProgs/functionalUtil');
/*
 *accessing data from utility file
*/
var read = require('readline-sync');
/*
 *accepts userinput
*/
var a = read.questionInt("Enter first number 'a': ");
var b = read.questionInt("Enter second number 'b': ");
var c = read.questionInt("Enter third number 'c': ");
/*
 *invokes printQuadraticRoots function from utility.js
 */
access.printQuadraticRoots(a,b,c);