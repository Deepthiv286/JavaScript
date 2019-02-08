/****************************************************************
 * 
 * Execution    :Default node   cmd>node dataStructuresUtil.js
 * Purpose      :To deploy all the business logic
 * 
 * @description
 * @file        :dataStructuresUtil.js
 * @overview    :All functions with business logic are coded here
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :31/01/2019
 * 
 ***************************************************************/
var util = require('../UtilProgs/algoUtil');
module.exports = {
    binaryTree(num) {
        /*
        *function to generate binary tree
        */
        try {
            var fact = 1;
            for (let i = 1; i <= num; i++) {
                fact = fact * i;
            }
            return fact;
        } catch (error) {
            console.log(error.message);
        }
    },

    day(month, day, year) {
        /*
        *function to calculate the day
        */
        try {
            var y = year - Math.floor((14 - month) / 12);
            var x = y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400);
            var m = month + 12 * Math.floor((14 - month) / 12) - 2;
            var d = (day + x + Math.floor((31 * m) / 12)) % 7;
            return d;
        } catch (error) {
            console.log(error.message);
        }
    },


    isLeapYear(year) {
        /*
        *function to check if its a leap year
        */
        try {
            if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
                return true;
            else
                return false;
        } catch (error) {
            console.log(error.message);
        }
    },
    months(month) {
        try {
        /*
        *switch case for the number of months
        */
            switch (month) {
                case 1: return 31;
                    break;
                case 2: return 28;
                    break;
                case 3: return 31;
                    break;
                case 4: return 30;
                    break;
                case 5: return 31;
                    break;
                case 6: return 30;
                    break;
                case 7: return 31;
                    break;
                case 8: return 31;
                    break;
                case 9: return 30;
                    break;
                case 10: return 31;
                    break;
                case 11: return 30;
                    break;
                case 12: return 31;
                    break;
            }
        } catch (error) {
            console.log(error.message);
        }
    },

    /*
    *function to print numbers that are prime and anagram in a 2D array
    */
    dArray() {
        try {
        var arr = [];
        var arr1 = [];
        var array = [["0-100 "], ["100-200 "], ["200-300 "], ["300-400 "], ["400-500 "], ["500-600 "], ["600-700 "], ["700-800 "], ["800-900 "], ["900-1000 "]];
        for (let i = 2; i < 1000; i++) {
            if (util.isPrime(i)) {
                arr.push(i);
                /*
                *adds prime numbers to the array
                */
            }
        }
        var range = 100, k = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (util.anagram(arr[i], arr[j])) {
                    if (arr[i] <= range) {
                        if (arr[j] <= range) {
                            array[k].push(arr[i]);
                            /*
                            *checks if the prime number is an anagram and adds to the array
                            */
                            arr1.push(arr[i])
                            arr1.push(arr[j])
                            array[k].push(arr[j]);
                        }
                    } else {
                        range = range + 100;
                        k++;
                        if (arr[j] <= range) {
                            array[k].push(arr[i]);
                            array[k].push(arr[j]);
                        }
                    }
                }
            }
        }
        console.log("Numbers which are prime and anagram ");
        var req = require('util')
        for (let i = 0; i < array.length; i++) {
            /*
            *loop to print the numbers that are prime and anagram
            */
            for (let j = 0; j < array[i].length; j++) {
                req.print(array[i][j]);
                if (j == 0) {
                    req.print(" => ");
                } else {
                    if (j != array[i].length - 1)
                        req.print(",")
                }
            }
            console.log();
        }
        return arr1;
        } catch (error) {
            console.log(error.message);   
        }
    },



}


