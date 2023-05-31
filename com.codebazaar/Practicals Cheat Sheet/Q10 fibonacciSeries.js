// Q. WAP to make array of letters based on dimension given as input?

// initialize some variables
let prev_no = 0;
let curr_no = 0;
let sum = 1;


// lets create a funtion
function fibonacci(series) {

    console.log('--> ', prev_no);                               // print beginning to 0
    for (let i = 1; i < series; i++) {                          // limiting the loop with series

        console.log('--> ', sum);                               // let print sum as next upcoming number

        prev_no = curr_no;                                      // set current value to previous
        curr_no = sum;                                          // set sum value to current value
        sum = curr_no + prev_no;                                // sum previous & current value
    }
}

let series = 10;
console.log(`Fibonacci Series upto limit ${series} :`)
fibonacci(series);
