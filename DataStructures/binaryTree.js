/****************************************************************
 * 
 * Execution    :Default node   cmd>node binaryTree.js
 * Purpose      :To find the number of different binary search trees.
 * 
 * @description
 * @file        :binaryTree.js
 * @overview    :First line will contain an integer, T, number of test cases. 
 *               Then T lines follow, where each line represent a test case. Each test case consists a single integer, N, where N is the number of nodes in the binary search tree. 
 * @author name :Deepthi V <deepthiv286@gmail.com>
 * @version     :1.0
 * @since       :02/02/2019
 * 
 ***************************************************************/
var access = require('../UtilProgs/dataStructureUtil');
/*
*accessing data from utility file
*/
var read = require('readline-sync');
/*
*accepts userinput
*/
var num = read.questionFloat("Enter the number : ");
/*
*invoking binaryTree function
*/
var fact = access.binaryTree(num);
var fact1 = access.binaryTree(num*2);
var fact2 = access.binaryTree(num+1);
var result = (fact1)/(fact2*fact);
console.log(result);


