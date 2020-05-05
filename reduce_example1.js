// Simple example of reduce function to find sum of given numbers


let numbers = [10,20,30,40];

numbers.reduce(function(sum,number) {
    return sum + number;
},0);