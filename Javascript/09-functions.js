// Function Declaration
function a (){
    console.log('a function')
}
a();

// Function Expression, available after its execution
let b = function (){
    console.log('b function')
}
b();

let name = 'John'
let greeting = function(){
    console.log('Hello ' + name);
}
greeting()

function greeting2(name){
    console.log('Hello ' + name);
}
greeting2('Will')


function defaultParam(name, surname = 'Doe'){
    console.log('Hello ' + name + ' ' + surname);
}
defaultParam('John')
defaultParam('John', 'Smith')

function sum(a , b) {
    return a + b;
}
console.log(sum(3, 5))

function multiply(a , b) {
    return a * b;
}

function callback(func, a , b){
    return func(a,b);
}

console.log('Printing with callback')
console.log(callback(sum, 3, 5))
console.log(callback(multiply, 3, 5))

// Arrow functions
console.log('Arrow functions')
let arrowSum = (a,b) => a+b;
let arrowSquare = a => a*a;

console.log('arrowSum:' + arrowSum(2,3));
console.log('arrowSquare:' + arrowSquare(3));

let multiline = (a,b) => {
    console.log('using multiline')
    return (a + b)
}

console.log(multiline(3,4));


// spread syntax
function spread_sum (...args){
    let sum = 0;
    for (let arg of args) sum += arg;
    return `The sum of ${arguments.length} numbers is ${sum}`; // special keyword arguments
}


console.log(spread_sum(1,2));
console.log(spread_sum(1,2,3,4,5));

let arr1 = [0, 1, 2, 3, 4]
let arr2 = [5, 6, 7, 8, 9]
let arr3 = [...arr1, ...arr2]
console.log(spread_sum(...arr3)); // vs console.log(spread_sum(arr3));

