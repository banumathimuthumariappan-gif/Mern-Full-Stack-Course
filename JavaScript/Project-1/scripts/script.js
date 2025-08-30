var clickButton = document.getElementById('myButton');
clickButton.addEventListener("click", function() {
    alert("Hello from external script");
});
console.log("External script loaded!");