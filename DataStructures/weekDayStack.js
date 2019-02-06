/****************************************************************
 * 
 * Execution    :Default node   cmd>node weekDayStack.js
 * Purpose      :To create the week Object having a list of weekday objects each storing the day 
 *               (i.e S,M,T,W,Th,..) and the Date (1,2,3..) .
 * 
 * @description
 * @file        :weekDayStack.js 
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :05/02/2019
 * 
 ***************************************************************/
var access = require('../UtilProgs/dataStructureUtil');
/*
*accessing data from utility file
*/
var read = require('readline-sync');
const T = require('util');
/***** Week Day Stack *****/
    /*
     *10. Week Day Stack
     *
     * @purpose: To create the week Object having a list of weekday objects each storing the day 
     *           (i.e S,M,T,W,Th,..) and the Date (1,2,3..) .
     * @param: Pass month and year as arguements.
     * @function: The weekday objects are stored in a queue implemented using stack. 
     * 
    */
function weekDayStack()
{
    try {
        var weekdays = new access.StackLinkedList;
        var stackOne = new access.StackLinkedList;
        var dateq = new access.StackLinkedList;
        var stackTwo = new access.StackLinkedList;
        var month = read.questionInt("enter the month : ");
        var year = read.questionInt("enter the year : ");
        if (month > 0 && month <= 12 && year>999 && year<10000) {
            var day = access.day(month, 1, year);
            console.log(day);
            var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            var date = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            if (day <= week.length) {
                console.log("The day falls on :" + week[day]);
            }
            var leap = access.isLeapYear(year);
            if (leap == true) {
                /*
                *checks if it is a leap year or not
                */
                date[2] = 29;
            }
            /**
             * Loop to push the weekdays into stack.
             */
            for (let i = 0; i < week.length; i++) {
                weekdays.push(week[i]);
            }
            /**
             * Loop to push the dates into stack.
             */
            for (let j = 1; j <= date[month]; j++) {
                dateq.push(j);
            }
            /**
             * Loop the week days and push it to another stack.
             */
            for (let k = 0; k < week.length; k++) {
                stackOne.push(weekdays.pop());
            }
            /**
             * Loop the number of days and push it to another stack.
             */
            for (let l = 1; l <= date[month]; l++) {
    
                stackTwo.push(dateq.pop());
            }
            /**
             * To print weekdays.
             */
            for (let m = 0; m < week.length; m++) {
                T.print(stackOne.pop() + "  ");
            }
            console.log()
            for (let n = 0; n < (day * 5); n++) {
                T.print(" ");
            }
            /**
             * To print days using spacing.
             */
            for (let p = 1; p <= date[month]; p++) {
    
                if (p < 10) {
                    T.print(" " + stackTwo.pop() + "   ");
                }
                if (p > 9) {
                    T.print("" + stackTwo.pop() + "   ");
                }
                if ((day + p) % 7 == 0) {
                    console.log();
                }
            }
        }
        else {
            console.log("Enter month within 1 to 12 and year should be 4 digits");
        }
    }
    catch (error) {
        console.log(error.message);
    }
}
weekDayStack();
