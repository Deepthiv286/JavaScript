/****************************************************************
 * 
 * Execution    :Default node   cmd>node primeAnagramQueue.js
 * Purpose      :To add the prime numbers that are anagram in the range of 0 ­ 1000 in a queue using
 *               the linked list and print the anagrams from the queue.
 * 
 * @description
 * @file        :primeAnagramQueue.js
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :04/02/2019
 * 
 ***************************************************************/
var access = require('../UtilProgs/queue');
var util = require('../UtilProgs/algoUtil');
/***** Prime and Anagram Queue *****/
    /*
     *14. Prime and Anagram Queue
     *
     * @purpose: To add the prime numbers that are anagram in the range of 0 ­ 1000 in a queue using
     *           the linked list and print the anagrams from the queue.
     * @param: Pass numbers to check if its a prime and anagram.
     * @function: Add the prime numbers that are anagram in the range of 0 ­ 1000 in a queue using
     *            the linked list and print the anagrams ifrom the queue.
     * 
    */
function primeAnagramQueue()
{
    try {
        var que = new access.QueueLinkedList;
        var arr = [];
        /*
        *loops from 0-1000
        */
        for (let i = 0; i < 1000; i++) {
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
                    que.enqueue(Number(arr[i]));
                    que.enqueue(Number(arr[j]));
                }
            }
        }
        var result = que.print();
        console.log("Numbers which are prime and anagram using queue : \n"+result);   
    }
    catch (error) {
        console.log(error.message);
    }
}
primeAnagramQueue();
   

