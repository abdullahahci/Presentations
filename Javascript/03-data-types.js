
// String
let s = "hello";

// number or float
let n = 123;
n = 12.345;

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

let bool = true;

let nullvar = null;

let undef;
// console.log(undef)
// console.log(undef == undefined)


typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"  (1)
typeof null // "object"  (2)
typeof alert // "function"  (3)

/* NUMBERS */
let billion = 1000000000;
let billion_ = 1_000_000_000;
let e_billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes

let millis = 0.000001; //let ms = 1e-6; // six zeroes to the left from 1
let num = 255;

console.log( num.toString(16) );  // ff
console.log( num.toString(2) );   // 11111111

let number = 1.23456;
console.log(number.toFixed(2)); // 1.23

console.log( "Floor of number" + Math.floor(number) )  // 1
console.log( "Ceil of number" + Math.ceil(number) )  // 2
console.log( "Round of number" + Math.round(number) ) // 1


console.log(parseInt('100px')) // drops characters
console.log(parseInt('100.25vh'))  // drops float points also
console.log(parseFloat('100.25vh'))

console.log( parseInt('0xff', 16) ); // 255
console.log( parseInt('1111', 2) ); // 255, without 0x also works

console.log( Math.random() ); 
console.log( Math.max(1, 2, -10, 5, 101, 25) ); // 5
console.log( Math.min(1, 2, 3, -10, 5) ); // 1


/* STRINGS */
let single = 'single-quoted';
let double = "double-,quoted";

let backticks = `backticks ${1 + 2}`;
console.log(backticks)

let guestList = `Guests:
 * Ali
 * Veli
 * Ayse
`;
console.log(guestList)

let escaped = 'I\'ve got en escaped character'

let string = 'I am a simple string'
console.log('length of the string is ' + string.length);    // 20

console.log('Uppercase ' + string.toUpperCase());                   // I AM A SIMPLE STRING
console.log('Locale Uppercase ' + string.toLocaleUpperCase('TR'));  // I AM A SİMPLE STRİNG

console.log('index of a:' + string.indexOf('a'))            // 2
console.log('index of o:' + string.indexOf('o'))            // -1
console.log('last index of a:' + string.lastIndexOf('a'))   // 5

console.log('inlcuedes function'.includes('function'))      // true
console.log('inlcuedes function'.startsWith('inlcuedes'))   // true
console.log('inlcuedes function'.endsWith('function'))      // true

// substring, substr and slice all do the job
console.log('substring'.substr(3))      // string
console.log('substring'.slice(3))       // string
console.log('substring'.slice(4, -1))   // trin


console.log('Tu'.localeCompare('Su')) // -1

/* ARRAYS */
let arr = new Array();
let fruits = ["Apple", "Orange", "Pear"];
fruits[3] = 'Lemon';  //[ 'Apple', 'Orange', 'Pear', 'Lemon' ]
console.log(fruits)
let complicated = [1, "2", {'3':'4'},true, function (){return 'hello'}]
console.log(complicated)

fruits.push('Banana') // [ 'Apple', 'Orange', 'Pear', 'Lemon', 'Banana' ]
let fruit = fruits.shift () // fruit: 'Apple', fruits: ['Orange', 'Pear', 'Lemon', 'Banana' ]
let another_fruit = fruits.pop(); // another_fruit: 'Banana', fruits: ['Orange', 'Pear', 'Lemon']
fruits.unshift('Apple') // [ 'Apple', 'Orange', 'Pear', 'Lemon' ]

for(let a_fruit of fruits) console.log(a_fruit)
for(let key in fruits) console.log(fruits[key])

let two_dimensional = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


arr = ['this', 'is', 'an', 'array', '!'];
let removed = arr.splice(2, 1) // from index 2, delete 1 element removed = ['an'], arr = [ 'this', 'is', 'array', '!' ]
arr = [1, 2, 3, 4, 5];
arr.splice(0, 2, {1:'-1',2:'-2'}); // [ { '1': '-1', '2': '-2' }, 3, 4, 5 ]
arr.slice(1,4); // slices the array, returns sub array -> [ 3, 4, 5 ]
[0,1,2].concat([3,4],5,6); // [0, 1, 2, 3, 4, 5, 6 ]


[1, 2, 3, 4, 5].forEach((e)=>console.log(e));

['a', 'b', 'c', 'd', 'e'].forEach((item, index)=>console.log(`item ${item} is at index ${index}`));

[0, 1, 2, 3, 4, 5].indexOf(3); // 3
[0, 1, 2, 3, 4, 5].includes(6); // false

