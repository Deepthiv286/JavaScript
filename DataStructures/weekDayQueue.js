/****************************************************************
 * 
 * Execution    :Default node   cmd>node weekDay.js
 * Purpose      :To create the week Object having a list of weekday objects each storing the day 
 *               (i.e S,M,T,W,Th,..) and the Date (1,2,3..) .
 * 
 * @description
 * @file        :weekDay.js
 * @overview    :The WeekDay objects are stored in a queue implemented using linked list.
 *               Further maintain also a week Object in a queue to finally display the calendar. 
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
    var qll = new access.QueueLinkedList;
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
         * Loop to enqueue the weekdays into Queue.
         */
        for (let i = 0; i < week.length; i++) {
            qll.enqueue(week[i]);
        }
        /**
         * Loop to enqueue the dates into Queue.
         */
        for (let i = 1; i <= date[month]; i++) {

            qll.enqueue(i);
        }
        /**
         * Loop the weekdays to deQueue from the queue and print it.
         */
        for (let i = 0; i < week.length; i++) {
            T.print(qll.dequeue() + "  ");
        }
        console.log()
        for (let i = 0; i < (d * 5); i++) {
            T.print(" ");
        }
        /**
         * Loop number of days to deQueue from the queue and print it.
         */
        for (let i = 1; i <= date[month]; i++) {

            if (i < 10) {
                T.print(" " + qll.dequeue() + "   ");
            }
            if (i > 9) {
                T.print("" + qll.dequeue() + "   ");
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