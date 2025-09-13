const num = 123;
const bool = true;
const obj = { name: "John"};

const numToString = String(num);
const boolToString = bool.toString();
console.log(typeof numToString);
console.log(typeof boolToString);

const strNum = "456";
const strToNum = parseInt(strNum);
console.log(typeof strToNum);

// ================================

const user = "Alice";
const score = 150;
const formattedString = `User: ${user}, Score: ${score}`;
console.log(formattedString);

// ====================================

const originalUrl = "https://example.com?query=hello world";
const encodedUrl = encodeURIComponent(originalUrl);
console.log(encodedUrl);

const decodeUrl = decodeURIComponent(encodedUrl);
console.log(decodeUrl);






