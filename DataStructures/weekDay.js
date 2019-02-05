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
var qll = new access.QueueLinkedList;
var month = read.question("Enter the month : ");
var year = read.question("Enter the year : ");
var d = access.day(month,1,year);
console.log(d);
var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
if(d<=week.length)
{
    console.log(week[d]);
    
}
var days = access.months(month);
var leap = access.isLeapYear(year);
if (leap == true) {
    if(month == 2)
    /*
    *checks if it is a leap year or not
    */
    days= 29;
}
for(let i=0;i<week.length;i++)
{
    qll.enqueue(week[i]);
}
for(let i=1;i<days;i++)
{
    qll.enqueue(i);
}
for(let i=0;i<week.length;i++)
{
    T.print(qll.dequeue()+" ");
}
console.log();
for(let i=0;i<(d*5);i++)
{
    T.print(" ");
}
for (let i = 1; i <= days; i++) {
    /*
    *loop to print dates of the month
    */
    if (i < 10) {
        T.print(" " + qll.dequeue() + "   ");

    }
    if (i > 9) {
        T.print("" + qll.dequeue() + "   ");
    }
    if ((i + week) % 7 == 0) {
        console.log();

    }
}

