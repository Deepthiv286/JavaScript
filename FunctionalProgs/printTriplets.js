/****************************************************************
 * 
 * Execution    :Default node   cmd>node printTriplets.js
 * Purpose      :To print the distinct triplets.
 * 
 * @description
 * @file        :printTriplets.js
 * @overview    :Find distinct triples (i, j, k) such that a[i] + a[j] + a[k] = 0 and print the distinct triplets.
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :25/01/2019
 * 
 ***************************************************************/
var access = require('../UtilProgs/utility');
/*
 *accessing data from utility file
*/
var arr=[1,-2,1,3,-1];
/*
 *invokes printTriplets function from utility.js
 */
access.printTriplets(arr);