var read = require('readline-sync');
var file = require('fs');
/****************************************************************
 * 
 * Execution    :Default node   cmd>node address.js
 * Purpose      :To create an address class.
 * 
 * @description
 * @file        :address.js
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :11/02/2019
 * 
 ***************************************************************/
/**
 * regex
 */
nameFormat = /[a-zA-Z]/ig;
contactFormat = /[0-9]/g;
/**
 * Add new entries each time and manage that address book and perform opeartions like add,delete,
 * search,update and sort information.
 * @param person store the info of each person and perform opeartions.
 */
class Address {
    /**
     * create a constructor to initialize and store values
     */
    constructor(address) {
        this.address;
    }
    getName(object) {
        var arr = [];
        var addr = object.Person;
        for (let key in addr) {
            arr.push(addr[key].firstName);
        }
        return arr;
    }
    createAddress(address) {
        var firstName = read.question("Enter your first name : ");
        while (!nameFormat.test(firstName)) {
            console.log("Enter string only");
            firstName = read.question("Enter your first name : ");
        }
        var lastName = read.question("Please enter your last name: ");
        /**
         * validating last name
         */
        while (!nameFormat.test(lastName)) {
            console.log("Enter string only");
            lastName = read.question("Please enter your last name: ");
        }
        /**
         * add the address information
         */
        var street = read.question("Street : ");
        var city = read.question("City : ");
        while (!nameFormat.test(city)) {
            console.log("Enter string only");
            city = read.question("City : ");
        }
        var state = read.question("State : ");
        while (!nameFormat.test(state)) {
            console.log("Enter string only");
            state = read.question("State : ");
        }
        var nation = read.question("Nationality : ");
        while (!nameFormat.test(nation)) {
            console.log("Enter string only");
            nation = read.question("Nationality : ");
        }
        var zip = read.question("Zip code : ");
        /**
         * zip code validation that should not exceed length 6
         */
        while (!contactFormat.test(zip) || zip.length != 6) {
            console.log("Invalid zip code! Zip code must be 6 digits");
            zip = read.question("Zip code : ");
        }
        var phoneNum = read.question("Phone number : ");
        while (!contactFormat.test(phoneNum) || phoneNum.length != 10) {
            console.log("Invalid phone number! Phone number must be 10 digits");
            phoneNum = read.question("Phone number : ");
        }
        /**
         * push each value into json
         */
        address.Person.push({
            "firstName": firstName,
            "lastName": lastName,
            "address": {
                "street": street,
                "city": city,
                "state": state,
                "nationality": nation,
                "zip": zip,
                "phoneNum": phoneNum
            }
        })
        /**
         * write file into json
         */
        file.writeFileSync('addressBook.json', JSON.stringify(address), 'utf-8');
        file.writeFile('addressBook1.json', JSON.stringify(address), 'utf-8', function (err) {
            if (err) throw err
            console.log('Done!');
        })
        console.log("Address created succesfully!");
    }
    /**
     * comaparing name of each object and sort alphabetically
     */
    compare1(a, b) {
        if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) {
            return -1;
        }
        if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) {
            return 1;
        }
        return 0;
    }
    sorting(address) {
        console.log(address.Person.sort(this.compare1));
    }
    /**
     * open profile for given name
     */
    openProfile(address) {
        var temp = -1;
        if (address.Person.length > 0) {
            for (var i = 0; i < address.Person.length; i++) {
                console.log(address.Person[i]);
            }

        }
        else {
            console.log("No profiles to display!!Please create a new profile!");
            this.createAddress();
        }
    }
    editProfile(address) {
        var temp = -1;
        if (address.Person.length > 0) {
            for (var i = 0; i < address.Person.length; i++) {
                console.log(address.Person[i]);
            }
            var edit = read.question("Enter the name of profile to edit : ");
            while (!this.getName(address).includes(edit)) {
                console.log("Name doesn't exist");
                edit = read.question("Enter an existing name : ");
            }
            for (var k = 0; k < address.Person.length; k++) {
                if (edit == address.Person[k].firstName) {
                    temp = k;
                    while (choiceOne != 5) {
                        console.log("What you want to do?");
                        console.log("1: Update");
                        console.log("2: Delete");
                        console.log("3: Sort");
                        console.log("4: Save");
                        console.log("5: Exit");
                        var choiceOne = read.questionInt("Enter your choice : ");
                        switch (choiceOne) {
                            case 1:
                                /**
                                 * update profile
                                 */
                                while (choiceTwo != 7) {
                                    console.log("What do you want to update? ");
                                    console.log("1: Street");
                                    console.log("2: City");
                                    console.log("3: State");
                                    console.log("4: Nationality");
                                    console.log("5: Zip code");
                                    console.log("6: Phone");
                                    console.log("7: Exit");
                                    var choiceTwo = read.questionInt("Enter your choice : ");
                                    switch (choiceTwo) {
                                        case 1:
                                            var streetUpdate = read.question("Enter the new street : ");
                                            if (!nameFormat.test(streetUpdate)) {
                                                console.log("Enter string only");
                                                streetUpdate = read.question("Enter the new street : ");
                                            }
                                            /**
                                             * update whole data after changes
                                             */
                                            var obj = {
                                                "firstName": address.Person[k].firstName,
                                                "lastName": address.Person[k].lastName,
                                                "address": {
                                                    "street": streetUpdate,
                                                    "city": address.Person[k]["address"].city,
                                                    "state": address.Person[k]["address"].state,
                                                    "nationality": address.Person[k]["address"].nation,
                                                    "zip": address.Person[k]["address"].zip,
                                                    "phoneNum": address.Person[k]["address"].phoneNum
                                                }
                                            }
                                            address.Person[k] = obj;
                                            /**
                                             * save into json every time after update
                                             */
                                            file.writeFileSync('addressBook1.json', JSON.stringify(address), 'utf-8');
                                            break;
                                        case 2:
                                            var cityUpdate = read.question("Enter the new city name : ");
                                            if (!nameFormat.test(cityUpdate)) {
                                                console.log("Enter string only");
                                                cityUpdate = read.question("Enter the new city name : ");
                                            }
                                            var obj = {
                                                "firstName": address.Person[k].firstName,
                                                "lastName": address.Person[k].lastName,
                                                "address": {
                                                    "street": address.Person[k]["address"].street,
                                                    "city": cityUpdate,
                                                    "state": address.Person[k]["address"].state,
                                                    "nationality": address.Person[k]["address"].nation,
                                                    "zip": address.Person[k]["address"].zip,
                                                    "phoneNum": address.Person[k]["address"].phoneNum
                                                }
                                            }
                                            address.Person[k] = obj;
                                            file.writeFileSync('addressBook1.json', JSON.stringify(address), 'utf-8');
                                            break;
                                        case 3:
                                            var stateUpdate = read.question("Enter the new state name: ");
                                            if (!nameFormat.test(stateUpdate)) {
                                                console.log("Enter string only");
                                                stateUpdate = read.question("Enter the new state name: ");
                                            }
                                            var obj = {
                                                "firstName": address.Person[k].firstName,
                                                "lastName": address.Person[k].lastName,
                                                "address": {
                                                    "street": address.Person[k]["address"].street,
                                                    "city": address.Person[k]["address"].city,
                                                    "state": stateUpdate,
                                                    "nationality": address.Person[k]["address"].nation,
                                                    "zip": address.Person[k]["address"].zip,
                                                    "phoneNum": address.Person[k]["address"].phoneNum
                                                }
                                            }
                                            address.Person[k] = obj;
                                            file.writeFileSync('addressBook1.json', JSON.stringify(address), 'utf-8');
                                            break;
                                        case 4:
                                            var nationalityUpdate = read.question("Enter the new nation name : ");
                                            if (!nameFormat.test(nationalityUpdate)) {
                                                console.log("Enter string only");
                                                nationalityUpdate = read.question("Enter the new nation name : ");
                                            }
                                            var obj = {
                                                "firstName": address.Person[k].firstName,
                                                "lastName": address.Person[k].lastName,
                                                "address": {
                                                    "street": address.Person[k]["address"].street,
                                                    "city": address.Person[k]["address"].city,
                                                    "state": address.Person[k]["address"].state,
                                                    "nationality": nationalityUpdate,
                                                    "zip": address.Person[k]["address"].zip,
                                                    "phoneNum": address.Person[k]["address"].phoneNum
                                                }
                                            }
                                            address.Person[k] = obj;
                                            file.writeFileSync('addressBook1.json', JSON.stringify(address), 'utf-8');
                                            break;
                                        case 5:
                                            var zipUpdate = read.question("Enter the new zip code: ");
                                            if (!contactFormat.test(zipUpdate)) {
                                                console.log("Enter numbers only");
                                                zipUpdate = read.question("Enter the new zip code: ");
                                            }
                                            var obj = {
                                                "firstName": address.Person[k].firstName,
                                                "lastName": address.Person[k].lastName,
                                                "address": {
                                                    "street": address.Person[k]["address"].street,
                                                    "city": address.Person[k]["address"].city,
                                                    "state": address.Person[k]["address"].state,
                                                    "nationality": address.Person[k]["address"].nation,
                                                    "zip": zipUpdate,
                                                    "phoneNum": address.Person[k]["address"].phoneNum
                                                }
                                            }
                                            address.Person[k] = obj;
                                            file.writeFileSync('addressBook1.json', JSON.stringify(address), 'utf-8');
                                            break;
                                        case 6:
                                            var phoneNumberUpdate = read.question("Enter the new phone number: ");
                                            if (!contactFormat.test(phoneNumberUpdate) || phoneNumberUpdate.length != 10) {
                                                console.log("Invalid input! Phone number must be 10 digits");
                                                phoneNumberUpdate = read.question("Enter the new phone number: ");
                                            }
                                            var obj = {
                                                "firstName": address.Person[k].firstName,
                                                "lastName": address.Person[k].lastName,
                                                "address": {
                                                    "street": address.Person[k]["address"].street,
                                                    "city": address.Person[k]["address"].city,
                                                    "state": address.Person[k]["address"].state,
                                                    "nationality": address.Person[k]["address"].nation,
                                                    "zip": address.Person[k]["address"].zip,
                                                    "phoneNum": phoneNumberUpdate
                                                }
                                            }
                                            address.Person[k] = obj;
                                            file.writeFileSync('addressBook1.json', JSON.stringify(address), 'utf-8');
                                            break;
                                        case 7:
                                            console.log("Exiting.....");
                                            break;

                                    }
                                }

                                break;
                            case 2:
                                /**
                                 * to delete profile
                                 */
                                var edit = read.question("Please enter the index you want to delete: ");
                                delete address.Person[edit];
                                for (var k = 0; k < address.Person.length; k++) {
                                    if (address.Person[k] == null) {
                                        address.Person.splice(k, 1);
                                    }
                                }
                                /**
                                 * write file
                                 */
                                file.writeFileSync('addressBook1.json', JSON.stringify(address), 'utf-8', function (err) {
                                    if (err) throw err
                                    console.log('Done!')
                                })
                                break;
                            case 3:
                                /**
                                 * sort the profile by name
                                 */
                                this.sorting(address);
                                file.writeFileSync('addressBook1.json', JSON.stringify(address), 'utf-8');
                                break;
                            case 4:
                                /**
                                 * save file into json
                                 */
                                function save() {
                                    file.writeFileSync('addressBook1.json', JSON.stringify(address), 'utf-8', function (err) {
                                        if (err) throw err
                                        console.log('File Saved!!')
                                    })
                                }
                                save();
                                break;
                            case 5:
                                console.log("Exiting.....");
                                //address();
                                break;
                            default:
                                console.log("Enter choice within 1-5");
                                break;
                        }
                    }

                }


            }
            if (temp == -1) {
                /**
                 * check if name is available in json or not
                 */
                console.log("Profile unavailable!!Please create new one.");
                //address();
            }
        }
        else {
            console.log("No profiles to display!!Please create a new profile!");
            this.createAddress();
        }
    }

}
module.exports = { Address }