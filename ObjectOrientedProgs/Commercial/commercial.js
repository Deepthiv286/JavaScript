/****************************************************************
 * 
 * Execution    :Default node   cmd>node commercial.js
 * Purpose      :To add and update the share information of customer and company.
 * 
 * @description
 * @file        :commercial.js
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :12/02/2019
 * 
 ***************************************************************/
var access = require('../../UtilProgs/stockAccount');
var read = require('readline-sync');
var file = require('fs');
/***** Commercial Data Processing *****/
/*
 *5. Commercial Data Processing
 *
 *@purpose: To add and update the share information of customer and company.
 *@param: Pass customer and company details as parameters.
 *@function: StockAccount implements a data type that might be used by a financial institution to keep track of customer information.
 * 
*/
function stockAccount() {
    try {
        /*
        *reading customer and company files
        */
        var customerFile = file.readFileSync('customer.json', 'utf8');
        var companyFile = file.readFileSync('company.json', 'utf8');
        var customer = JSON.parse(customerFile);
        var company = JSON.parse(companyFile);
        /*
        *converting to javascript objects
        */
        var stockAccount = new access.StockAccount;
        /*
        *creating StockAccount object
        */
       while(choice!=5)
       {
        console.log("Press 1 to create account:");
        console.log("Press 2 to buy shares");
        console.log("Press 3 to sell shares");
        console.log("Press 4 to see the customer and company details");
        console.log("Press 5 to exit");
        var choice = read.questionInt("Enter your choice : ");
        switch (choice) {
            case 1:
                stockAccount.createStock(customer);
                break;
            case 2:
                stockAccount.buy(customer, company);
                break;
            case 3:
                stockAccount.sell(customer, company);
                break;
            case 4:
                stockAccount.print(customer, company);
                break;
            case 5:console.log("Exiting.....");
                break;
            default:console.log("Enter choice within 1-4");
                break;
        }
       }
        
    }
    catch (err) {
        console.log(err.message);
    }
} stockAccount();