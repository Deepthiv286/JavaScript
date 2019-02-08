/****************************************************************
 * 
 * Execution    :Default node   cmd>node weekDayQueue.js
 * Purpose      :To create the week Object having a list of weekday objects each storing the day 
 *               (i.e S,M,T,W,Th,..) and the Date (1,2,3..) .
 * 
 * @description
 * @file        :weekDayQueue.js
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :05/02/2019
 * 
 ***************************************************************/
var access = require('../UtilProgs/queue');
/*
*accessing data from utility file
*/
var read = require('readline-sync');
const T = require('util');
/***** Week Day Queue *****/
    /*
     *9. Week Day Queue
     *
     * @purpose: To create the week Object having a list of weekday objects each storing the day 
     *           (i.e S,M,T,W,Th,..) and the Date (1,2,3..) .
     * @param: Pass month and year as arguements.
     * @function: The WeekDay objects are stored in a queue implemented using linked list.
     *            Further maintain also a week Object in a queue to finally display the calendar.
     * 
    */
function weekDayQueue()
{
    try {
        var queue = new access.QueueLinkedList;
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
             * Loop to enqueue the weekdays into Queue.
             */
            for (let i = 0; i < week.length; i++) {
                queue.enqueue(week[i]);
            }
            /**
             * Loop to enqueue the dates into Queue.
             */
            for (let j = 1; j <= date[month]; j++) {
    
                queue.enqueue(j);
            }
            /**
             * Loop the weekdays to deQueue from the queue and print it.
             */
            for (let k = 0; k < week.length; k++) {
                T.print(queue.dequeue() + "  ");
            }
            console.log()
            for (let l = 0; l < (day * 5); l++) {
                T.print(" ");
            }
            /**
             * Loop number of days to deQueue from the queue and print it.
             */
            for (let m = 1; m <= date[month]; m++) {
    
                if (m < 10) {
                    T.print(" " + queue.dequeue() + "   ");
                }
                if (m > 9) {
                    T.print("" + queue.dequeue() + "   ");
                }
                if ((day + m) % 7 == 0) {
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
weekDayQueue();
