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
     *@description: Pass the name from userinput as arguement to the declared function.
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
     * @description: Pass number of flips from the userinput as arguement to the declared function.
     * @function: Accepts input from user,checks if it is a positive integer.
     *            using random value checks if it is less than 0.5 then displays
     *            the percentage of heads and tails.
     * 
    */
    flipCoin(flips) //accepts userinput
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
     * @description: Declaring the function and passing 4 digit year from the 
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
     * @description: Passing a number for power of two from the userinput as arguement to the declared function.              
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
     * @description: Pass harmonic value N from userinput as arguement 
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
     * @description: Pass a number from the userinput as arguement to a function
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
     * @description: Pass stake and goal amount and number of times bets placed as input to the declared function.
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
     * @description: Given N distinct coupon numbers generate random value for distinct coupon numbers.
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
    *@description: pass rows,columns and element from user to the function and print the output.
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
                    var element = read.question("Enter the array elements : ");
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
    *@description: Read in N integers and counts the number of triples that sum to exactly 0.
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
     * @description: Pass two numbers as arguements to the declared function.
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
     *@description: Pass a string as arguement to a function 
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
     *@description: Take userinput for the cell i.e. col and row to mark the ‘X’ 
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
    *@description: Pass three input values as arguements to the function.
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
     *@description: Pass two command-line arguements.
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

    /************************* Algorithm Programs ********************/
    /***** Anagram Detection *****/
    /*
     *1. Anagram Detection
     *
     * @purpose: To determine two strings are anagram or not.
     * @description: Pass two strings as input to the function as arguements.
     * @function: Two strings are lower cased and sorted so that if the second string 
     *            is a rearrangement of the first string,they are determined as anagrams.
     * 
    */
    anagram(string1, string2) {
        try {
            var format = /[a-zA-Z0-9]/;
            var result = false;
            /*
            *checks if strings are within the given format
            */
            if (format.test(string1) && format.test(string2)) {
                /*
                *checks if both strings are of equal length
                */
                if (string1.length == string2.length) {
                    /*
                *splits the given strings and sorts them
                */
                    var sort1 = string1.toString().split("").sort().join("");
                    var sort2 = string2.toString().split("").sort().join("");
                    result = sort1 == sort2;
                }
                else {
                    console.log("Strings length must be of equal length");
                }

                /*
                *checks if one string is an anagram of another
                */
                if (result == true) {
                    console.log(string1 + " and " + string2 + " are anagram");
                }
                else {
                    return false;
                }
            }
            else {
                console.log("Enter only string");

            }
        }
        catch (error) {
            console.log(error.message);
        }
    },

    /***** Prime Numbers *****/
    /*
     *2. Prime Numbers
     *
     *@purpose: To print prime numbers in the given range.
     *@description: Take a range of 0 -­ 1000 numbers and find the prime numbers in that range. 
     *@function: Displays prime numbers in the given range(0-1000). 
     * 
     * 
     * 
    */
    isPrime(num) {
        try {
            /*
            *checks if number is equal to 0 or 1
            */
            if (num == 0 || num == 1)
                return false;
            for (let i = 2; i < num; i++) {
                /*
                *checks if the number is divisible by i
                */
                if (num % i == 0)
                    return false;
            }
            return true;
        }
        catch (error) {
            console.log(error.message);
        }
    },
    prime() {
        try {
            console.log("Prime numbers from 0 to 1000 are :");
            /*
            *loops from 0-1000 and checks if it is a prime number
            */
            for (i = 0; i <= 1000; i++) {
                if (this.isPrime(i)) {
                    console.log(i);
                }
            }
        }
        catch (error) {
            console.log(error.message);
        }
    },

    /***** Anagram and Palindrome *****/
    /*
     *3. Anagram and Palindrome
     *
     *@purpose: To find the prime numbers that are anagram and palindrome. 
     *@description: pass the numbers as arguements to the function and print anagram and palindrome numbers. 
     *@function: Checks if the number is a prime number and displays if it is an anagram or palindrome.  
     * 
     */
    isNumberPalindrome(num) {
        try {
            var rev = "";
            var num1 = num;
            while (num != 0) {
                /*
                *logic to get reverse of a number
                */
                var digit = num % 10;
                rev = rev + digit;
                num = num / 10;
            }
            if (rev == num1) {//checks if reverse of a number is equal to the original number
                console.log(arr[i] + " is a palindrome");
            }
            return false;
        }
        catch (error) {
            console.log(error.message);

        }

    },
    isAnagramPalindrome() {
        try {
            var arr = [];
            /*
            *loops from 0-1000
            */
            for (let i = 0; i < 1000; i++) {
                /*
                *checks if a number is prime and then pushes to the array
                */
                if (this.isPrime(i)) {
                    arr.push(i);
                }
            }
            for (let i = 0; i < arr.length; i++) {
                for (let j = i + 1; j < arr.length; j++) {
                    //checks if numbers are anagram
                    if (this.anagram(arr[i], arr[j])) {
                        console.log(arr[i] + " and " + arr[j] + " are anagram");
                        //checks if number is a palindrome
                        if (this.isNumberPalindrome(arr[i])) {
                            console.log(arr[i] + " is a palindrome");
                        }
                    }
                }
            }
        }
        catch (error) {
            console.log(error.message);
        }
    },

    /*
    *function for binary search of integer value
    */

    binarySearchInt(arr, searchInt) {
        try {
            var low = 0;
            var high = arr.length - 1;
            while (low <= high) {
                /*
                *calculates middle value
                */
                var mid = low + Math.floor((high - low) / 2);
                /*
                *checks if int value is in that position
                */
                if (Number(arr[mid]) == searchInt)
                    return true;
                else if (Number(arr[mid]) < searchInt)
                    low = mid + 1;
                else
                    high = mid - 1;
            }
            return false;
        } catch (error) {
            console.log(error.message);
        }
    },

    /*
    *function for binary search of a string
    */
    binarySearchString(arr, string) {
        try {
            var format = /[a-zA-Z]/;
            if (format.test(string) && format.test(arr)) {
                arr.sort();
                console.log(arr);

                var low = 0;
                var high = arr.length - 1;
                while (low <= high) {
                    /*
                   *calculates middle value
                   */
                    var mid = low + Math.floor((high - low) / 2);
                    /*
                    *checks if string value is in that position
                    */
                    if (arr[mid] == string)
                        return true;
                    else if (arr[mid] < string)
                        low = mid + 1;
                    else
                        high = mid - 1;

                }
                return false;
            }
            else {
                console.log("Enter string only");
            }
        } catch (error) {
            console.log(error.message);
        }
    },

    /***** Find Your Number */
    /*
     *5. Find Your Number
     *
     *@purpose: To print the intermediary number and the final answer.
     *@description: Takes a command­line argument N, asks you to think of a number
     *              between 0 and N­1, where N = 2^n, and always guesses the answer 
     *              with n questions.
     *@function: Using binary search to find the number and print it.
     *  
     */
    findYourNumber(low, high, read) {
        try {
            var format = /[0-9]/;
            if (format.test(low, high)) {
                var middle = low + Math.floor((high - low) / 2);
                var m;
                if (low < high) {
                    if (low == high - 1) {
                        m = read.question("Is the number " + low + " low, If yes type-yes...if number is high type-no" + " ");
                        if (m == "yes")
                            return low;
                        if (m == "no")
                            return high;
                    }
                    m = read.question("Is the number in the range " + middle + "-" + high + " Type yes or no" + " ");
                    if (m == "yes")
                        middle = this.findYourNumber(middle, high, read);
                    if (m == "no")
                        middle = this.findYourNumber(low, middle - 1, read);
                }
                return middle;
            }
        }
        catch (error) {
            console.log(error.message);
        }
    },

    /***** Binary Search Word *****/
    /*
    *6. Binary Search Word
    *
    *@purpose: Print the result if the word is found or not. 
    *@description: Read in the list words comma separated from a file and then enter the word to be searched. 
    *@function: Read in a list of words from File. Then prompt the user to enter a word to
    *           search the list. The program reports if the search word is found in the list. 
    * 
    */
    binarySearchFile() {
        try {
            var arr = [];
            var search = readline.question("Enter the word to search : ");
            const fs = require('fs');
            fs.readFile('file.txt', (err, data) => {
                if (err)
                    throw err;
                arr = data.toLocaleString().split(",");
                console.log(this.binarySearchString(arr, search));

            })
        } catch (error) {
            console.log(error.message);

        }
    },

    /***** Insertion Sort *****/
    /*
     *7. Insertion Sort
     *
     *@purpose: To print the sorted list. 
     *@description: Reads in strings from standard input and prints them in sorted order.
     *@function: Use insertion sort to sort the words in the string array 
     *           and prints them in sorted order.
     * 
     * 
    */
    insertionSort(size) {
        try {
            var arr = [];
            for (let i = 0; i < size; i++) {
                arr[i] = readline.question("Enter the elements : ");

            }
            for (let i = 1; i < arr.length; i++) {
                var key = arr[i];
                var j = i - 1;
                while (j >= 0 && arr[j] > key) {
                    console.log(arr);
                    arr[j + 1] = arr[j];
                    j--;

                }
                arr[j + 1] = key;
            }
            console.log(arr);

        }
        catch (error) {
            console.log(error.message);

        }
    },

    /***** Bubble Sort *****/
    /*
     *8. Bubble Sort
     *
     *@purpose: To print the sorted list. 
     *@description: pass size as input arguement to the function to sort.  
     *@function: Reads in integers, prints them in sorted order using bubble sort.  
     *
     */
    bubbleSort(size) {
        try {
            var arr = [];
            for (let i = 0; i < size; i++) {
                arr[i] = readline.question("Enter the elements : ");

            }
            for (let i = 0; i < arr.length; i++) {
                for (let j = i + 1; j < arr.length; j++) {
                    if (arr[i] > arr[j]) {
                        var temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                    }
                }

            }
            console.log(arr);

        }
        catch (error) {
            console.log(error.message);

        }
    },

    /***** Merge Sort *****/
    /*
    *9. Merge Sort
    *
    *@purpose: To do merge sort of list of strings. 
    *@description: To Merge Sort an array, we divide it into two halves, sort the two halves
    *              independently, and then merge the results to sort the full array. 
    *@function: To sort a[lo, hi),we use the following recursive strategy: 
    *           Base case: If the subarray length is 0 or 1, it is already sorted.
    *           Reduction step: Otherwise, compute mid = lo + (hi ­ lo) / 2, recursively sort the
    *           two subarrays a[lo, mid) and a[mid, hi), and merge them to produce a sorted result.
    * 
    */
    mergeSort(arr) {
        try {
            var n = arr.length;
            //checks if size is less than 2
            if (n < 2) {
                return;
            }
            //claculates middle value
            var mid = Math.floor(n / 2);
            var left = [mid];
            var right = [n - mid];
            /*
            *splits array into halves
            */
            for (let i = 0; i < mid; i++) {
                left[i] = arr[i];
            }
            for (let j = mid; j < n; j++) {
                right[j - mid] = arr[j];
            }
            /*
            *splits till there is no more to split
            */
            this.mergeSort(left);
            /*
            *call mergeSort function for left half
            */
            this.mergeSort(right);
            /*
            *call mergeSort function for right half
            */
            this.merge(left, right, arr);
            /*
            *call merge function to merge the array
            */

        } catch (error) {
            console.log(error.message);

        }
    },
    merge(arr, brr, crr) {
        try {
            var i = 0, j = 0, k = 0;
            while (i < arr.length && j < brr.length) {/*
              *checks if left half element is less than right half element.
              *if yes add the left half element to the final array.
              *if no add the right half element to the final array.
              */
                if (arr[i] <= brr[j]) {
                    crr[k] = arr[i];
                    i++;
                }
                else {
                    crr[k] = brr[j];
                    j++;
                }
                k++;
            }
            while (i < arr.length) {
                crr[k] = arr[i];
                i++;
                k++;
            }
            while (j < brr.length) {
                crr[k] = brr[j];
                j++;
                k++;
            }
            return crr;
        } catch (error) {
            console.log(error.message);

        }
    },

    /***** Vending Machine *****/
    /*
    *10. Vending Machine
    *
    *@purpose: To calculate the minimum number of notes as well as the Notes to be returned by the vending machine as a change. 
    *@description: Read the change in Rs to be returned by the vending machine and return the notes.
    *@function: Use recursion and check for largest value of the Note to return change to get to minimum number of Notes. 
    * 
    * 
    */
    getFewestNotes(amount) {
        try {
            var notes = [1000, 500, 100, 50, 10, 5, 2, 1];
            var calcNotes;
            var total = 0;
            if (amount == 0) {
                console.log("0");

            }
            else {
                for (let i = 0; i < notes.length; i++) {
                    if (amount >= notes[i]) {
                        var calcNotes = Math.floor(amount / notes[i]);
                        /*
                        *calculates the number of notes
                        */
                        total = total + calcNotes;

                        console.log(notes[i] + " Notes -> " + calcNotes);
                        amount = amount % notes[i];
                    }
                }

                console.log("Total number of notes = " + total);

            }
        } catch (error) {
            console.log(error.message);
        }
    },


    /***** Day Of Week */
    /*
    *11. Day Of Week
    *
    *@purpose: To print the day of the week that date falls on. 
    *@description: Pass three command-line arguements and print the day of the week.
    *@function: Using the formula for the Gregorian calendar:- 
    *           y 0 = y − (14 − m ) / 12
    *           x = y 0 + y 0 /4 − y 0 /100 + y 0 /400
    *           m 0 = m + 12 × ((14 − m ) / 12) − 2
    *           d 0 = ( d + x + 31 m 0 / 12) mod 7
    *           Calculate the day and for output print 0 for Sunday, 1 for Monday, 2 for
    *           Tuesday, and so forth.
    */
    dayOfWeek() {
        try {
            /*
            *m = month
            *d = day
            *y = year 
            */
            var d = Number(process.argv[2]);
            var m = Number(process.argv[3]);
            var y = Number(process.argv[4]);
            /*
            *takes command-line arguements
            */
            /*
            *Using the formula for the Gregorian calendar and calculate the day
            */
            var y0 = y - Math.floor((14 - m) / 12);
            var x = y0 + Math.floor(y0 / 4) - Math.floor(y0 / 100) + Math.floor(y0 / 400);
            var m0 = m + 12 * Math.floor((14 - m) / 12) - 2;
            var day = (d + x + Math.floor((31 * m0) / 12)) % 7;
            console.log(day);
            switch (day) {
                /*
                *according to the result of the day switch case is chosen
                */

                case 0: console.log("Sunday"); break;
                case 1: console.log("Monday"); break;
                case 2: console.log("Tuesday"); break;
                case 3: console.log("Wednesday"); break;
                case 4: console.log("Thursday"); break;
                case 5: console.log("Friday"); break;
                case 6: console.log("Saturday"); break;
                default: console.log("invalid input"); break;


            }

        }
        catch (error) {
            console.log(error.message);

        }

    },


    /***** Temperature Conversion *****/
    /*
     *12. Temperature Conversion 
     *
     *@purpose: To display the temperature as output. 
     *@description: Given the temperature in fahrenheit as input outputs the temperature in Celsius or viceversa. 
     *@function: Using the formula:-
     *           Celsius to Fahrenheit: (°C × 9/5) + 32 = °F
     *           Fahrenheit to Celsius: (°F − 32) x 5/9 = °C 
     *           Convert the temperature and print it.
     * 
     * 
    */
    temperatureConversion() {
        try {
            //initializing choice,celsius,fahrenheit to 0
            var choice = 0;
            var celsius = 0;
            var fahrenheit = 0;
            choice = readline.question("Press 0 for fahrenheit temperature \n Press 1 for celsius temperature : ");
            if (choice == 0)//checks if choice is equal to 0
            {   //accepts userinput
                celsius = readline.question("Enter the temperature in celsius : ");
                //calculates temperature in fahrenheit
                fahrenheit = (celsius * (9 / 5)) + 32;
                console.log("Temperature in fahrenheit is = " + fahrenheit);

            }
            else if (choice == 1)//checks if choice is equal to 1
            {   //accepts userinput
                fahrenheit = readline.question("Enter the temperature in fahrenheit : ");
                //calculates temperature in celsius
                celsius = (fahrenheit - 32) * (5 / 9);
                console.log("Temperature in celsius is = " + celsius);

            }
        }
        catch (error) {
            console.log(error.message);

        }
    },

    /***** Monthly Payment *****/
    /*
     *13. Monthly Payment
     *
     *@purpose: To print the monthly payments. 
     *@description: Reads in three command­line arguments P, Y, and R and calculates the monthly payment.
     *@function: Calculates the monthly payments using the formula :-
     *           payment = (P*r)/(1-(1+r)^(-n)),
     *           where n=12*Y, r=R/(12*100)
     *           Displays the result.
     */
    monthlyPayment() {
        try {
            /*
            *P = principal loan amount
            *R = per cent interest compounded monthly
            *Y = years to pay
            */
            var P = process.argv[2];
            var R = process.argv[3];
            var Y = process.argv[4];
            /*
            *takes command-line arguements
            */
            var n = 12 * Y;
            var r = R / (12 * 100);
            /*
            *calculates monthly payment
            */
            var payment = (P * r) / (1 - Math.pow(1 + r, -n));

            console.log(payment);

        }
        catch (error) {
            console.log(error.message);

        }
    },

    /***** Square Root *****/
    /*
    *14. Square root
    *
    *@purpose: To compute the square root of a non-negative number 
    *@description: Pass a non-negative number as input arguement to a function and print it's square root 
    *@function: Using Newton's method compute the square root of a nonnegative number and display the result
    *  
    */
    getSquareRoot(num)//takes userinput
    {
        try {
            var format = /[0-9]/;
            if (format.test(num)) {
                /*
                *initialize t with the given non-negative number
                */
                var t = num;
                var epsilon = 1e-15;
                /*
                *repeat until Math.abs(t- num/t)> epsilon*t
                */
                while (Math.abs(t - num / t) > epsilon * t) {
                    /*
                    *replacing t with average of num/t and t
                    */
                    t = (num / t + t) / 2;
                }
                console.log("Square root of " + num + " is " + t);
            }
            else {
                console.log("enter only numbers");

            }

        }
        catch (error) {
            console.log(error.message);

        }
    },

    /***** To Binary *****/
    /*
    *15. To Binary
    *
    *@purpose: toBinary that outputs the binary (base 2) representation of the decimal number typed as the input. 
    *@description: It is based on decomposing the number into a sum of powers of 2. 
    *@function: Ensure necessary padding to represent 4 Byte String. 
    *           consider the powers of 2 less than or equal to n in 
    *           decreasing order to determine which belong in the binary decomposition.
    * 
    */
    toBinary(num) {
        try {
            //var temp = num;
            var string = "";
            while (num > 0.9) {
                var res = Math.floor(num % 2);
                string = res + string;
                num = num / 2;
            }
            console.log("Binary value = " + string);

        } catch (error) {
            console.log(error.message);

        }
    },
    /***************************** Algorithm Programs *********************/



}

