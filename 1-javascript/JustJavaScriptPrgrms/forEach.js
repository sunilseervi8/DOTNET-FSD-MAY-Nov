// Create an empty array
let array = [];

// Add elements to the array using a for loop
for (let i = 0; i < 5; i++) {
    array.push(i * 2); // Adding even numbers as an example
}

// Print each element using forEach
array.forEach(function(element) {
    console.log(element);
});
