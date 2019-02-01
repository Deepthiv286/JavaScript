/****************************************************************
 * 
 * Execution    :Default node   cmd>node orderedList.js
 * Purpose      :To read from file the list of numbers and take user input for a new number.
 * 
 * @description
 * @file        :orderedList.js
 * @overview    :Read a list of numbers from a file and arrange it ascending order in a
 *               linked list. Take user input for a number, if found then pop the number out of the
 *               list else insert the number in appropriate position.
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :01/02/2019
 * 
 ***************************************************************/
var access = require('../UtilProgs/dataStructureUtil');
var utility = require('../UtilProgs/utility');
var util = require('../UtilProgs/algoUtil');
/*
 *accessing data from utility file
*/
var read = require('readline-sync');
/*
 *accepts userinput
*/
try{
var arr = [];
/*
*creates an empty array
*/
var arr1 = utility.fileRead('fileNum.txt');
/*
*invoking fileRead function
*/
console.log("Before sorting : "+arr1);
for(let i=0;i<arr1.length;i++)
{
    arr[i] = parseInt(arr1[i]);
    /*
    *converting file contents into an int
    */
}
util.mergeSort(arr);
/*
*invoking mergeSort function
*/
console.log("After sorting : "+arr);
var ll = new access.LinkedList;
/*
*invoking LinkedList class
*/
var search = read.questionInt("Enter the number to search : ");
    for(let i=0;i<arr.length;i++)
    {
        ll.add(arr[i]);
        /*
        *adds elements to linked list
        */
    }
    var result = ll.contain(search);
    if(result == true)
    {
        /*
        *checks if the searched number is present in the list then removes it
        */
        ll.remove(search);
        console.log(search+" is removed from the list");
        var result = ll.print();
        utility.fileWrite('fileNum.txt',result);
        /*
        *writes the result to the file
        */
        console.log(result);
    }
    else{
        console.log(arr);
        var pos = ll.addPos(arr,search);
        console.log(pos);
        /*
        *adds element in the sorted position
        */
        ll.insertAt(search,pos);
        console.log(search+" is added to the list");
        var result = ll.print();
        utility.fileWrite('fileNum.txt',result);
        console.log(result);   
    }
} catch (error) {
    console.log(error.message);  
}

