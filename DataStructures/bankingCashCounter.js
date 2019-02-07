/****************************************************************
 * 
 * Execution    :Default node   cmd>node bankingCashCounter.js
 * Purpose      :To create banking cash counter where people come in to deposit cash and withdraw cash.
 * 
 * @description
 * @file        :bankingCashCounter.js
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :02/02/2019
 * 
 ***************************************************************/
var access = require('../UtilProgs/dataStructureUtil');
var read = require('readline-sync');
/***** Banking Cash Counter *****/
    /*
     *4. Banking Cash Counter
     *
     * @purpose: To create banking cash counter where people come in to deposit cash and withdraw cash.
     * @param: True or False is passed to check if the minimum balance is maintained.
     * @function: Have an input panel to add people to queue to either deposit or withdraw money and dequeue the people. 
     *            Maintain the cash balance.               
     * 
    */
function bankingCashCounter()
{
    try {
        var queue = new access.Queue;
        var bankAmount = 5000;
        var flag = true;
        var num = read.questionInt("Enter total number of people in a queue : ");
        if (num > 0) {
            /*
            *loop to deposit or withdraw the amount
            */
            for (let i = 1; i <= num; i++) {
                var choice = read.questionInt("Person "+i+"\nEnter 1 to deposit amount \nEnter 2 to withdraw amount \n");
                if (choice == 1) {
                    var amount = read.questionFloat("Enter the total amount to deposit : ");
                    if(amount>0)
                    {
                        queue.enqueue(Number(amount));
                        flag = true;
                        if (flag) {
                           /* var count = 0;
                            for (let j = 1; j <= num; j++) {
                                count += queue.dequeue();
                            }*/
                            var total = bankAmount + amount;
                            if (amount > 0) {
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
                    }
                    else{
                        console.log("Enter amount greater than 0"); 
                    }
                    /*
                    *invoking enqueue function to deposit the amount
                    */
                    
                }
                else if (choice == 2) {
                    var amount = read.questionInt("Enter the total amount to withdraw : ");
                    if(amount>0)
                    {
                        queue.enqueue(Number(-amount));
                        flag = true;
                        if (flag) {
                            var count = 0;
                            for (let j = 1; j <= num; j++) {
                                count += queue.dequeue();
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
                    }
                    else{
                        console.log("Enter amount greater than 0"); 
                    }
                    /*
                    *invoking enqueue function to withdraw the amount
                    */
                    
                }
                else {
                    console.log("Enter choice either 1 or 2");
                    flag = false;
                    return;
                }
            }
        }
        else {
            console.log("Enter positive number");
            return;
        }
       /* if (flag) {
            var count = 0;
            for (let j = 1; j <= num; j++) {
                count += queue.dequeue();
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
               /* console.log("Maintain minimum balance " + bankAmount + " in the bank account");
            }
            else {
                console.log("Minimum balance is maintained in the bank");
            }
        }*/
    } catch (error) {
        console.log(error.message);
    }
}
bankingCashCounter();

