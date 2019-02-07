/****************************************************************
 * 
 * Execution    :Default node   cmd>node inventoryDataManagement.js
 * Purpose      :To create the JSON from inventory object and output the JSON string.
 * 
 * @description
 * @file        :inventoryDataManagement.js
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :07/02/2019
 * 
 ***************************************************************/
var access = require('../UtilProgs/oopUtil');
var fs = require('fs');
var data = fs.readFileSync('inventoryDetails.json', 'utf8');
var details = JSON.parse(data);
//console.log(details);
inventoryManagement()
{
    access.inventory(details);
}
inventoryManagement();