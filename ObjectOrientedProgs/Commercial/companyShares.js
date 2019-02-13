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
var util = require('../../UtilProgs/companyShares');
var read = require('readline-sync');
var file = require('fs');
var data = file.readFileSync('company.json', 'utf8');
var object = JSON.parse(data);
function companyShares() {
    try {
        var com = new util.CompanyShares();
        var company = object.company;
        /**
         * Loop the company array objects and add it to linkedlist.
         */
        outer: while (true) {
          console.log("1. Add to the list");
          console.log("2. Remove from the list");
          console.log("3. Print");
          console.log("4. Exit");
          var choice = read.questionInt("Enter your choice : ");
           /**
           * Switch to choose the case to add,remove and
           * print
           */
          switch (choice) {
            case 1:
              com.addTolist(company, object);
              break;
            case 2:
              com.removeFromList();
              break;
            case 3:
              com.print();
              break;
            case 4:
              console.log("Exiting.....");
              break outer;
            default:
              console.log("Enter choice within 1-4");
              break;
          }
        }
      } catch (err) {
        console.log(err.message);
      }
    }

companyShares();
