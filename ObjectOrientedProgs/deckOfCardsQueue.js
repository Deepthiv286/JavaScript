/****************************************************************
 * 
 * Execution    :Default node   cmd>node deckOfCardsQueue.js
 * Purpose      :To sort by rank and maintain the cards in a queue implemented using
 *               linked list and print the player and the cards received by each player.
 * 
 * @description
 * @file        :deckOfCardsQueue.js
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :09/02/2019
 * 
 ***************************************************************/
var access = require('../UtilProgs/oopUtil');
function cards()
{
    try {
        access.deckOfCardsQueue();
        /*
        *invoking deckOfCards function
        */
    } catch (error) {
        console.log(error.message);
    }
}
cards();