// Dax Dewey
// 15 APR 2024
// JS Customer Statistics

// Input (I)
// Get some data from the user so JS can do its job

// Get user to type in how many people came into the store during the four hours
// 1st hour
const hour1Customers = parseInt(prompt('Enter how many customers visited the store in the first hour:'));

// 2nd hour
const hour2Customers = parseInt(prompt('Enter how many customers visited the store in the second hour:'));
// 3rd hour
const hour3Customers = parseInt(prompt('Enter how many customers visited the store in the third hour:'));
// 4th hour
const hour4Customers = parseInt(prompt('Enter how many customers visited the store in the fourth hour:'));


// Process (P)
// Do something to or with the data we got from the user
// Calculate the TOTAL number of customers who visited the store during the four hours
const totalCustomers = hour1Customers + hour2Customers + hour3Customers + hour4Customers;

const numHours = 4;
// Calculate the AVERAGE number of customers who visited the store during the four hours

const averageCustomers = totalCustomers / numHours;

// Output (O)
// Show the results/answer
const myOutput = `
Rolling W Feed Store Customer Statistics

Number of Customers (First Hour): ${hour1Customers}
Number of Customers (Second Hour): ${hour2Customers}
Number of Customers (Third Hour): ${hour3Customers}
Number of Customers (Fourth Hour): ${hour4Customers}

Total Customers Over Four Hours: ${totalCustomers}
AVG Number of Customers Per Hour: ${averageCustomers}`;

console.log(myOutput);