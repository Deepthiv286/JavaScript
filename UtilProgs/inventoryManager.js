/****************************************************************
 * 
 * Execution    :Default node   cmd>node inventoryManager.js
 * Purpose      :To print the stock report by creating inventory manager.
 * 
 * @description
 * @file        :inventoryManager.js
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :08/02/2019
 * 
 ***************************************************************/
var read = require('readline-sync');
var fs = require('fs');
var file = fs.readFileSync('stockPortfolio.json','utf8');
var object = JSON.parse(file);
/***** Inventory Management *****/
/*
 *4. Inventory Management
 *
 *@purpose: To create inventoryManager class.
 *
 * 
*/
class inventoryManager {

    constructor() {

    }
    getName(object)
    {
        var arr = [];
        var stock = object.Stock;
        for(let key in stock)
        {
            arr.push(stock[key].name);
        }
        return arr;
    }
    add(data) {
        var name = read.question("Enter the name of the stock to add : ");
        while(this.getName(data).includes(name))
        {
            console.log("Name already exists");
            name = read.question("Enter a different stock name : ");
        }
        var shares = read.questionInt("Enter number of shares : ");
        var sharePrice = read.questionInt("Enter the price of the shares : ");
        data.Stock.push(
            {
                "name": name,
                "numberOfShares": shares,
                "sharePrice": sharePrice
            })
        fs.writeFileSync('stockPortfolio.json', JSON.stringify(data));
        console.log("Added successfully");
        return;
    }

    remove(data) {
        var name = read.question("Enter the name of the stock to remove :");
       while(!this.getName(data).includes(name))
        {
            console.log("Name doesn't exist");
            name = read.question("Enter the name of the stock to remove :");
        }
        for (let i = 0; i < data.Stock.length; i++) {
            if (data.Stock[i].name == name) {
                var index = data.Stock.indexOf(data.Stock[i]);
                data.Stock.splice(index, 1);
            }
            var d = fs.writeFileSync('stockPortfolio.json', JSON.stringify(data));
           
            //return;
        }
        console.log("Deleted successfully");
    }

    print(data) {
        var stock = data.Stock;
        for (const key in stock) {
            console.log(stock[key]);
        }
    }
   /* edit(data) {
        var stock = data.Stock;
        var name = read.question("Enter the stock name to edit :");
        var shares = read.question("Enter the number of shares to edit : ");
        var sharePrice = read.question("Enter the shares price :");
         while(!this.getName(data).includes(name))
        {
            console.log("Name doesn't exist");
            name = read.question("Enter the name of the stock to remove :");
        }
        for (let key in stock) {
            if (stock[key].name == name)
                var value = key;
           if (stock[key].numberOfShares == shares)
                var value1 = key;
            if (stock[key].sharePrice == sharePrice)
                var value2 = key;
        }
        var newName = read.question("Enter the new name of the share :");
        stock[value].name = newName;
        var newShares = read.question("Enter the new number of shares :");
        stock[value1].numberOfShares = newShares;
        var newPrice = read.question("Enter  the new price of the shares :")
        stock[value2].sharePrice = newPrice;
        fs.writeFileSync('stockPortfolio.json', JSON.stringify(data));
        return;
    }*/
}
module.exports = { inventoryManager}