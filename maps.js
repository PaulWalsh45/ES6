// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

console.log(fruits.has("apples"))
console.log(fruits.has("grapes"))

console.log(fruits.get("apples"))
console.log(fruits.size)

console.log(fruits.entries())

//list all 