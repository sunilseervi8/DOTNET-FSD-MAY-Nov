// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here


const fruits = [
    { name: 'Apple', color: 'Red', pricePerKg: 3.5 },
    { name: 'Banana', color: 'Yellow', pricePerKg: 1.2 },
    { name: 'Orange', color: 'Orange', pricePerKg: 2.1 },
    { name: 'Grapes', color: 'Purple', pricePerKg: 2.8 },
    { name: 'Mango', color: 'Yellow', pricePerKg: 4.0 },
    { name: 'Strawberry', color: 'Red', pricePerKg: 5.5 },
];
const fruitMap = fruits.reduce((map, fruit) => {
    map[fruit.name.toLowerCase()] = { color: fruit.color, pricePerKg: fruit.pricePerKg };
    return map;
}, {});
function getFruitInfo(fruitName) {
    const fruit = fruitMap[fruitName.toLowerCase()];
    if (fruit) {
        return `Color: ${fruit.color}, Price per Kg: $${fruit.pricePerKg}`;
    } else {
        return 'Fruit not found';
    }
}
console.log(getFruitInfo('Apple')); 
console.log(getFruitInfo('Mango')); 
console.log(getFruitInfo('Blueberry'));