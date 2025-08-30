// Wait for DOm to be loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log("Document loaded");

    const title = document.getElementById('title');
    const nameInput = document.getElementById('nameInput');
    const greetBtn = document.getElementById('greetBtn');
    const toggleBtn = document.getElementById('toggleBtn');
    const output = document.getElementById('output');

    greetBtn.addEventListener('click', function() {
        console.log("Greet Button Clicked!!!");

        const name = nameInput.value.trim();
        if(name) {
            output.innerHTML = `<p>Hello <strong>${name}</strong></p>`;
            output.classList.add('highlight');
        } else {
            alert("Please enter your name");
        }
    });

    toggleBtn.addEventListener('click', function() {
        title.classList.toggle('hidden');
        toggleBtn.textContent = title.classList.contains('hidden') ? 'Show title' : 'Hide title';
    });

});