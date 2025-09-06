const board = [
  ["X", "0", "X"],
  ["0", "X", "0"],
  ["X", "0", "X"],
];
console.log(board[0]); // First row
console.log(board[1][1]); // Second row, second element

// const rows = board.length;
// const cols = board[0].length;

// for(let c=0; c < cols; c++) {
//     let column = "";
//     for(let r=0; r < rows; r++) {
//         column += board[r][c] + " ";
//     }
//     console.log(`Column ${c+1} ; ${column}`);

// }

const fruits = ["banana", "apple", "orange"];
fruits.sort();
console.log(fruits);
fruits.sort().reverse();
console.log(fruits);

// ===========================
const numbers = [40, 100, 1, 5, 25, 10];
// numbers.sort(); sort function not works for numbers
numbers.sort((a, b) => a - b);
console.log(numbers);
numbers.sort((a, b) => b - a);
console.log(numbers);

// ===============================

const colors = ["red", "green", "blue", "yellow"];
const firstGreenIndex = colors.indexOf("green");
console.log(firstGreenIndex); // 1 - Prints the position of the element

const nonExistentIndex = colors.indexOf("purple");
console.log(nonExistentIndex);

const startsWithB = colors.find((color) => color.startsWith("b"));
console.log(startsWithB);

const isLongString = colors.find((color) => color.length > 5);
console.log(isLongString);

// ======================================

const originalArray = [1, 2, 3];
const copiedArray = [...originalArray]; // Spread operator - It does shallow copy. (Means changes donw on the copied array doesnt affect the original array
console.log(copiedArray);

const array1 = ['a', 'b'];
const array2 = ['c', 'd'];
const combinedArray = [...array1, ...array2];
console.log(combinedArray);

//==========================================
// Mutability
const mutableArray = ['A', 'B'];
mutableArray.push('C');
console.log(mutableArray);
mutableArray[0] = 'Z';
console.log(mutableArray);

// Immutable array
const immutableArray = ['A', 'B'];
const newImmutableArray = [...immutableArray, 'C'];
console.log(immutableArray);
console.log(newImmutableArray);

const immutabelSlice = immutableArray.slice(0);
console.log(immutabelSlice);

// ===============================

const fruits1 = ['apple', 'banana', 'cherry'];
const [firstFruit, secondFruit, thirdFruit] = fruits1;
console.log(firstFruit + " " + secondFruit + " " + thirdFruit);

const [a, ...restOfTheFruits] = fruits1;
console.log(a);
console.log(restOfTheFruits);

const animals = ['dog', 'cat'];
const [animal1, animal2, animal3 = 'bird'] = animals;
console.log(animal3);









