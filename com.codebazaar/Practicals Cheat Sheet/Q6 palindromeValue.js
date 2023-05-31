// Q. Reverse any string and check Pallindrome.

// lets take a function to create revering of string input
function isPalindrome(text) {

    let reversedText = '';                                  // initialize empty string varible
    for (let i = text.length - 1; i >= 0; i--) {            // make a loop to access reversed indexing
        reversedText += text[i];                            // add each value to reversedText
    }

    let check = (text == reversedText) ? 'Palindrome' : 'non-Palindrome';   // check Palindrome series
    return `${text} is ${check}`;                                           // retrun the final result
}


console.log(isPalindrome("11211"));
console.log(isPalindrome("naman"));
console.log(isPalindrome("52325"));
console.log(isPalindrome("kumar"));
console.log(isPalindrome("hello"));

// OUTPUT : 11211 is Palindrome
// OUTPUT : naman is Palindrome
// OUTPUT : 52325 is Palindrome
// OUTPUT : kumar is non-Palindrome
// OUTPUT : hello is non-Palindrome
