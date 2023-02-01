// before
hello = function() {
    return "Hello World";
}

// with arrow function
hello1 = () => {
    return "Hello World 1";
}

// arrow functions return value by default
hello2 = () => "Hello World 2";

// arrow functions with parameters
hello3 = (val) => "Hello3 " + val;

// arrow functions without parenthesis
hello4 = val => "hello4 "+ val;

console.log(hello());
console.log(hello1());
console.log(hello2());
console.log(hello3("Jimmy"))
console.log(hello4("Joxer"))
console.log(hello4("Billy"))