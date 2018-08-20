/*
 *
 * Simple Functions to debug
 *
 */
 //Dependencies
 var readline = require('readline-sync');
 

 // Create a container
 var app = {};

 // Create a function to calculate all the prime numbers between two given numbers
 app.findPrime = function(){

 	var n = readline.question("Find prime numbers up to?");

 	if(n>0){
		var store  = [], i, j, primes = [];
	    for (i = 2; i <= n; ++i) 
	    {
	        if (!store [i]) 
	          {
	            primes.push(i);
	            for (j = i << 1; j <= n; j += i) 
	            {
	                store[j] = true;
	            }
	        }
	    }
  	}
	return primes;
 }; 

 // Create a function to reverse a string
 app.reverseString = function(){

 	var str = readline.question("Enter the string to be reversed");

 	if(str.length > 0){
 		var splitStr = str.split('');
 		splitStr = splitStr.reverse();
 		splitStr = splitStr.join('');
 		return splitStr;
 	}
 }; 

 // Create a function to find factorial of a number
 app.findFactorial = function(){

 	var n = readline.question("Enter a number to find factorial");

 	var i,fact = 1;
 	for(i = n; i > 0;i--){
 		fact = fact * i;
 	}
 	return fact;
 };

 // Call the functions for execution
 if(require.main === module){
	 app.findPrime();
	 app.reverseString();
	 app.findFactorial();
}


// Export the module
module.exports = app;