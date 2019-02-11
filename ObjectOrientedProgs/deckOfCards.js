/****************************************************************
 * 
 * Execution    :Default node   cmd>node deckOfCards.js
 * Purpose      :To print the cards the received by the 4 players using 2D array.
 * 
 * @description
 * @file        :deckOfCards.js
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :09/02/2019
 * 
 ***************************************************************/
var access = require('../UtilProgs/oopUtil');
var read = require('readline-sync');
function cards()
{
    try {
        access.deckOfCards();
        /*
        *invoking deckOfCards function
        */
    } catch (error) {
        console.log(error.message);
    }
}
cards();