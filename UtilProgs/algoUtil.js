/****************************************************************
 * 
 * Execution    :Default node   cmd>node algoUtil.js
 * Purpose      :To deploy all the business logic
 * 
 * @description
 * @file        :algoUtil.js
 * @overview    :All functions with business logic are coded here
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :27/01/2019
 * 
 ***************************************************************/
const readline = require('readline-sync');
/*
 *accepts userinput
*/

module.exports = {
    /************************* Algorithm Programs ********************/
    /***** Anagram Detection *****/
    /*
     *1. Anagram Detection
     *
     * @purpose: To determine two strings are anagram or not.
     * @param: Pass two strings as input to the function as arguements.
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
               // console.log(string1 + " " + string2);
                return true;
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
 *@param: Take a range of 0 -­ 1000 numbers and find the prime numbers in that range. 
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
 *@param: pass the numbers as arguements to the function and print anagram and palindrome numbers. 
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
 *@param: Reads in strings from standard input and prints them in sorted order.
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
sort(arr)
{
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

    }
    return arr;
},

/***** Bubble Sort *****/
/*
 *8. Bubble Sort
 *
 *@purpose: To print the sorted list. 
 *@param: pass size as input arguement to the function to sort.  
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
*@param: Pass array as arguement to the function. 
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
*@param: Read the change in Rs to be returned by the vending machine and return the notes.
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
*@param: Pass three command-line arguements and print the day of the week.
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
 *@param: Given the temperature in fahrenheit as input outputs the temperature in Celsius or viceversa. 
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
 *@param: Reads in three command­line arguments P, Y, and R and calculates the monthly payment.
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
*@param: Pass a non-negative number as input arguement to a function and print it's square root 
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
*@param: It is based on decomposing the number into a sum of powers of 2. 
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
}
/***************************** Algorithm Programs *********************/