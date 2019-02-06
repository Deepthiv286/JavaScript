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
try {
    /**
     * Read the file and store it in an array
     */
    
    var arr1 = utility.fileRead('fileNum.txt');
  
    var arr = [];
    for (let i = 0; i < arr1.length; i++) {
      arr[i] = parseInt(arr1[i]);
    }
    util.mergeSort(arr);
    /**
     * Create a linked list object
     */
    var ll = new access.LinkedList;
    /**
     * loop till the end of the lenght of array and add all the elements to the list.
     */
    for (let i = 0; i < arr.length; i++) {
      ll.add(arr[i]);
    }
    /**
     * To print the contents of the list
     */
    var items = ll.print();
    console.log("Items in the list: " + items);
    var valid = false;
    /**
     * Ask user to enter a number to search in the list, Validation to accept only numbers.
     */
    do {
      var number = read.question("Enter the number : ");
      if (isNaN(number)) {
        console.log("Enter numbers only");
      } else {
        valid = true;
      }
    } while (!valid);
    /**
     * Check whether the number is present in the list or not by using search function.
     */
    var result = ll.contain(number);
    console.log(result);
    /**
     * Condition to check if the number is present in the list or not.
     * If it is present, remove the number from the list, else add the number to the list
     */
    if (result === true) {
      ll.remove(number);
      console.log(number+" is removed from the list");
      var output = ll.print();
      utility.fileWrite("fileNum.txt", output);
      console.log(output);
    } else {
      var position = ll.addPos(arr, number);
      ll.insertAt(number, position);
      console.log(number+" is added to the list");
      var output1 = ll.print();
      utility.fileWrite("fileNum.txt", output1);
      console.log(output1);
    }
  } catch (error) {
    console.log(error.message);
  }