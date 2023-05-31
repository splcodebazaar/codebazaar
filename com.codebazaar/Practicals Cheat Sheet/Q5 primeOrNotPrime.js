// Q. Take a number, find Prime or NotPrime?

// Take this into function named isPrime.

function isPrime(num) {

    let check = null;                               // initialize check to null for future updates
    const verified = `${num} is Prime.`;            // This is a message for having a Prime factor
    const rejected = `${num} is not Prime.`;        // This is a message for having non-Prime factor

    if (num <= 1) return false;

    else if (num > 1) {                             // number must be greater than 1

        for (let i = 2; i < num; i++) {

            if (num % i == 0) { check = rejected; break; }      // check for non-Prime factor
            else { check = verified }                           // check for Prime factor
        }
        return check;
    }
}


console.log(isPrime(10));
console.log(isPrime(3));
console.log(isPrime(5));
console.log(isPrime(83));
console.log(isPrime(90));


// OUTPUT : 10 is not Prime.
// OUTPUT : 3 is Prime.
// OUTPUT : 5 is Prime.
// OUTPUT : 83 is Prime.
// OUTPUT : 90 is not Prime.
