// Q. Take an array containing 6 values in random manner and find last 2nd lasgest value?

let arr = [ 25, 89, 30, 96, 87 ];       // initializing array
let asc_order = arr.sort();             // converting into ascending series

// getting the value last 2nd Largest using indexing
let last_2ndLargest = asc_order[ arr.length - 2 ];
console.log(`The Last 2nd Largest value : ${last_2ndLargest}`);

// OUTPUT : The Last 2nd Largest value : 89
