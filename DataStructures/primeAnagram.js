/****************************************************************
 * 
 * Execution    :Default node   cmd>node primeAnagram.js
 * Purpose      :To 
 * 
 * @description
 * @file        :primeAnagram.js
 * @overview    :
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :02/02/2019
 * 
 ***************************************************************/
var access = require('../UtilProgs/dataStructureUtil');
var util = require('../UtilProgs/algoUtil');
var req = require('util');
var arr = [];
var array = [['0-100'],['100-200'],['200-300'],['300-400'],['400-500'],['500-600'],['600-700'],['700-800'],['800-900'],['900-1000']];
var i = 0,j = 1,range = 100;
for (let prime = 2; prime <= 1000; prime++) {
    if (util.isAnagramPalindrome()) {
        if(prime<=range)
        {
            array[i][j] = prime;
            j++;
        }
        else{
            j = 1;
            range = range+100;
            i++;
            array[i][j] = prime;
        }
    } 
}
console.log(array);
/*for (let prime = 2; prime <= 1000; prime++) {
    if (util.isPrime(prime)) {
        arr.push(i);
    }
}
for(let k=0;k<arr.length;k++)
{
    for(let l=k+1;l<arr.length;l++)
    {
        if(util.anagram(arr[k],arr[l]))
        {
            if(arr[k]<=range)
            {
                if(!array.includes(arr[k]) && !array.includes(arr[l]))
                {
                    array[i][j] = arr[k];
                    j++;
                }
            }
            else{
                j = 1;
                range = range+100;
                i++;
                if(!array.includes(arr[k]) && !array.includes(arr[l]))
                {
                    array[i][j] = arr[k];
                }

            }
        }
    }
}
console.log(array);*/

/*for(let i=0;i<array.length;i++)
{
    for(let j=0;j<array[i].length;j++)
    {
        console.log(array[i][j]+" ");
        
    }
}*/
