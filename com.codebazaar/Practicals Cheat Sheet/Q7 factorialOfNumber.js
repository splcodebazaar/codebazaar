// Q. find factorial of any number?

// lets make factorial function

function factorial(num) {

    let final_multiple = 1;                 // First set varibale to 1
    for (let i = 1; i <= num; i++) {        // make a loop up to range of given input

        final_multiple *= i;                // Now store each iterative multiple
    }
    return final_multiple;                  // return the final outcome
}


console.log(factorial(3));
console.log(factorial(6));
console.log(factorial(9));

// OUTPUT : 6
// OUTPUT : 720
// OUTPUT : 362880
