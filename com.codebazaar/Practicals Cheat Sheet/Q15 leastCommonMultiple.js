// Q. Make a function to find LCM

// take a function
function lcmOf(num1, num2) {

    let i = 1;
    while (true) {

        // find a least common divident
        if (i % num1 == 0 && i % num2 == 0) {
            return i;
        }
        i++;
    }
}


// show Least Common Multiple LCM
let lcm1 = 20;
let lcm2 = 40;
console.log(`LCM of ${lcm1} & ${lcm2} is ${lcmOf(lcm1, lcm2)}.`);

// OUTPUT : LCM of 20 & 40 is 40.
