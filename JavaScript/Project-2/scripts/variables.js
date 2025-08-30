// var keyword -- old way (avoid this with Modern JS)

// FUnction scoped --  can be re-declared
var name = "Banu";
name="Thiyalini";
console.log(name);

// Hoisting behaviour (confusing)
console.log(age);
var age=44;

function example() {
    if(true) {
        var message = "Hello";
    }
    console.log(message);
}
example();

// Let keyword - -Recommended

let firstName = "Banu";
console.log(firstName);

function modernExample() {
    if(true) {
        // Proper blocking scope
        let message = "Hi";
    }
    // console.log(message);
}

modernExample();

let counter = 0;
counter = 1;
counter++;
console.log(counter);

// Const keyword
const PI = 3.14159; // Re-assignment not possible
// const radius; SYNTAX ERROR

// BLOCKED SCOPE
if(true) {
    const localconst = "hello";
}
// console.log(localconst);

const person = {name: 'Banu', age: 28};
console.log(person.name);
person.age = 27; // Modifying the property
person.city = 'COimbatore'; // Adding the property
// person = {}; ERROR

const colors = ["red", "blue"];
colors.push("orange");
console.log(colors);
colors[0] = "yellow";
console.log(colors);
// colors = []; ERROR
