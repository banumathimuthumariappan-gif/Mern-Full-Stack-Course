// Login check -- Js -- Critical Script
// Carousels, chat widgets -- Non Crticial Script

var clickButton = document.getElementById('myButton');
clickButton.addEventListener("click", function() {
    alert("Hello from external script");
});
console.log("External script loaded!");

const element = document.querySelector('h1');
console.log(element.nodeType);
console.log(element.firstChild.nodeType); 
console.log(element.firstChild.nodeName);

const newH2 = document.createElement('h2');
newH2.textContent = "This is a new h2 element";
document.body.append(newH2);