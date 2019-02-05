/****************************************************************
 * 
 * Execution    :Default node   cmd>node hashingFunction.js
 * Purpose      :To create a slot of 10 to store chain of numbers that belong to each slot to
 *               efficiently search a number from a given set of number.
 * 
 * @description
 * @file        :hashingFunction.js
 * @overview    :Firstly store the numbers in the slot. Since there are 10 numbers divide
 *               each number by 11 and the reminder put in the appropriate slot. Create a chain
 *               for each slot to avoid collision. If a number searched is found then pop it or else
 *               push it. Use Map of slot numbers and ordered linked list to solve the problem.
 *               Example : 77/11 reminder is 0 hence sits in the 0 slot,
 *               while 26/11 remainder is 4 hence sits in slot 4.
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :05/02/2019
 * 
 ***************************************************************/
var access = require('../UtilProgs/dataStructureUtil');
var readline = require('readline-sync');
const T = require('util');
var filestream = require('fs');
var utility = require('../UtilProgs/utility');
try {
    var fileRead = filestream.readFileSync('fileHash.txt', 'utf8');
    var numArray = fileRead.split(' ');
    var arr = [];
    
    for (let i = 0; i < numArray.length; i++) {
        var n = Number(numArray[i]);
       var remainder = n % 11;
        /*
        *calculates the remainder of the number when divide by 11
        */
        if (arr[remainder] === undefined) {
            arr[remainder] = new access.LinkedList;
            arr[remainder].add(n);
        } else {
            arr[remainder].add(n);
        }
    }
    
    var str = "";
    for (let index = 0; index <= 10; index++) {
        /*
        *looping according to the number of slots
        */
        T.print(index + " slot: ");
        try {
            console.log(arr[index].print());
        } catch (err) {
            console.log("Empty index");
        }
    }
    console.log()
    var valid = false;
   
    do {
        var number = readline.questionInt('Enter the number you want to search \n');
      if (isNaN(number) && number<0) {
        console.log("Enter positive number only greater than zero");
      } else {
        valid = true;
      }
    } while (!valid);
        remainder = Number(number % 11);
        console.log("Remainder is "+remainder);
        
        if (arr[remainder] === undefined) {
            arr[remainder] = new access.LinkedList;
        }
        if (arr[remainder].contain(Number(number))) {
            console.log("The number is present in the file");
            arr[remainder].remove(number);
            console.log(number+" is removed from the file");
            

        } else {
            console.log("Number is not in the file");
            arr[remainder].add(number);
            console.log(number+" is added to the file");
        }
        var flag;
        
        for (let index = 0; index <= 10; index++) {
            flag = true;
            T.print(index + " result slot: ");
            try {
                console.log(arr[index].print());
                str = str + arr[index].print();
            } catch (err) {
                console.log("Empty index");
            }
        } console.log(str);
        utility.fileWrite('fileHash.txt', str);
} catch (error) {
    console.log(error.message);  
}

   
    

        
