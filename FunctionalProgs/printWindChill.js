/****************************************************************
 * 
 * Execution    :Default node   cmd>node printWindChill.js
 * Purpose      :To print windchill.
 * 
 * @description
 * @file        :windChill.js
 * @overview    :Calculate windchill using the formula w = 35.74+0.6215*t+((0.4275*t)-35.75)*v^0.16 and display the result.
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :27/01/2019
 * 
 ***************************************************************/
var access = require('../UtilProgs/functionalUtil');
/*
 *accessing data from utility file
*/
access.printWindChill();
/*
 *invokes printWindChill function from utility.js
 */
