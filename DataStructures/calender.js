/****************************************************************
 * 
 * Execution    :Default node   cmd>node calender.js
 * Purpose      :To Store the Calendar in an 2D Array, the first dimension the week of the month and the second dimension stores the day
 *               of the week.
 * 
 * @description
 * @file        :calender.js
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :04/02/2019
 * 
 ***************************************************************/
var access = require('../UtilProgs/dataStructureUtil');
/*
*accessing data from utility file
*/
const T = require('util');
/***** Calender *****/
    /*
     *8. Calender
     *
     * @purpose: To Store the Calendar in an 2D Array, the first dimension the week of the month and the second dimension stores the day of the week.
     * @param: Takes command line arguements.
     * @function: Takes the month and year as command­line arguments and prints the Calendar of the month.
     * 
    */
function calender()
{
    try {
        var month = process.argv[2];
        var year = process.argv[3];
        /*
        *accepts command-line arguements
        */
        var format = /[0-9]/;
        var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var date = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if(format.test(month) && format.test(year) && year.length == 4 && month>0 && month<=12)
        {
            var day = access.day(month, 1, year);
        /*
        *invoking day function
        */
        var leap = access.isLeapYear(year);
        /*
        *invoking isLeapYear function
        */
        console.log(month + "  " + year);
        console.log();
    
        if (leap == true) {
            /*
            *checks if it is a leap year or not
            */
            date[2] = 29;
        }
    
    
        for (let i = 0; i < week.length; i++) {
            /*
            *loop to print week
            */
            T.print(week[i] + "  ");
        }
        console.log();
    
        for (let j = 0; j < (day * 5); j++) {
            T.print(" ");
        }
        for (let k = 1; k <= date[month]; k++) {
            /*
            *loop to print dates of the month
            */
            if (k < 10) {
                T.print(" " + k + "   ");
    
            }
            if (k > 9) {
                T.print("" + k + "   ");
            }
            if ((k + day) % 7 == 0) {
                console.log();
    
            }
        }
        console.log("\n\n");
        }
        else{
            console.log("Enter valid inputs");
        }
    }
    catch (error) {
        console.log(error.message);
    }
}
calender();




