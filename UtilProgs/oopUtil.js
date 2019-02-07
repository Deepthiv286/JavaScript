/****************************************************************
 * 
 * Execution    :Default node   cmd>node oopUtil.js
 * Purpose      :To deploy all the business logic
 * 
 * @description
 * @file        :oopUtil.js
 * @overview    :All functions with business logic are coded here
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :07/02/2019
 * 
 ***************************************************************/
module.exports = {
    /***** JSON Inventory Data Management *****/
    /*
     *1. JSON Inventory Data Management
     *
     * @purpose: To create the JSON from inventory object and output the JSON string.
     * @param: Pass the inventory details as arguements to the function.
     * @function: Create a JSON file having inventory details for rice, pulses and wheats
     *            with properties name, weight, price per kg.
     * 
    */
    inventory(object)
    {
        var rice = object.Rice;
        var pulses = object.Pulses;
        var wheat = object.Wheat;
        console.log("Rice");
        for(let key in rice){
            console.log("Cost of "+rice[key].name+" for "+rice[key].weight+"kg = "+rice[key].weight*rice[key].price+"/-");   
        }
        console.log("Pulses");
        for(let key in pulses){    
            console.log("Cost of "+pulses[key].name+" for "+pulses[key].weight+"kg = "+pulses[key].weight*pulses[key].price+"/-");   
        }
        console.log("Wheat");
        for(let key in wheat){
            console.log("Cost of "+wheat[key].name+" for "+wheat[key].weight+"kg = "+wheat[key].weight*wheat[key].price+"/-");   
        }
    },

    /***** Regular Expression Demonstration *****/
    /*
     *2. Regular Expression Demonstration
     *
     * @purpose: To print the modified message.
     * @param: Pass the contents to replace message as arguement to the function.
     * @function: Read in the following message: Hello <<name>>, We have your full
     *            name as <<full name>> in our system. your contact number is 91­xxxxxxxxxx.
     *            Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016.
     *            Use Regex to replace name, full name, Mobile#, and Date with proper value.
     * 
    */
    replaceUsingRegex(name,fullName,mobileNumber)
    {
        var inputName = "Hello <<name>>,";
        var inputFullName = "We have your full name as <<full name>> in our system.";
        var inputNumber = "\nYour contact number is 91­-xxxxxxxxxx.";
        var inputDate = "\nPlease,let us know in case of any clarification. \nThank you BridgeLabz 01.01.2016.";
        var replaceName = inputName.replace(/<<name>>/g,name );
        var replaceFullName = inputFullName.replace(/<<full name>>/g,fullName);
        var replaceNumber = inputNumber.replace(/xxxxxxxxxx/g,mobileNumber);
        var day = new Date();
        date = day.toDateString();
        var replaceDate = inputDate.replace(/01.01.2016/g,date);
        console.log(replaceName+replaceFullName+replaceNumber+replaceDate);
        
    },

    /***** Stock Report *****/
    /*
     *3.Stock Report
     *
     *@purpose: To print the stock report.
     *@param: Pass N number of stocks, for each stock read in the share name, number of
     *        share, and share price.
     *@function: Create stock and stock portfolio class holding the list of stocks read
     *           from the input file. Have functions in the class to calculate the value of each
     *           stock and the value of total stocks. 
     * 
    */
   stockReport()
   {
       
   }

}