let users = [
    {id: 1, name: "Ali"},
    {id: 2, name: "Veli"},
    {id: 3, name: "Ayse"}
];

users.find(user => user.id == 1); // {id: 1, name: "Ali"}
users.filter(user => user.name.startsWith('A')); // [ { id: 1, name: 'Ali' }, { id: 3, name: 'Ayse' } ]

[1, 2, 3, 4, 5].map(item => item *2); // [ 2, 4, 6, 8, 10 ]

[1, 5, 3, 2, 4].sort(); // [ 1, 2, 3, 4, 5 ]

[1, 5, 3, 2, 4].sort((a, b) => b-a); //[ 5, 4, 3, 2, 1 ]

[1, 2, 3, 4, 5].reverse(); //[ 5, 4, 3, 2, 1 ]

arr = 'This,will,be,a,splitted,meesage'.split(','); //[ 'This', 'will', 'be', 'a', 'splitted', 'meesage' ]

arr = 'Character split'.split(''); // [ 'C', 'h', 'a', 'r', 'a', 'c', 't', 'e', 'r', ' ', 's', 'p', 'l', 'i', 't' ]
let joined = ['j', 'o','i','n'].join('.') // j.o.i.n

arr = [1, 2, 3, 4, 5];
arr.reduce((sum, current) => sum + current); // 15
arr.reduce((m, current) => m * current); // 120
arr.reduce((sum, current) => sum * current, -1); // -120


// MAP
/**
 * new Map() – creates the map.
 * map.set(key, value) – stores the value by the key.
 * map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
 * map.has(key) – returns true if the key exists, false otherwise.
 * map.delete(key) – removes the value by the key.
 * map.clear() – removes everything from the map.
 * map.size – returns the current element count.
 */

let m = new Map();
m.set(1, 1);
m.set(2, 4);
m.set(3, 9);
m.get(2); // 4

console.log(m.keys()) // { 1, 2, 3 }
console.log(m.values()) // { 1, 4, 9 }
console.log(m.entries()) // { [ 1, 1 ], [ 2, 4 ], [ 3, 9 ] }

m.forEach((value, key, map) => console.log(`the  value of the key ${key} is ${value}`))

Object.fromEntries(m.entries()) // returns object { '1': 1, '2': 4, '3': 9 }

// SET
/**
 * new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
 * set.add(value) – adds a value, returns the set itself.
 * set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
 * set.has(value) – returns true if the value exists in the set, otherwise false.
 * set.clear() – removes everything from the set.
 * set.size – is the elements count.
 */

let set = new Set(["Bus", "Air Plane", "Car"]);
set.add('Ship');
set.delete('Car')
for (let value of set) console.log(value);

console.log()


// OBJECTS
let user = {
    name: "John",
    surname: "Doe",
    age: 35
};

let second_user = {...user}; // { name: 'John', surname: 'Doe', age: 35 }
console.log(second_user===user) // false

let{age, name, surname} = user;

let{age:ua, name:un, surname:us} = user;
console.log(`${name} ${surname} is ${age} years old`)
console.log(`${un} ${us} is ${ua} years old`)

let book = {title: 'Harry Potter', writer: 'J. K. Rowling', published: '1998'}
let {published, ...rest} = book; // published: 1998, rest: { title: 'Harry Potter', writer: 'J. K. Rowling' }
({age, name, surname} = { name: "Will", surname: "Smith", age: 45 })  // paranthesis needed if using pre-defined variables

// DATE AND TIME

let now = new Date();
let date = new Date("2017-01-26");
date = new Date(2021, 0, 1, 01, 59, 30, 0); // 2020-12-31T22:59:30.000Z

console.log(date)
console.log(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds())
console.log(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds())

let ms = Date.parse('2012-01-26T13:51:50.417-07:00'); // number of milliseconds from 1 Jan 1970 UTC+0

// JSON

let juser = {
    name: "John",
    surname: "Doe",
    age: 35
};

console.log(JSON.stringify(juser)); //{"name":"John","surname":"Doe","age":35}

let custom = {
    name: "John",
    surname: "Doe",
    age: {
        age :35,
        toJSON() {
            return `My age is ${this.age}`
        }
    }
};
console.log(JSON.stringify(custom, null, 4));

let parsedUser = JSON.parse('{"name":"John","surname":"Doe","age":35}')
console.log(parsedUser)

let juser2 = {
    name: "John",
    surname: "Doe",
    next: {
        name: "John2",
        surname: "Doe2",
    }
};
console.log(JSON.stringify(juser2));