/****************************************************************
 * 
 * Execution    :Default node   cmd>node bankingCashCounter.js
 * Purpose      :To create banking cash counter where people come in to deposit cash and withdraw cash.
 * 
 * @description
 * @file        :bankingCashCounter.js
 * @overview    :Have an input panel to add people to queue to either deposit or withdraw money and dequeue the people. 
 *               Maintain the cash balance.
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :02/02/2019
 * 
 ***************************************************************/
var access = require('../UtilProgs/dataStructureUtil');
var read = require('readline-sync');
try {
    var q = new access.Queue;
    var bankAmount = 5000;
    var flag = true;
    var num = read.questionInt("Enter total number of people in a queue : ");
    if (num > 0) {
        /*
        *loop to deposit or withdraw the amount
        */
        for (let i = 1; i <= num; i++) {
            var ch = read.questionInt("Enter 1 to deposit amount \n Enter 2 to withdraw amount \n");
            if (ch == 1) {
                var amount = read.questionFloat("Enter the total amount to deposit : ");
                q.enqueue(Number(amount));
                flag = true;
            }
            else if (ch == 2) {
                var amount = read.questionInt("Enter the total amount to withdraw : ");
                q.enqueue(Number(-amount));
                flag = true;
            }
            else {
                console.log("Enter the correct choice");
                flag = false;
                return;
            }
        }
    }
    else {
        console.log("Enter valid input");
        return;
    }
    if (flag) {
        var count = 0;
        for (let i = 1; i <= num; i++) {
            count += q.dequeue();
        }
        var total = bankAmount + count;
        if (count > 0) {
            console.log("Balance is : " + total);
        }
        else {
            console.log("Insufficient balance");

        }
        if (total < bankAmount) {
            /*
            *checks if minimum balance is maintained in the account
            */
            console.log("Maintain minimum balance " + bankAmount + " in the bank account");
        }
        else {
            console.log("Minimum balance is maintained in the bank");
        }
    }
} catch (error) {
    console.log(error.message);
}
