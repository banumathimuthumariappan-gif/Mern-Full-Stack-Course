const employees = ["Alice", "Bob", "Charle", "Diana"];
const salary = [75000, 82000, 68000, 95000];
const departments = ["IT", "HR", "IT", "Finance"];

console.log(`Total employees: ${employees.length}`);
console.log(`First employee: ${employees[0]}`); // Index access
console.log(`Last employee: ${employees[employees.length-1]}`);

// ----------------------------------------------

let team = ["John", "Sarah", "Mike"];
console.log(`Team size: ${team.length}`);

// Essential methods -- CRUD operations
team.push("Lisa"); // Add to end of the array
team.unshift("Tom"); // Add to the beginning of the array

let lastMember = team.pop(); // Remove from end of the array
let firstMember = team.shift(); // Remove from the beginning of the array

console.log(`updated team ${team}`);
console.log(`Removed: ${firstMember}, ${lastMember}`);

// Find and Modify
let sarahIndex = team.indexOf('Sarah');
console.log(sarahIndex);
team[sarahIndex] = "Sarah Johnson";
console.log(`Updated team ${team}`);

// ------------------------------------

const salesData = [15000, 23000, 18000, 31000, 27000];
const salesTeam = ["Alex", "Beth", "Carl", "Dana", "Eva"];

console.log("=== MONTHLY SALES REPORT ===");

//forEach - Execute for each (no return)
salesData.forEach((sale, index) => {
    console.log(`${salesData[index]} : $${sale.toLocaleString()}`);
});

// Return value (with map)
const salesWithBonus = salesData.map((sale) => ({
    original: sale, 
    bonus: sale > 25000 ? sale * 0.1 : sale * 0.05,
    total: sale + (sale > 25000 ? sale * 0.1 : sale * 0.05)
}));

// console.log(salesWithBonus);

console.log("=== BONUS CALCULATIONS ===");
salesWithBonus.forEach((data, index) => {
    console.log(`${salesTeam[index]} : $${data.total.toLocaleString()}`);
});

const topPerformers = salesData.map((sale, index) => ({
    name: salesTeam[index], 
    sales: sale
})).filter(person => person.sales > 20000);

console.log("\n Top Performers");
topPerformers.forEach(performer => {
    console.log(`${performer.name} : ${performer.sales.toLocaleString()}`);
});



