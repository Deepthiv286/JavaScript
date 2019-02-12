/****************************************************************
 * 
 * Execution    :Default node   cmd>node stockAccount.js
 * Purpose      :To add and update the share information of customer and company. 
 * 
 * @description
 * @file        :stockAccount.js
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :12/02/2019
 * 
 ***************************************************************/
var read = require('readline-sync');
var fs = require('fs');
/***** Stock Account *****/
/*
 *5. Stock Account
 *
 *@purpose: To create StockAccount class.
 *
 * 
*/
class StockAccount {
    constructor() {
    }
    /**
     *stockCreate creates stock acount with name,
     *id and share where id is generated unquie for each account. 
     * 
     */
    getId(object) {
        var arr = [];
        var customer = object.Customer;
        for (let key in customer) {
            arr.push(customer[key].id);
        }
        return arr;
    }
    getSymbol(object) {
        var arr = [];
        var company = object.Company;
        for (let key in company) {
            arr.push(company[key].symbol);
        }
        return arr;
    }
    getName(object)
    {
        var arr = [];
        var company = object.Company;
        for (let key in company) {
            arr.push(company[key].name);
        }
        return arr;
    }
    createStock(data) {
        var customerName = read.question("Enter the name of the customer : ");
        while (!isNaN(customerName)) {
            console.log("Enter string only");
            customerName = read.question("Enter the name of the customer : ");
        }
        var customerId = read.question("Enter the customer id : ");
        while (this.getId(data).includes(customerId)) {
            console.log("Id already exists..Enter another id");
            customerId = read.question("Enter the customer id : ");
        }
        var customerShare = read.question("Enter the customer share : ");
        while (isNaN(customerShare)) {
            console.log("Enter numbers only");
            customerShare = read.question("Enter the customer share : ");
        }
        data.Customer.push(
            {
                name: customerName,
                id: customerId,
                share: customerShare,
            }
        )
        console.log(data.Customer);
        fs.writeFileSync('customer.json', JSON.stringify(data));
    }
    /**
     * Buy it adds to the stock account and 
     * customer buys the share from the company.
     *  
     */
    buy(customerData, companyData) {
        console.log(customerData);
        var customer = customerData.Customer;
        var id = read.question("Enter the customer id : ");
        /**
         * Loop the customer array object to find id of the customer want to buy.
         */
        for (let i in customer) {
            if (customer[i].id == id) {
                var index = customerData.Customer.indexOf(customerData.Customer[i]);
                var customerName = customer[i].name;
                console.log("Company information ");
                console.log(companyData);
                var symbol = read.question("Enter the symbol of the company to buy the share : ");
                while (!isNaN(symbol)) {
                    console.log("Enter a proper symbol");
                    symbol = read.question("Enter the symbol of the company to buy the share : ")
                }
                var company = companyData.Company;
                /**
                 * loop over the company array object to buy the share from the company.
                 */
                for (let i in company) {
                    if (company[i].symbol == symbol) {
                        console.log(company[i]);
                        var companyName = company[i].name
                        var companySymbol = company[i].symbol;
                        var companyShare = company[i].share;
                        var number = read.questionInt("Enter the number of shares to buy : ");
                        while (number > companyShare) {
                            console.log(" Enter the share number less than company shares ");
                            number = read.questionInt("Enter the number of shares to buy : ");
                        }
                        console.log("Customer name :  " + customerName + "\nname of company  " + companyName + " and symbol : " + companySymbol + " \nnumber of shares bought : " + number);
                        var time = new Date();
                        console.log(" Time of buying the share is " + Math.floor(time.getSeconds()) + " sec ");
                        var customerShare = parseInt(customerData.Customer[index].share)
                        var companyShare = parseInt(companyData.Company[i].share)
                        var num = parseInt(number);
                        var add = customerShare + num;
                        var sub = companyShare - num;
                        if (companyShare > num) {
                            customerData.Customer[index].share = add;
                            companyData.Company[i].share = sub;
                            fs.writeFileSync('customer.json', JSON.stringify(customerData));
                            fs.writeFileSync('company.json', JSON.stringify(companyData));
                        }
                    }
                }
            }
        }
    }
    /**
     * Sell subtract the share from the stock account and sell the 
     * share to company which user is interested. 
     */
    sell(customerData, companyData) {
        console.log(customerData);
        var customer = customerData.Customer;
        var id = read.question("Enter the customer id : ");
        while (!this.getId(customerData).includes(id)) {
            console.log("Id doesn't exist..Enter another id");
            customerId = read.question("Enter the customer id : ");
        }
        /**
         * Loop the customer array object to find id of the customer want to sell.
         */
        for (let i in customer) {
            if (customer[i].id == id) {
                var index = customerData.Customer.indexOf(customerData.Customer[i]);
                var customerName = customer[i].name;
                var customerShare = customer[i].share;
                console.log("Company information ");
                console.log(companyData);
                var symbol = read.question("Enter the symbol of the company to sell the shares to : ");
                var company = companyData.Company;
                console.log(customer[i]);
                /**
                  * loop over the company array object to sell the share from the company.
                  */
                for (let i in company) {
                    if (company[i].symbol == symbol) {
                        // console.log("company number of shares and price of each share");
                        // console.log(company[i]);
                        var companyName = company[i].name;
                        var companySymbol = company[i].symbol;
                        var number = read.questionInt("Enter the number of shares to sell :");
                        while (number > customerShare) {
                            console.log("Enter the shares less than customer shares ");
                            number = read.questionInt("Enter the number of shares to sell : ");
                        }
                        console.log("Customer name :" + customerName + "\nname of company : " + companyName + " and symbol : " + companySymbol + "\nnumber of shares sold : " + number);
                        var time = new Date();
                        console.log("Time of selling the share is " + Math.floor(time.getSeconds()) + " sec ");
                        var customerShare = parseInt(customerData.Customer[index].share);
                        var companyShare = parseInt(companyData.Company[i].share);
                        var num = parseInt(number);
                        var sub = customerShare - num;
                        var add = companyShare + num;
                        customerData.Customer[index].share = sub;
                        companyData.Company[i].share = add;
                        fs.writeFileSync('customer.json', JSON.stringify(customerData));
                        fs.writeFileSync('company.json', JSON.stringify(companyData));
                    }
                }
            }
        }
    }
    /**  stackps(s)
     {
         var stack = M.StackLinkedList;
         stack.push(s);
         stack.print();
     }*/
    /**  queuetime(time)
     {
         var queue = M.LinkListQ
         queue.enQueue(time);
         queue.print();
     }*/
    /*
     *To print all the details of the customer and company. 
     */
    print(customerData, companyData) {
        console.log("customer shares information :");
        console.log(customerData);
        console.log("company shares information :");
        console.log(companyData);
    }
}
module.exports = {
    StockAccount
}