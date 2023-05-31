// Q. Take a number series and iterate it by checking each value, is Even or Odd?

// initializing array
let arr = [ 25, 89, 30, 96, 87, 556, 203 ];

// take this into a loop
for (item of arr) {
    const check = (item % 2 == 0) ? true : false;           // initialize a condition
    if (check) console.log(`Value ${item} is Even...`);     // use if - else for multi opinions
    else console.log(`Value ${item} is Odd...`)
}

/*
 OUTPUT : 

    Value 89 is Odd...
    Value 30 is Even...
    Value 96 is Even...
    Value 87 is Odd...
    Value 556 is Even...
    Value 203 is Odd...
*/
