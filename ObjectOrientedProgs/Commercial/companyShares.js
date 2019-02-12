/****************************************************************
 * 
 * Execution    :Default node   cmd>node companyShares.js
 * Purpose      :To add and update the share information of customer and company.
 * 
 * @description
 * @file        :companyShares.js
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :12/02/2019
 * 
 ***************************************************************/
var access = require('../../UtilProgs/linkedList');
var util = require('../../UtilProgs/stockAccount');
var read = require('readline-sync');
var file = require('fs');
var data = file.readFileSync('company.json', 'utf8');
var object = JSON.parse(data);
function companyShares() {
    var ll = new access.LinkedList;
    var company = object.Company;
    var count = 0;
    var name = read.question("Enter the name of company to add :");
    var stockAccount = new util.StockAccount;
    while(stockAccount.getName(object).includes(name))
    {
        console.log(name+" company name already exists..Enter another name");
        name = read.question("Enter the name of company to add :");
    }
    var share = read.questionInt("Enter the number of shares : ");
    var price = read.questionInt("Enter the share price : ");
    for (let i in company) {
        ll.add(object.Company[i].name = name,object.Company[i].share = share,object.Company[i].price = price);
    }
    ll.printLL();
    var name = read.question("Enter the name of company to remove :")
    var temp = ll.head;
    console.log(ll.size);
    for (let i = 0; i < count; i++) {
        if (temp.data.name == name) {
            ll.remove(temp.data);
        }
        else {
            temp = temp.next;
        }
    }
    ll.printLL();
}
companyShares();
