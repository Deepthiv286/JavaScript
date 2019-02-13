/****************************************************************
 * 
 * Execution    :Default node   cmd>node utility.js
 * Purpose      :To create file io.
 * 
 * @description
 * @file        :uility.js
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :31/01/2019
 * 
 ***************************************************************/
const readLine = require('readline-sync');
/*
*accepts userinput
*/

module.exports =
{
    /*
    *@purpose : To read file from the path
    *@function : Reads the file performs the mentioned operation 
    */
   fileRead(fileName)
   {
       try {
        var fileStream = require('fs');
        var f = fileStream.readFileSync(fileName,'utf8');
        var arr = f.trim().split(' ');
        return arr;
       } catch (error) {
           console.log(error.message);   
       }
   },
   /*
    *@purpose : To write to the file
    *@function : Writes data to the file 
    */
   fileWrite(fileName,data)
   {
       try {
        var fs = require('fs');
        fs.writeFile(fileName,data,function (err)
        {
            if(err)
            {
                return console.log(err);
                
            }
        });
       } catch (error) {
           console.log(error.message);
           
       }
   },
}