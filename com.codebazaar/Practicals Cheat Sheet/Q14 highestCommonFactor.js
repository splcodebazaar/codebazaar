// Q. Take 2 numbers from user and find their HCF?


// find greatest value
function hcfOf(num1, num2) {

    let hcf;                                // make variable to store HCF
    const max = Math.max(num1, num2);       // find max limit to iterate

    for (let i = 1; i <= max; i++) {

        // Find highest common divisor & store in hcf
        if (num1 % i == 0 && num2 % i == 0) {
            hcf = i;
        }
    }
    return hcf;
}


// take user inputs
const num1 = Number(prompt("Enter 1st number : ")); // 8
const num2 = Number(prompt("Enter 1st number : ")); // 20

// show Highest Common Factor HCF
console.log(`HCF of ${num1} & ${num2} is ${hcfOf(num1, num2)}.`);

// OUTPUT : HCF of 8 & 20 is 4.
