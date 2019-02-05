/****************************************************************
 * 
 * Execution    :Default node   cmd>node calender.js
 * Purpose      :To Store the Calendar in an 2D Array, the first dimension the week of the month and the second dimension stores the day
 *               of the week.
 * 
 * @description
 * @file        :calender.js
 * @overview    :Takes the month and year as command­line arguments and prints the Calendar of the month. 
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

    for (let i = 0; i < (day * 5); i++) {
        T.print(" ");
    }
    for (let i = 1; i <= date[month]; i++) {
        /*
        *loop to print dates of the month
        */
        if (i < 10) {
            T.print(" " + i + "   ");

        }
        if (i > 9) {
            T.print("" + i + "   ");
        }
        if ((i + day) % 7 == 0) {
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



