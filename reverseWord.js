function reverseWordsInSentence(sentence) {
    // Split the sentence into words
    const words = sentence.split(' ');

    // Reverse each word and store them in a new array
    const reversedWords = words.map(word => {
        return word.split('').reverse().join('');
    });

    // Join the reversed words back into a sentence
    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

// Input sentence
const inputSentence = "Hello, world!";

// Reverse the words in the sentence
const reversedSentence = reverseWordsInSentence(inputSentence);

console.log("Original sentence: " + inputSentence);
console.log("Reversed sentence: " + reversedSentence);