/****************************************************************
 * 
 * Execution    :Default node   cmd>node getCouponNumbers.js
 * Purpose      :To generate random numbers all having distinct numbers.
 * 
 * @description
 * @file        :getCouponNumbers.js
 * @overview    :Given N distinct coupon numbers generate random value for distinct coupon numbers.
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
var num=read.question("Enter number of distinct coupon number : ");
/*
 *invokes getCouponNumbers function from utility.js
 */
access.getCouponNumbers(num);