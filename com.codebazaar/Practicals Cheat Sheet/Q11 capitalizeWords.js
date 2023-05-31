// Q. WAP to make function that Capitalize each word of strings

function capitalize(text) {

    let words = text.toLowerCase().split(' ');             // first making small letters and then split up using spaces
    let capitalized = [];                                  // initialize empty list to store capitalized words

    for(let word of words) {
        const capWord = word.replace(word[0], word[0].toUpperCase());       // creating a capitalized word using replace method
        capitalized.push(capWord);                                          // storing each modified word in capitalized array
    }

    return capitalized.join(' ');                          // return joined words with spaces to form string using join method
}

console.log(capitalize("hellO! hII, you ."));
console.log(capitalize("hellO! hII, you know me?"));

// OUTPUT : Hello! Hii, You .
// OUTPUT : Hello! Hii, You Know Me?
