/****************************************************************
 * 
 * Execution    :Default node   cmd>node stock.js
 * Purpose      :To print the stock report.
 * 
 * @description
 * @file        :stock.js
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :07/02/2019
 * 
 ***************************************************************/
/***** Stock Report *****/
/*
 *3. Stock Report
 *
 *@purpose: To create Stock class.
 *
 * 
*/
class Stock
{
    constructor(name,numOfShares,sharePrice)
    {
        this.name = name;
        this.numOfShares = numOfShares;
        this.sharePrice = sharePrice;
    }
    /*
    *calculates the value of each stock
    */
    stockValue()
    {
        return this.numOfShares*this.sharePrice;
    }
}
module.exports = {
    Stock,
  
}