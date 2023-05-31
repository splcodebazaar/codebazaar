// Q. WAP to make Transpose of a matrix (Rctangular Array)?

// lets take a matrix
const matrix = [

    [1, 2, 3],
    [4, 5, 6],
];


// lets build factory funtion named transpose
function transpose(array) {

    let cols = array.length;                                    // taking rows as columns
    let rows = array[0].length;                                 // taking columns as rows

    let transposed_matrix = [];                                 // initialize new matrix
    let innerShifts = 0;                                        // create innerShift to chnage columns indexes

    for (let row = 1; row <= rows; row++) {                     // limiting no of rows

        let column = [];                                        // create empty row
        let shifts = 0;                                         // create shift to chnage rows indexes

        for (let col = 1; col <= cols; col++) {

            column.push(array[shifts][innerShifts]);            // limiting no of columns
            shifts++;                                           // increase shift by 1 stage at each iteration
        }

        transposed_matrix.push(column);                         // push a complete row in new matrix
        innerShifts++;                                          // increase innerShift by 1 stage at each iteration
    }

    return transposed_matrix;                                   // time to return complete transposed matrix
}


let transposedArray = transpose(matrix);
console.log("Original Matrix : ", matrix);
console.log("Transposed Matrix : ", transposedArray);


// OUTPUT :
// Original Matrix :  [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
// Transposed Matrix :  [ [ 1, 4 ], [ 2, 5 ], [ 3, 6 ] ]
