// Strings
const greeting = "Hello, world";
const name = 'Alice';
const message = `Hello, ${name}`; // Template Literals
const emptyString = "";
const messageLength = message.length;
console.log(messageLength);

// ==================================
// String Methods
const text = "Hello World";
console.log(text.toLowerCase());
console.log(text.toUpperCase());

const sentence = "The quick brown fox  jumps over the lazy dog";
const position = sentence.indexOf('fox');
console.log(position);

const includesFox = sentence.includes('fox');
console.log(includesFox);

// ==============================
const programmingLanguage = "JavaScript";
const part = programmingLanguage.slice(0, 4);
console.log(part);

const sub = programmingLanguage.substring(4, 10);
console.log(sub);

const messyText = "     Hello World";
const replaceText = messyText.replace("Hello", "Hi");
console.log(replaceText);

const trimmedText = replaceText.trim();
console.log(trimmedText);

// ================================

const fullname = "Charlie";
const age = 30;
const greetings = `Hello, my name is ${fullname} and I am ${age} years old`;
console.log(greetings);

const price = 10;
const taxRate = 0.08;

const total = `The total price is $${price * (1 + taxRate).toFixed(2)}`;
console.log(total);

// ================================
// Escape sequences
const multilineString = "Hello\nWorld";
console.log(multilineString);

const stringWithQuotes = 'She said, "Hello there!"';
const stringWithSingleQuotes = "It's a beatiful day";
console.log(stringWithQuotes);
console.log(stringWithSingleQuotes);

// ===================================

const stringA = "apple";
const stringB = "Apple";
const stringC = "apple";

console.log(stringA === stringB);
console.log(stringA === stringC);

const comparisionResult = stringA.localeCompare(stringB);
console.log(comparisionResult);

// ==================================

const originalString = "hello, world";
const newString = originalString.replace("world", "JavaScript");
console.log(newString);


const combinedString = originalString.concat("!");
console.log(combinedString);

const parts = originalString.split(", ");
console.log(parts);

const word = "code";
// For of loop
for(const char of word) {
    console.log(char);
}

// Traditional for loop
for(let i = 0; i < word.length; i++) {
    console.log(word[i]);  
}

// =========================================
// Unicode
const smiley = "";
console.log(smiley.length);
const codePoint = smiley.codePointAt(0);
console.log(codePoint);
const newSmiley = String.fromCodePoint(128522);
console.log(newSmiley);

// ==========================================
// Regex
const sentence1 = "I have a cat and a dog";
const regex = /a/;
const matchIndex = sentence1.search(regex);
console.log(matchIndex);

const newSentenceObject = sentence1.replace(/a/g, 'X'); // g-global (Finds all occurances of a)
console.log(newSentenceObject);


























