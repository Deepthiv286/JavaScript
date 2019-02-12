/****************************************************************
 * 
 * Execution    :Default node   cmd>node address.js
 * Purpose      :To 
 * 
 * @description
 * @file        :address.js
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :11/02/2019
 * 
 ***************************************************************/
var read = require('readline-sync');
var access = require('../../UtilProgs/address');
var fs = require('fs');
var file = fs.readFileSync('addressBook.json', 'utf8');
var details = JSON.parse(file);
/***** Address Book *****/
/*
 *11.Address Book
 *
 *@purpose: To design an address book.
 *@param: Pass the details of address as arguement.
 *@function: Performs CRUD(create,retrieve,update,delete) actions.
 * 
*/
function addressBook() {
    try {
        var address = new access.Address;
        /*
        *accessing Address class
        */
        while (choice != 3) {
            console.log("1:Create address profile");
            console.log("2:Open address book");
            console.log("3:Exit");
            var choice = read.questionInt("Please enter your choice: ");
            /*
            *accessing functions of Address class
            */
            switch (choice) {
                case 1:
                    address.createAddress(details);
                    break;
                case 2:
                    address.openProfile(details);
                    break;
                case 3:
                    console.log("Exiting.....");
                    break;
                default:
                    console.log("Enter choice within 1-3");
            }
        }
    } catch (error) {
        console.log(error.message);
    }
}
addressBook();