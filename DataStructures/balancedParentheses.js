/****************************************************************
 * 
 * Execution    :Default node   cmd>node balancedParentheses.js
 * Purpose      :True or False to show arithmetic expression is balanced or not.
 * @description
 * @file        :balancedParentheses.js
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :01/02/2019
 * 
 ***************************************************************/
const readline = require('readline-sync');
/*
 *accepts userinput
*/
var access = require('../UtilProgs/dataStructureUtil');
/***** Balanced Parentheses *****/
    /*
     *3. Balanced Parentheses
     *
     * @purpose: To show arithmetic expression is balanced or not.
     * @param: Braces is passed to the switch case.
     * @function: Take an arithmetic expression such as (5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3) 
     *            where parentheses are used to order the performance of operations. 
     *            Ensure parentheses must appear in a balanced fashion.               
     * 
    */
function balancedParentheses(){
    function Stack(){
        try {
            var stack = new access.Stack;
            /*
            *invoking Stack class
            */
            var expression = readline.question("Enter the mathematical expression with parantheses : ");
            var braces;
    
        for (let i = 0; i < expression.length; i++) {
            braces = expression.charAt(i);
            if (braces == '(' || braces == '{' || braces == '[') {
                stack.push(braces);
                /*
                *checks if parentheses falls under this category and pushes it to the stack
                */
            }
            else {
                switch (braces)
                {
                    /*
                    *checks if open and close parentheses matches
                    */
                    case ')': if (stack.pop() != '(') 
                                {
                                    return false;
                                }
                                break;
                    case '}': if (stack.pop() != '{') 
                                {
                                    return false;
                                }
                                break;
                    case ']': if (stack.pop() != '[') 
                                {
                                    return false;
                                }
                                break;
                }
            }
        }
        if (stack.size == 0) 
        {
            /*
            *checks if the stack is empty
            */
            return true;
        }
        return false;
        } catch (error) {
            console.log(error.message); 
        }
    }
    var balance = Stack();
    /*
    *returns boolean value
    */
    console.log(balance);
    if (balance) {
        console.log("Arithmetic Expression is balanced");
    }
    else {
        console.log("Arithmetic Expression is not balanced");
    }
}
balancedParentheses();
