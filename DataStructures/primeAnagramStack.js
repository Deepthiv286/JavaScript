/****************************************************************
 * 
 * Execution    :Default node   cmd>node primeAnagramStack.js
 * Purpose      :To add the prime numbers that are anagram in the range of 0 ­ 1000 in a stack using
 *               the linked list and print the anagrams in the reverse order.
 * 
 * @description
 * @file        :primeAnagramStack.js
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :04/02/2019
 * 
 ***************************************************************/
var access = require('../UtilProgs/dataStructureUtil');
var util = require('../UtilProgs/algoUtil');
/***** Prime and Anagram Stack *****/
    /*
     *13. Prime and Anagram Stack
     *
     * @purpose: To add the prime numbers that are anagram in the range of 0 ­ 1000 in a stack using
     *           the linked list and print the anagrams from the stack.
     * @param: Pass numbers to check if its a prime and anagram.
     * @function: Add the prime numbers that are anagram in the range of 0 ­ 1000 in a stack using
     *            the linked list and print the anagrams ifrom the stack.
     * 
    */
function primeAnagramStack()
{
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
        for (let j = 0; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                //checks if numbers are anagram
                if (util.anagram(arr[j], arr[k])) {
                    stack.push(Number(arr[j]));
                    stack.push(Number(arr[k]));
                }
            }
        }
        var result = stack.print();
        console.log("Numbers which are prime and anagram using stack in the reverse order : \n"+result);  
    }
    catch (error) {
        console.log(error.message);
    }
}
primeAnagramStack();





