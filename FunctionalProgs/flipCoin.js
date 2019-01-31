/****************************************************************
 * 
 * Execution    :Default node   cmd>node flipCoin.js
 * Purpose      :Using random function generate random value and print
 *               the percentage of head and tail.
 * 
 * @description
 * @file        :flipCoin.js
 * @overview    :Flip a coin n number of times, check if random value is <0.5 and print percentage of heads and tails.
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
var flips = read.questionInt("Enter the number of flips of a coin: ");
/*
 *invokes flipCoin function from utility.js
 */
access.flipCoin(flips);