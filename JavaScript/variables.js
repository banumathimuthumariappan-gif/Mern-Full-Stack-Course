let username = "Vinodh";

const PI = 3.14158;

var oldStyle = "avoid this";

 

console.log("=== VARIABLES ===");

console.log("username", username, typeof username);

console.log("PI:" ,PI ,typeof PI);

let number = 42;

let text = "Hello World";

let isActive = true;

let nothing = null;

let notDefined;

 

console.log("=== Primitive Types ===");

console.log("number: ", number ,typeof number);

console.log("text ", text,typeof text );

console.log("isActive ", isActive ,typeof isActive );

console.log("nothing ", nothing ,typeof nothing );

console.log("notDefined ", notDefined ,typeof notDefined);

let person = {

    name: "Bob",

    age: 30,

    // salary: null,

    greet: function() {

        return `Hi , I'm ${this.name}`;

    }

};

console.log("\n ==== OBJECTS ====");

console.log("person: ",person);

console.log("person.name: ", person.name);

console.log("greeting : ", person.greet());










