const person = {
    name: "John"
};

function sayHello(age, city) {
    console.log(`Hello, my name is ${this.name}, I and ${age} years old and I live in ${city}`);  
}

// Call method calls the function with the given values, aguements as individual
sayHello.call(person, 35, "Coimbatore");

// Bind method is similar to call and it accepts arquements as array
const args = [30, 'Chennai'];
sayHello.apply(person, args);

// ====================================

const personNew = {
    name: 'Bob',
    sayHi: function() {
        console.log(`Hi, I am ${this.name}`);
        
    }
};

const boundSayHi = personNew.sayHi.bind(personNew);
boundSayHi();

// =====================================

function Car(make) {
    this.make = make;
}

Car.prototype.drive = function() {
    console.log(`The ${this.make} car is driving`);  
}

const myCar = new Car("Mahindra");
myCar.drive();

