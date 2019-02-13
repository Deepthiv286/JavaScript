var file = require("fs");
var read = require("readline-sync");
var utiltiy = require("../../UtilProgs/companySharesStack");
function company() {
  try {
    var com = new utiltiy.CompanySharesStack;
    /**
     * Loop the company array objects and add it to stack.
     */
    outer: while (true) {
      console.log("1. Add");
      console.log("2. Remove");
      console.log("3. Print");
      console.log("4. Exit");
      var choice = read.questionInt("Enter your choice :");
      while(choice<0)
      {
          console.log("Enter positive value");
      }
      /**
       * Switch to choose the case to add,remove and
       * print
       */
      while(choice!=4){
      switch (choice) {
        case 1:
          com.addToStack();
          break;
        case 2:
          com.removeFromStack();
          break;
        case 3:
          com.print();
          break;
        case 4:
          console.log("Exiting.....");
          break;
        default:
          console.log("Enter choice within 1-4");
          break;
      }
    }
    }
  } catch (err) {
    console.log(err.message);
  }
}
company();