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