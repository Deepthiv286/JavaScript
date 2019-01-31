/****************************************************************
 * 
 * Execution    :Default node   cmd>node playGambling.js
 * Purpose      :To print the number of wins and percentage of win and loss.
 * 
 * @description
 * @file        :playGambling.js
 * @overview    :Displays number of wins and percentage of win and loss.
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :25/01/2019
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
var stake = read.questionInt("Enter stake amount : ");
var goal = read.questionInt("Enter goal amount : ");
var times = read.questionInt("Enter the number of times bets placed : ");
/*
 *invokes playGambling function from utility.js
 */
access.playGambling(stake,goal,times);