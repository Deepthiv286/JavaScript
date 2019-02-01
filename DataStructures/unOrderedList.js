/****************************************************************
 * 
 * Execution    :Default node   cmd>node unOrderedList.js
 * Purpose      :To read from file the list of words and take user input to search a text. 
 * 
 * @description
 * @file        :unOrderedList.js
 * @overview    :Read the text from a file, split it into words and arrange it as linked list.
 *               Take a user input to search a Word in the list. If the word is not found then add it
 *               to the list, and if it found then remove the word from the list. In the end save the
 *               list into a file.
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :31/01/2019
 * 
 ***************************************************************/
var access = require('../UtilProgs/dataStructureUtil');
var utility = require('../UtilProgs/utility');
/*
 *accessing data from utility file
*/
var read = require('readline-sync');
/*
 *accepts userinput
*/
try {
    var format = /[a-zA-Z]/;
    var word = read.question("Enter the word to search : ");
    if(format.test(word))
    {
        var arr = utility.fileRead('file.txt');
    /*
    *invoking fileRead function
    */
    var ll = new access.LinkedList;
    /*
    *invoking LinkedList class
    */
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        /*
        *loop to add elements to linked list
        */
        ll.add(arr[i]);
    }
    var searchWord = ll.contain(word);
    if (searchWord == true) {
        /*
        *checks if the searched word is present and removes it
        */
        ll.remove(word);
        console.log(word + " is removed from the list");
        var result = ll.print();
        utility.fileWrite("file.txt", result);
        /*
        *writes the result to the file
        */
        console.log(result);
    }
    else {
        ll.add(word);
        /*
        *adds the word to the list
        */
        console.log(word + " is added to the list");
        var result = ll.print();
        utility.fileWrite("file.txt", result);
        console.log(result);
    }
    }
    else{
        console.log("Enter string only");   
    }
} catch (error) {
    console.log(error.message);
}
