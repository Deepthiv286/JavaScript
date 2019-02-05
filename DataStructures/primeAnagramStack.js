/****************************************************************
 * 
 * Execution    :Default node   cmd>node primeAnagramStack.js
 * Purpose      :To add the prime numbers that are anagram in the range of 0 ­ 1000 in a stack using
 *               the linked list and print the anagrams in the reverse order.
 * 
 * @description
 * @file        :primeAnagramStack.js
 * @overview    :Add the prime numbers that are anagram in the range of 0 ­ 1000 in a stack using
 *               the linked list and print the anagrams in the reverse order.
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :04/02/2019
 * 
 ***************************************************************/
var access = require('../UtilProgs/dataStructureUtil');
var util = require('../UtilProgs/algoUtil');


    try {
        var stack = new access.StackLinkedList;
        var arr = [];
        /*
        *loops from 0-1000
        */
        for (let i = 1000; i > 0; i--) {
            /*
            *checks if a number is prime and then pushes to the array
            */
            if (util.isPrime(i)) {
                arr.push(i);
            }
        }
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                //checks if numbers are anagram
                if (util.anagram(arr[i], arr[j])) {
                    stack.push(Number(arr[i]));
                    stack.push(Number(arr[j]));
                }
            }
        }
        var result = stack.print();
        console.log("Numbers which are prime and anagram using stack : "+result);  
    }
    catch (error) {
        console.log(error.message);
    }




