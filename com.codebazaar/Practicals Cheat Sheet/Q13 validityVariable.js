// Q. Write a function to confirm the given variable as input is valid?


// make a variable containing all incorrect possibilities
const obstacles = ['`', '~', '!', '#', '@', '$', '%', '&', '^', '*', '(', ')', '-', '+', '[', ']', '{', '}', ' ', '|', "'", '"', ';', ':', '?', '/', '<', '>', '.', ',', '='];


// make a function to check Variable
function isValidVar(variable, obstacles) {

    const fLetter = (isNaN(variable[0])) ? true : false;            // make an expression to confirm 1st letter
    let checkedVariable = true;                                     // initialize a variable to confirm other letters

    if (fLetter) {                                                  // if 1st letter is true, loop begins

        for (let i = 0; i < variable.length; i++) {                 
            for (let hurdle of obstacles) {                         // iterate each possibility of incorrection

                if (hurdle == variable[i]) {                        // match with orginal letters of variable
                    checkedVariable = false;                        // if possibility matches, shifted to false
                    return checkedVariable;                         // return false opinion and get out of function
                }
                else { checkedVariable = true; }                    // if not match, shifted to true
            }
        }
        return checkedVariable;                                     // return true value

    }
    else { return false; }                                          // if 1st letter is not confirmed, return false
}

console.log(isValidVar('llo k', obstacles));
console.log(isValidVar('llok$0', obstacles));
console.log(isValidVar('2urshad', obstacles));
console.log(isValidVar('Variable', obstacles));
console.log(isValidVar('Variable_correction', obstacles));
console.log(isValidVar('Variable_corr%ction', obstacles));


// OUTPUT : false
// OUTPUT : false
// OUTPUT : false
// OUTPUT : true
// OUTPUT : true
// OUTPUT : false
