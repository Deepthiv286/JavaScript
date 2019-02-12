/****************************************************************
 * 
 * Execution    :Default node   cmd>node oopUtil.js
 * Purpose      :To deploy all the business logic
 * 
 * @description
 * @file        :oopUtil.js
 * @overview    :All functions with business logic are coded here
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :07/02/2019
 * 
 ***************************************************************/
const read = require('readline-sync');
/*
*accepts userinput
*/
module.exports = {
    /***** JSON Inventory Data Management *****/
    /*
     *1. JSON Inventory Data Management
     *
     * @purpose: To create the JSON from inventory object and output the JSON string.
     * @param: Pass the inventory details as arguements to the function.
     * @function: Create a JSON file having inventory details for rice, pulses and wheats
     *            with properties name, weight, price per kg.
     * 
    */
    inventory(object) {
        try {
            var rice = object.Rice;
            var pulses = object.Pulses;
            var wheat = object.Wheat;
            /*
            *creating rice,wheat,pulses object
            */
            console.log("Rice");
            for (let key in rice) {
                /*
                *for each loop for rice
                */
                console.log("Cost of " + rice[key].name + " for " + rice[key].weight + "kg = " + rice[key].weight * rice[key].price + "/-");
            }
            console.log("Pulses");
            for (let key in pulses) {
                /*
                *for each loop for pulses
                */
                console.log("Cost of " + pulses[key].name + " for " + pulses[key].weight + "kg = " + pulses[key].weight * pulses[key].price + "/-");
            }
            console.log("Wheat");
            for (let key in wheat) {
                /*
                *for each loop for wheat
                */
                console.log("Cost of " + wheat[key].name + " for " + wheat[key].weight + "kg = " + wheat[key].weight * wheat[key].price + "/-");
            }
        } catch (error) {
            console.log(error.message);
        }
    },

    /***** Regular Expression Demonstration *****/
    /*
     *2. Regular Expression Demonstration
     *
     * @purpose: To print the modified message.
     * @param: Pass the contents to replace message as arguement to the function.
     * @function: Read in the following message: Hello <<name>>, We have your full
     *            name as <<full name>> in our system. your contact number is 91­xxxxxxxxxx.
     *            Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016.
     *            Use Regex to replace name, full name, Mobile#, and Date with proper value.
     * 
    */
    replaceUsingRegex(name, fullName, mobileNumber) {
        try {
            var fs = require('fs');
            var string = fs.readFileSync('regexFile.txt', 'utf8');
            /*
            *replacing contents using regex
            */
            string = string.replace(/<<name>>/g, name);
            string = string.replace(/<<full name>>/g, fullName);
            string = string.replace(/<<xxxxxxxxxx>>/g, mobileNumber);
            var day = new Date();
            /*
            *creating date object
            */
            date = day.getDate() + "/" + (day.getMonth() + 1) + "/" + day.getFullYear();
            string = string.replace(/01.01.2016/g, date);
            console.log(string);
        } catch (error) {
            console.log(error.message);
        }
    },

    /***** Stock Report *****/
    /*
     *3. Stock Report
     *
     * @purpose: To print the stock report.
     * @param: Pass N number of stocks, for each stock read in the share name, number of share, and share price.
     * @function: Read in stock names, number of share, share price.Calculate the value of each stock and the total value.
     *            Print a stock report with total value of each stock and the total value of stock.
     * 
    */
    stockReport(object) {
        try {
            var sum = 0;
            var stock = object.Stock;
            /*
            *creating stock object
            */
            for (let key in stock) {
                /*
                *for each loop for stock
                */
                var total = stock[key].numberOfShares * stock[key].sharePrice;
                /*
                *calculates stock value
                */
                console.log("Stock value of " + stock[key].name + " = " + total);
                sum += total;
            }
            console.log("Total value of stocks = " + sum);
        } catch (error) {
            console.log(error.message);
        }
    },

    /***** Deck Of Cards *****/
    /*
     *9. Deck Of Cards
     *
     *@purpose: To print the cards the received by the 4 players using 2D array.
     *@param: Pass random values to distribute the cards.
     *@function: Initialize deck of cards having suit ("Clubs","Diamonds", "Hearts", "Spades") & Rank ("2", "3", "4", "5", "6", "7", "8", "9", "10",
     *           "Jack", "Queen", "King", "Ace"). Shuffle the cards using random method and then distribute 9 cards to 4 players 
     *           and print the cards the received by the 4 players using 2D array.
     * 
    */
    deckOfCards() {
        try {
            var suit = ["\u2660", "\u2665", "\u2666", "\u2663"];
            var rank = ["King", "Queen", "Jack", "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
            /*
            *calculates the length 
            */
            var cards = suit.length * rank.length;
            /*
            *creates an empty array
            */
            var arr = [];
            for (let i = 0; i < suit.length; i++) {
                for (let j = 0; j < rank.length; j++) {
                    /*
                    *loop to add all cards to the array
                    */
                    var temp = "";
                    arr.push(temp + rank[j] + suit[i]);
                }
            }
            /*
            *loop to shuffle the deck
            */
            for (let k = 0; k < cards; k++) {
                var random = Math.floor(Math.random() * cards);
                /*
                *generating random value
                */
                var temp = arr[k];
                arr[k] = arr[random];
                arr[random] = temp;
                /*
                *swapping is done
                */
            }
            var array = [[], [], [], []];
            var sum = 0;
            for (let l = 0; l < 4; l++) {
                for (let m = 0; m < 9; m++) {
                    /*
                    *loop to distribute the cards
                    */
                    array[l][m] = arr[m + sum];
                }
                sum += 9;
            }
            for (let n = 0; n < array.length; n++) {
                console.log("Deck of cards for Player" + (n + 1) + " : " + " [ " + array[n] + " ] ");
            }
        } catch (error) {
            console.log(error.message);
        }
    },

    /***** Deck Of Cards Using Queue*****/
    /*
     *10. Deck Of Cards Using Queue
     *
     *@purpose: To print the cards the received by the 4 players using 2D array.
     *@param: Pass random values to distribute the cards.
     *@function: Sort by rank and maintain the cards in a queue implemented using
     *          linked list and print the player and the cards received by each player.
     * 
    */
    deckOfCardsQueue() {
        var util = require('../UtilProgs/queue');
        var sort = require('../UtilProgs/algoUtil');
        try {
            var suit = ["\u2660", "\u2665", "\u2666", "\u2663"];
            var rank = ["King", "Queen", "Jack", "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
            /*
            *calculates the length 
            */
            var cards = suit.length * rank.length;
            /*
            *creates an empty array
            */
            var arr = [];
            for (let i = 0; i < suit.length; i++) {
                for (let j = 0; j < rank.length; j++) {
                    /*
                    *loop to add all cards to the array
                    */
                    var temp = "";
                    arr.push(temp + rank[j] + suit[i]);
                }
            }
            /*
            *loop to shuffle the deck
            */
            for (let k = 0; k < cards; k++) {
                var random = Math.floor(Math.random() * cards);
                /*
                *generating random value
                */
                var temp = arr[k];
                arr[k] = arr[random];
                arr[random] = temp;
                /*
                *swapping is done
                */
            }
            var playerOne = new util.QueueLinkedList;
            var playerTwo = new util.QueueLinkedList;
            var playerThree = new util.QueueLinkedList;
            var playerFour = new util.QueueLinkedList;
            /*
            *creating QueueLinkedList object
            */
            for (let l = 0; l < arr.length; l++) {
                if (l >= 0 && l < 13)
                    playerOne.enqueue(arr[l]);
                else if (l >= 13 && l < 26)
                    playerTwo.enqueue(arr[l]);
                else if (l >= 26 && l < 39)
                    playerThree.enqueue(arr[l]);
                else
                    playerFour.enqueue(arr[l]);
            }
            /*
            *accessing functions from QueueLinkedList class
            */
            playerOne = playerOne.print().trim();
            playerTwo = playerTwo.print().trim();
            playerThree = playerThree.print().trim();
            playerFour = playerFour.print().trim();
            /*
            *splitting and sorting the cards for each player
            */
            var wordOne = playerOne.split(" ");
            var sortOne = sort.sort(wordOne);
            console.log("Player 1 : " + "[" + sortOne + "]");

            var wordTwo = playerTwo.split(" ");
            var sortTwo = sort.sort(wordTwo);
            console.log("Player 2 : " + "[" + sortTwo + "]");

            var wordThree = playerThree.split(" ");
            var sortThree = sort.sort(wordThree);
            console.log("Player 3 : " + "[" + sortThree + "]");

            var wordFour = playerFour.split(" ");
            var sortFour = sort.sort(wordFour);
            console.log("Player 4 : " + "[" + sortFour + "]");
        } catch (error) {
            console.log(error.message);
        }
    },
}
