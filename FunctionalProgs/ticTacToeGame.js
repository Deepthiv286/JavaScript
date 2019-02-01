/****************************************************************
 * 
 * Execution    :Default node   cmd>node ticTacToeGame.js
 * Purpose      :To play a Cross Game or Tic­Tac­Toe Game.
 * 
 * @description
 * @file        :ticTacToeGame.js
 * @overview    :The game is played till either wins or till draw.Print the col and the cell after every step.
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :30/01/2019
 * 
 ***************************************************************/
var access = require('../UtilProgs/functionalUtil');
/*
 *accessing data from utility file
*/
try {
    var flag = false;
    /*
    *initializing flag as false
    */
    var arr = access.deployGame();
    /*
    *invoking deployGame function
    */
    console.log("Player 1 : Computer ; Symbol : O");
    console.log("Player 2 : You ; Symbol : X");
    var count = 1;
    while (count <= 9) {
        arr = access.computerPlayer(arr);
        /*
        *invoking computerPlayer function
        */
        count++;
        while (count > 4) {
            flag = access.check(arr);
            /*
            *invoking check function
            */
            break;
        }
        if (flag) {
            console.log("Computer is the winner...try to win next time");
            break;
        }
        else if (count == 8) {
            console.log("Draw match!");
            break;
        }
        arr = access.userPlayer(arr);
        /*
        *invoking userPlayer function
        */
        while (count > 4) {
            flag = access.check(arr);
            /*
            *invoking check function
            */
            break;

        }
        if (flag) {
            console.log("Yayy..You are the winner");
            break;
        }
        count++;
    }
    console.log("Game Ends");

} catch (error) {
    console.log(error.message);
    
}
    



