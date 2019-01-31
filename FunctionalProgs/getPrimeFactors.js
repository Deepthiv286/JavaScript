/****************************************************************
 * 
 * Execution    :Default node   cmd>node getPrimeFactors.js
 * Purpose      :To compute the prime factorization of N using brute force and print the prime factors of number N.
 * 
 * @description
 * @file        :getPrimeFactors.js
 * @overview    :With the given number traverse till i*i <= N and print the prime factors of number N.
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
var num = read.questionInt("Enter a number for prime factorization : ");
/*
 *invokes getPrimeFactors function from utility.js
 */
access.getPrimeFactors(num);