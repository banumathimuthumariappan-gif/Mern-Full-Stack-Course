// IIFE: Immediately invoked Function Expression
(function () {
  const privateVariable = "private variable";
  console.log("IIFE");
  console.log(privateVariable);
})();

// ====================================
// Callback function
// Callback - A function is passes as an arguement to another function
function processUserInput(callback) {
  const name = "Jane Doe";
  callback(name);
}

// Anonymous function - A function which doesnt have a name
// Anonymous function as callback
processUserInput(function (userName) {
  console.log("Hello " + userName);
});

// =============================
// Closure
function createCounter() {
  let count = 0; // The outer function's variable

  // Returns the inner function : Has access to count
  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
// The count variable is closed over by the inner function and it persists across calls to the counter

// Use case: Creating a private counter (Data encapsulation)
function createBankAccount(initialBalance) {
    let balance = initialBalance; // private variable
    return {
        deposit: function(amount) {
            balance += amount;
        },
        withdraw: function(amount) {
            balance -= amount;
        },
        getBalance: function() {
            return balance;
        }
    };
}

let johnAccount = createBankAccount(10000);
johnAccount.deposit(1000);
console.log(johnAccount.getBalance());

// IIFE Design patterns
// Singleton design pattern
const singleton = (function() {
    let instance;
    function init() {
        return {
            name: "Singleton",
            publicMethod: function() {
                console.log("Public method");
                
            }
        };
    }
    return {
        getInstance: function() {
            if(!instance) {
                instance = init();
            }
            return instance;
        }
    }
})();

const obj1 = singleton.getInstance();
const obj2 = singleton.getInstance();
console.log(obj1 === obj2);

// Classes
class Dog {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }

    // Instance method
    bark() {
        console.log(this.name + " Woof");
        
    }

    getDetails() {
        return "Name: " + this.name + " Breed: " + this.breed;
    }
}

const myDog = new Dog("Buddy", "Golden");
console.log(myDog);
console.log(myDog.name);
console.log(myDog.breed);
myDog.bark();
console.log(myDog.getDetails());

// Static Method
class MathHelper {
    static add(a,b) {
        return a+b;
    }

    static subtract(a, b) {
        return a-b;
    }
    static multiply(a, b) {
        return a*b;
    }
}
console.log(MathHelper.add(1,2));

// ======================================
// Promises
// Creating a new promise object, taking an executor function as an arguement
// This function takes two arguements: resolve, reject
// The resolve function is called when promise is successfully completed
// The reject function is called when the promise is rejected

const myPromise = new Promise((resolve, reject) => {
    // Simulate an async operation
    setTimeout(() => {
        const success = true; // Let's say the operation was successful
        if(success) {
            resolve("Operation completed successfully");
        } else {
            reject("Unfortunately operation failed")
        }
    }, 1000);
});

// Use the promise
myPromise.then(result => {
    console.log(result);
    
}).catch(error => {
    console.log(error);
    
});

// Promise states: Fulfilled, Pending, Rejected
function getUserData(userId) {
    return new Promise((resolve => {
        setTimeout(() => {
            resolve({id: userId, name: "John Doe"})
        }, 2000);
    }));
}
function getPosts(user) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Fetched the user posts");
            resolve({user: user.name, posts: ["post1", "post2"]});
        }, 2000);
    });
}

getUserData(123).then(userData => {
    return getPosts(userData);
}).then(postData => {
    console.log("All data fetched");
    console.log(postData);
    
}).catch(error => {
    console.error("Error " + error);
    
});

// ==========================================
// AJAX - 
// const { XMLHttpRequest } = require("xmlhttprequest");
// const xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function() {
//     if(xhr.readyState === 4 && xhr.status === 200) {
//         console.log(xhr.responseText);
        
//     }
// };

// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
// xhr.send();

// =================================================
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => {
    if(!response.ok) {
        throw new Error('Network response was not ok');
    } return response.json();
}).then(data => {
    console.log(data);
    
}).catch(error => {
    console.error("Error");
});