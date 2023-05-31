// Q. WAP to make array of names based on dimension given as input?

// input from user
let rows = parseInt(prompt("Enter Dimension of array : "));                 // asking dimension for array
let cols = parseInt(prompt("Enter Size for each Dimensions : "));           // asking columns in each dimension

// make a function to create array
const arrObj = (rows, cols) => {

    let dimensional_array = [];                                                     // initialize empty array
    let rounds = cols * rows;                                                       // set no of rounds to confirm the user

    for (let row = 1; row <= rows; row++) {                                         // loop to control rows or dimensions

        let column = [];                                                            // setting up rows for columns
        for (let col = 1; col <= cols; col++) {                                     // limiting the columns or values

            column.push(prompt(`Enter a name, left fills : ${rounds--} :`));        // pushing user values in rows
        }

        dimensional_array.push(column);                                             // pushing each row in the Array
    }
    return dimensional_array;                                                       // returning the final result
}


let output = arrObj(rows, cols);
console.log(`Your ${rows} Dimensional Array is : `, output);
