// Simple Example of a forEach

// Creating an array
let numbers = [1,2,3,4,5,6,7,8,9,10];

// Creating a variable
let sum = 0;

// Adding the numbers in the array to return total
numbers.forEach(function(number){   // This does not need to be an anonymous function.
    sum += number;
});

sum;



/* 

// Creating a separate function
function adder(number){
    sum += number;
}

numbers.forEach(adder); // Notice that the function isn't called (eg. adder()). This wold result in immediate exection of the 
                        // function and passing the result of that function to forEach which we do not want.

*/