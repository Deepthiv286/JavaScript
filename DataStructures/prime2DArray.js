/****************************************************************
 * 
 * Execution    :Default node   cmd>node prime2DArray.js
 * Purpose      :To take a range of 0-1000 numbers and find the prime numbers in that range.
 * 
 * @description
 * @file        :prime2DArray.js
 * @overview    :Store the prime numbers in a 2D Array, the first dimension represents the range 0­-100,
 *               100­-200, and so on. While the second dimension represents the prime numbers in
 *               that range.
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :02/02/2019
 * 
 ***************************************************************/
var access = require('../UtilProgs/dataStructureUtil');
var util = require('../UtilProgs/algoUtil');
/*
*accessing util files
*/
try {
var array = [['0-100'],['100-200'],['200-300'],['300-400'],['400-500'],['500-600'],['600-700'],['700-800'],['800-900'],['900-1000']];
var i = 0,j = 1,range = 100;
for (let prime = 2; prime <= 1000; prime++) {
    if (util.isPrime(prime)) {
        /*
        *checks if a number is prime or not
        */
        if(prime<=range)
        {
            /*
            *checks if the prime is in the range of 100
            */
            array[i][j] = prime;
            /*
            *adds prime number in that range to the array
            */
            j++;
        }
        else{
            j = 1;
            range = range+100;
            i++;
            array[i][j] = prime;
        }
    } 
}
console.log(array);
} catch (error) {
    console.log(error.message); 
}


