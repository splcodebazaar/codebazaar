// Q. WAP to find number of Ocuurences of each word in a sentence, list them?

// make a function named frequencies
function frequencies(phase) {

    let wordLib = {};                                       // make vaiable to store occurences for each word
    for(let word of phase.split(' ')) {                     // set loop and split sentence into aary of words

        let counter = 0;                                    // initialize counter to 0
        for(let match of phase.split(' ')) {                // again set loop with array of words
            (match == word) ? counter++ : false;            // make an expression to increase counter
        }

        wordLib[word] = counter;             // add counter after each iterate to deal the occurences
    }

    return wordLib;                         // return the complete dictinary containing words & frequencies
}

console.log('Occurences ==> ', frequencies("who called me, who ?"));
console.log('Occurences ==> ', frequencies("here is , your name is mohan"));

// OUTPUT : Occurences ==>  { who: 2, called: 1, 'me,': 1, '?': 1 }
// OUTPUT : Occurences ==>  { here: 1, is: 2, ',': 1, your: 1, name: 1, mohan: 1 }
