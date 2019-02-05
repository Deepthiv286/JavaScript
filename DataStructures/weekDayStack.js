/****************************************************************
 * 
 * Execution    :Default node   cmd>node weekDay.js
 * Purpose      :To create the week Object having a list of weekday objects each storing the day 
 *               (i.e S,M,T,W,Th,..) and the Date (1,2,3..) .
 * 
 * @description
 * @file        :weekDay.js
 * @overview    :The weekday objects are stored in a queue implemented using stack. 
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
try {
    var weekdays = new access.StackLinkedList;
    var stack1 = new access.StackLinkedList;
    var dateq = new access.StackLinkedList;
    var stack2 = new access.StackLinkedList;
    var month = read.questionInt("enter the month :");
    var year = read.questionInt("enter the year :");
    if (month > 0 && month <= 12 && year>999 && year<10000) {
        var d = access.day(month, 1, year);
        console.log(d);
        var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var date = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (d <= week.length) {
            console.log("The day falls on :" + week[d]);
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
        for (let i = 1; i <= date[month]; i++) {
            dateq.push(i);
        }
        /**
         * Loop the week days and push it to another stack.
         */
        for (let i = 0; i < week.length; i++) {
            stack1.push(weekdays.pop());
        }
        /**
         * Loop the number of days and push it to another stack.
         */
        for (let i = 1; i <= date[month]; i++) {

            stack2.push(dateq.pop());
        }
        /**
         * To print weekdays.
         */
        for (let i = 0; i < week.length; i++) {
            T.print(stack1.pop() + "  ");
        }
        console.log()
        for (let i = 0; i < (d * 5); i++) {
            T.print(" ");
        }
        /**
         * To print days using spacing.
         */
        for (let i = 1; i <= date[month]; i++) {

            if (i < 10) {
                T.print(" " + stack2.pop() + "   ");
            }
            if (i > 9) {
                T.print("" + stack2.pop() + "   ");
            }
            if ((d + i) % 7 == 0) {
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