/****************************************************************
 * 
 * Execution    :Default node   cmd>node utility.js
 * Purpose      :To deploy all the business logic
 * 
 * @description
 * @file        :utility.js
 * @overview    :All functions with business logic are coded here
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :24/01/2019
 * 
 ***************************************************************/
const readline = require('readline-sync');
/*
 *accepts userinput
*/

module.exports = {
    /************************* Functional Programs ********************/
    /***** Replace String *****/
    /*
     *1.Replace String
     *
     *@purpose: Replace the username with userinput.
     *@param: Pass the name from userinput as arguement to the declared function.
     *@function: Accepts input from the user,checks if it is more than 3 characters 
     *           and is not a number,then displays the string with userinput. 
     * 
    */
    getStringReplace(username) //takes userinput
    {
        try {
            var format = /[a-zA-Z]/;
            //checks if it has minimun 3 characters and is not a number
            if (username.length >= 3 && isNaN(username) && format.test(username)) {
                var input = "Hello <<username>> , how are you?";
                /*
                *replaces username with userinput
                */
                var output = input.replace(/<<username>>/g, username); //Regex
                console.log(output);
            }
            else {
                console.log("enter name more than three characters..should not be a number");
            }
        }
        catch (error) {
            console.log(error.message);
        }
    },

    /***** Flip coins *****/
    /*
     *2. Flip Coins
     *
     * @purpose: Using Random Function to calculate the percentage of heads and tails.
     * @param: Pass number of flips from the userinput as arguement to the declared function.
     * @function: Accepts input from user,checks if it is a positive integer.
     *            using random value checks if it is less than 0.5 then displays
     *            the percentage of heads and tails.
     * 
    */
    flipCoin(flips) //takes userinput
    {
        try {
            /*
            *initialize head and tail as 0
            */
            var tail = 0;
            var head = 0;
            //loops till i reaches the number of flips
            for (let i = 0; i < flips; i++) {
                /*
                *checks if the userinput is a positive integer
                */
                if (flips > 0) {
                    var random = Math.random(); //creates a random value
                    /*
                    *checks if random value is less than 0.5
                    *if yes tail is incremented,if no head is incremented
                    */
                    if (random < 0.5) {
                        tail++;
                    }
                    else
                        head++;
                }
                else {
                    console.log("Enter a positive integer");
                }
            }
            /*
            *calculate the percentage of head and tail
            */
            var PercentageOfTail = (tail / flips) * 100;
            console.log("Percentage of tail = " + PercentageOfTail + "%");
            var PercentageOfHead = (100 - PercentageOfTail);
            console.log("Percentage of head = " + PercentageOfHead + "%");
        }
        catch (error) {
            console.log(error.message);
        }
    },

    /***** Leap Year *****/
    /*
     *3. Leap Year
     *
     * @purpose: To determine it is a leap year or not.
     * @param: Declaring the function and passing 4 digit year from the 
     *               userinput as arguement.
     * @function: Accepts input from user,checks if it a 4 digit number.
     *            displays whether it is a leap year or not after checking the condition.
     * 
     * 
    */
    isLeapYear(year) {//takes userinput
        try {
            /*
            *checks if the userinput is a 4 digit number
            */
            if (year.length == 4 && year > 0 && !isNaN(year)) {
                /*
                *checks if the userinput is a leap year
                */
                if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
                    console.log("It is a leap year");
                }
                else {
                    console.log("It is not a leap year");
                }
            }
            else {
                console.log("Enter a 4 digit number");
            }
        }
        catch (error) {
            console.log(error.message);
        }
    },


    /***** Power Of Two *****/
    /*
     *4. Power Of Two
     *
     * @purpose: To print a table of the powers of 2 that are less than or equal to 2^N.
     * @param: Passing a number for power of two from the userinput as arguement to the declared function.              
     * @function: Takes command-line arguement,checks if the number is greater than equal
     *            to 0 and less than 31. displays the table of powers of two
     *            that are less than or equal to 2^N.
     * 
     * 
    */
    getPowerOfTwo() {
        try {
            var format = /[0-9]/;
            /*
            *takes command-line arguement
            */
            var num = process.argv[2];
            /*
            *checks if the number lies between 0 and 31
            */
            if (num >= 0 && num < 31 && !isNaN(num) && format.test(num)) {
                /*
                *loops till i reaches the given number
                */
                for (var i = 0; i <= num; i++) {
                    /*
                    *performing power function
                    */
                    var power = Math.pow(2, i);
                    console.log("2^" + i + "=" + power);
                }
            }
            else {
                console.log("Enter power value 0<=N<31(between 0 to 31)...should be a number only");
            }
        }
        catch (error) {
            console.log(error.message);
        }
    },


    /***** Harmonic Number *****/
    /*
     *5. Harmonic Number
     *
     * @purpose: To compute and print the nth harmonic value.
     * @param: Pass harmonic value N from userinput as arguement 
     *               to a function.
     * @function: Accepts userinput,checks if a number is not equal to zero.
     *            computes and displays the nth harmonic value.
     * 
     * 
    */
    getHarmonicValue(num) {//takes userinput
        try {
            /*
            *initializing sum as 0
            */
            var sum = 0;
            //checks if it is a number and it is not equal to zero
            if (num != 0 && !isNaN(num)) {
                /*
                *loops till i reaches the given number
                */
                for (let i = 1; i <= num; i++) {
                    /*
                    *performes addition of previous sum with 1/i value
                    */
                    sum = sum + (1 / i);
                    console.log(sum);
                }
                console.log("The nth harmonic number is : " + sum);
            }
            else {
                console.log("Enter a number greater than 0");
            }
        }
        catch (error) {
            console.log(error.message);
        }
    },


    /***** Prime Factorization *****/
    /*
     *6. Prime Factorization
     *
     * @purpose: To print the prime factors of a number.
     * @param: Pass a number from the userinput as arguement to a function
     *               for prime factorization.
     * @function: Accepts userinput,traverse till i*i<=num 
     *            and displays the prime factors of a number.
     * 
     * 
    */
    getPrimeFactors(num) //takes userinput
    {
        try {
            /*
            *loops till i*i is less than or equal to the given number
            */
            for (let i = 2; i * i <= num; i++) {
                /*
                *repeats till the number is divisible by i
                */
                while (num % i == 0) {
                    console.log(i);
                    num /= i;
                }
                //checks if the number is greater than 2 and prints it
                if (num > 2) {
                    console.log(num);
                }
            }
        }
        catch (error) {
            console.log(error.message);
        }
    },

    /***** Gambler *****/
    /*
     *7. Gambler
     *
     * @purpose: To print the number of wins and percentage of win and loss.
     * @param: Pass stake and goal amount and number of times bets placed as input to the declared function.
     * @function: Checks if stake is less than or equal to goal then generates random value.
     *            Displays number of wins and percentage of win and loss.
     * 
    */
    playGambling(stake, goal, times) {
        try {//initializing win and loss as 0
            var win = 0, loss = 0;
            for (let i = 0; i <= times; i++) {
                /*
                *repeats till stake is less than goal
                */
                while (stake > 0 && stake <= goal) {
                    times++;
                    /*
                    *generates random value
                    */
                    var random = Math.random();
                    /*
                    *checks if random value is greater than 0.5 then increments/decrements staake,win,loss accordingly
                    */
                    if (random > 0.5) {
                        stake++;
                        win++
                    }
                    else {
                        stake--;
                        loss++;
                    }
                }
            }
            console.log("Number of wins = " + win);
            /*
            *calculates the percentage of win and loss
            */
            var percentageOfWin = (win / times) * 100;
            var percentageOfLoss = (loss / times) * 100;
            console.log("Percentage of win " + percentageOfWin + "%");
            console.log("Percentage of loss " + percentageOfLoss + "%");
        }
        catch (error) {
            console.log(error.message);
        }
    },

    /***** Coupon Numbers *****/
    /*
     *8. Coupon Numbers
     *
     * @purpose: To generate random numbers all having distinct numbers.
     * @param: Given N distinct coupon numbers generate random value for distinct coupon numbers.
     * @function: Repeatedly choose a random number and check whether it's a new one.
     *            Display total random number needed to have all distinct numbers.
     * 
     * 
     */
    getCouponNumbers(num) {
        try {//initializing count as 0
            var count = 0;
            /*
            *initializing an empty array
            */
            var arr = [];
            while (count < num) {//repeats till count is less than the given number
                /*
                *generates random numbers between 1-10000;
                */
                var random = Math.round(Math.random() * 10000);
                if (!arr.includes(random)) {
                    /*
                    *checks if the random value already exists in the array
                    *if it doesn't exist then the value is pushed to the array
                    */
                    arr.push(random);
                }
                count++;
            }
            console.log(arr);
            return count;

        }
        catch (error) {
            console.log(error.message);
        }
    },

    /***** 2DArray *****/
    /*
    *9. 2DArray
    *
    *@purpose: To print 2 dimensional array.
    *@param: pass rows,columns and element from user to the function and print the output.
    *@function: create 2 dimensional array in memory to read in M rows and N cols and print the output to the screen.
    *
    *
    */
    print2DArray(row, col, read) {
        try {//initializing empty array
            var arr = [];
            /*
            *loop for number of rows
            */
            for (let i = 0; i < row; i++) {  /*
                *elements added to the array
                */
                arr.push([]);
                /*
                *loop for number of columns
                */
                for (let j = 0; j < col; j++) {
                    var element = read.questionInt("Enter the array elements : ");
                    arr[i][j] = element;
                }
            }
            console.log(arr);
        }
        catch (error) {
            console.log(error.message);
        }
    },

    /***** Sum Of Three Integers *****/
    /*
    *10. Sum Of Three Integers
    *
    *@purpose: To print the distinct triplets.
    *@param: Read in N integers and counts the number of triples that sum to exactly 0.
    *@function: Find distinct triples (i, j, k) such that a[i] + a[j] + a[k] = 0 and print the distinct triplets.
    *
    */
    printTriplets(arr) {
        try {//initializing sum to 0
            var sum = 0;
            /*
            *checks if array length is not equal to zero
            */
            if (arr.length != 0) {
                for (let i = 0; i < arr.length - 2; i++) {
                    for (let j = i + 1; j < arr.length - 1; j++) {
                        for (let k = j + 1; k < arr.length; k++) {
                            /*
                            *checks if the sum of arr[i]+arr[j]+arr[k] is equal to zero
                            */
                            if (arr[i] + arr[j] + arr[k] == sum) {
                                console.log(arr[i] + "," + arr[j] + "," + arr[k]);

                            }
                        }
                    }
                }
            }
            else {
                console.log("enter atleast one");
            }
        }
        catch (error) {
            console.log(error.message);
        }
    },

    /***** Distance *****/
    /*
     *11. Distance
     *
     * @purpose: To calculate and print the Euclidean distance from the point (x, y) to the origin (0, 0).
     * @param: Pass two numbers as arguements to the declared function.
     * @function: Accepts command-line arguement. using distance formula calculate and display the result.
     * 
     * 
     * 
     */
    printDistance() {
        try {
            var format = /[0-9]/;
            /*
            *accepts command-line arguments for x and y value
            */
            var x = process.argv[2];
            var y = process.argv[3];
            if (format.test(x) && format.test(y)) {
                //calculate euclidean distance using distance formula
                var distance = Math.sqrt((x * x) + (y * y));
                console.log("Euclidean distance is : " + distance);
            }
            else {
                console.log("Enter numbers only");
            }
        }
        catch (error) {
            console.log(error.message);
        }
    },

    /***** Permutation Of A String *****/
    /*
     *12. Permutation Of A String
     *
     *@purpose: To return all permutation of a string using iterative method and recursion method. 
     *@param: Pass a string as arguement to a function. 
     *@function: Check if the arrays returned by two string functions are equal. 
     *           Return all permutation of a string.
     * 
     * 
    */
    getPermutation(str) {
        try {
            var format = /[a-zA-Z]/;
            if (format.test(str)) {
                /*
            *creates an empty array
            */
                var arr = [];
                /*
                *checks if the string length is equal to 1.
                *if yes then adds the string to the array and returns it
                */
                if (str.length == 1) {
                    arr.push(str);
                    return str;
                }
                /*
                *if the string length is not equal to 1 then string is permuted recursively
                */
                for (let i = 0; i < str.length; i++) {
                    var firstChar = str[i];
                    var perm1 = str.substring(0, i) + str.substring(i + 1);
                    var permutation = this.getPermutation(perm1);
                    for (let j = 0; j < permutation.length; j++) {
                        arr.push(firstChar + permutation[j]);
                    }
                }
                return arr;
            }
            else {
                console.log("Enter string only");
            }
        }
        catch (error) {
            console.log(error.message);
        }
    },

    /***** Stop Watch *****/
    /*
     *13. Stop Watch
     *
     *@purpose: To print the elapsed time.
     *@description: Measuring the time that elapses between the start and end clicks.
     *@function: Using getSeconds() start and stop the time then display the elapsed time. 
     *  
     * 
    */
    getElapsedTime() {
        try {
            /*
            *creates date object
            */
            var date1 = new Date();
            var startTime = readline.question("Press enter to start time");
            /*
            *by clicking once start the time using getSeconds() method
            */
            var start = date1.getSeconds();
            /*
            *creates another date object
            */
            var date2 = new Date();
            var stopTime = readline.question("Press enter to stop time");
            /*
            *by clicking again stop the time using getSeconds() method of another object
            */
            var stop = date2.getSeconds();
            /*
            *calculate the elapsed time by taking the difference between the two times
            */
            console.log("Elapsed time = " + (stop - start) + "secs");
        }
        catch (error) {
            console.log(error.message);
        }
    },

    /***** Tic-Tac-Toe Game *****/
    /*
     *14.Tic-Tac-Toe Game
     *
     *@purpose: To play a cross game or tic-tac-toe game. 
     *@param: Take userinput for the cell i.e. col and row to mark the ‘X’ 
     *              Player 1 is the computer and the player 2 is the user. Player 1 take random cell that is the column and row.
     *@function: The user or the computer can only take the unoccupied cell. The game
     *           is played till either wins or till draw.Print the col and the cell after every step. 
     * 
     * 
     */
    deployGame() {
        try {
            /*
            *initializing an empty array
            */
            var game = [];
            for (let i = 0; i <= 2; i++) {
                /*
                *loops and adds "-" to all the rows and columns
                */
                game.push([]);
                for (let j = 0; j <= 2; j++)
                    game[i][j] = '-';
            }
            return game;
        } catch (error) {
            console.log(error.message);
        }
    },

    random() {
        /*
        *function to generate random value
        */
        try {
            var value = Math.floor(Math.random() * 3);
            console.log(value + 1);
            return value;
        } catch (error) {
            console.log(error.message);

        }

    },

    mark(game, x, y, value) {
        /*
        *function to mark the game with the value
        */
        try {
            if (game[x][y] == '-')
                game[x][y] = value;
            for (let i = 0; i <= 2; i++) {
                var print = [];
                for (let j = 0; j <= 2; j++)
                    print[j] = game[i][j];
                console.log(print);
            }
            return game;
        } catch (error) {
            console.log(error.message);

        }

    }
    ,
    computerPlayer(game) {
        /*
        *function for the computer to play the game
        */
        try {
            var arr;
            var flag = false;
            while (flag == false) {
                /*
                *repeats till the flag is equal to false
                */
                var x = this.random();
                var y = this.random();
                if (game[x][y] == '-') {
                    arr = this.mark(game, x, y, 'O');
                    /*
                    *marking "O" in that position
                    */
                    flag = true;
                }
            }
            return game;
        } catch (error) {
            console.log(error.message);

        }

    },
    userPlayer(game) {
        /*
        *function for the player to play the game
        */
        try {
            var flag = false;
            while (flag == false) {
                /*
                *repeats till the flag is equal to false
                */
                console.log("Enter the row value:");
                let x = readline.questionInt('Enter the value of x within 1,2,3 : ') - 1;
                let y = readline.questionInt('Enter the value of y within 1,2,3 : ') - 1;
                if (game[x][y] == '-') {
                    this.mark(game, x, y, 'X');
                    /*
                    *marking "X" in that position
                    */
                    flag = true;
                }
                else
                    console.log("Please enter the correct choice");
            }
            return game;
        } catch (error) {
            console.log(error.message);
        }
    },
    check(game) {
        /*
        *function to check how many rows and columns are filled with "O" and "X"
        */
        try {
            for (let i = 0; i <= 2; i++) {
                if (game[i][0] == game[i][1] && game[i][1] == game[i][2]) {
                    if (game[i][0] == 'O' || game[i][0] == 'X') {
                        /*
                        *checks if "O" and "X" is in that position
                        */
                        return true;
                    }
                }
                if (game[0][i] == game[1][i] && game[1][i] == game[2][i]) {
                    if (game[0][i] == 'O' || game[0][i] == 'X') {
                        return true;
                    }
                }
            }
            /*
            *determines who has won the game:computer or the player
            */
            var k = 0, l = 0;
            if (game[k][k] == game[k + 1][k + 1] && game[k + 1][k + 1] == game[k + 2][k + 2]) {
                if (game[0][0] == 'O' || game[0][0] == 'X') {
                    return true;
                }
            }
            if (game[l][l + 2] == game[l + 1][l + 1] && game[l + 1][l + 1] == game[l + 2][l]) {
                if (game[0][0] == 'O' || game[0][0] == 'X') {
                    return true;
                }
            }
            return false;
        } catch (error) {
            console.log(error.message);
        }
    },

    /***** Quadtratic *****/
    /*
    *15.Quadratic
    *
    *@purpose: To find the roots of x.
    *@param: Pass three input values as arguements to the function.
    *@function: Find the roots of the equation a*x*x + b*x + c using,a formula
    *           delta = b*b ­ 4*a*c
    *           Root 1 of x = (­b + sqrt(delta))/(2*a)
    *           Root 2 of x = (­b ­ sqrt(delta))/(2*a)
    *           Display the roots of x.
    */
    printQuadraticRoots(a, b, c) {
        try {//calculates delta value
            var delta = b * b - (4 * a * c);
            /*
            *checks for real and equal roots
            */
            if (delta == 0) {
                var d1 = -b / (2 * a);
                console.log(d1);
            }
            /*
            *checks for real and distinct roots
            */
            else if (delta > 0) {
                var root1 = (-b + Math.sqrt(delta)) / (2 * a);
                var root2 = (-b - Math.sqrt(delta)) / (2 * a);
                console.log(root1);
                console.log(root2);
            }
            /*
            *checks for real and imaginary roots
            */
            else if (delta < 0) {
                var real = -b / (2 * a);
                var imaginary = Math.sqrt(-delta) / (2 * a);
                console.log("root1 " + real + "+" + imaginary + "i");
                console.log("root2 " + real + "-" + imaginary + "i");
            }
            else {
                console.log("try again");
            }
        }
        catch (error) {
            console.log(error.message);
        }
    },

    /***** WindChill  *****/
    /*
     *16. WindChill
     *
     *@purpose: To print windchill.
     *@param: Pass two command-line arguements.
     *@function: Checks if absolute value of temperature is less than 50 and 
     *           velocity lies between 3 to 120.Calculate windchill using the   
     *           formula w = 35.74+0.6215*t+((0.4275*t)-35.75)*v^0.16 and display the result.
     * 
     * 
    */
    printWindChill() {
        try {
            var format = /[0-9]/;
            /*
            *accepts command-line arguements for temperature and velocity.
            */
            var temp = process.argv[2];
            var vel = process.argv[3];
            /*
            *checks if absolute value of temperature is less than 50 and 
            *velocity lies between 3 to 120.
            */
            if (Math.abs(temp < 50) && vel < 120 && vel > 3 && format.test(temp) && format.test(vel)) {
                //apply windchill formula
                var w = 35.74 + (0.6215 * temp) + (((0.4275 * temp) - 35.75) * (Math.pow(vel, 0.16)));
                console.log(w);
            }
            else {
                console.log("Enter valid inputs ");

            }
        }
        catch (error) {
            console.log(error.message);

        }
    },
    /************************* Functional Programs ********************/
}

