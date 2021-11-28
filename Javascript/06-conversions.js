// String conversions

let value = true;
console.log(typeof value); // boolean

value = String(value); // now value is a string "true"
console.log(typeof value); // string



// Numeric conversions
console.log( "6" / "2" ); // 3, strings are converted to numbers
console.log( "a" / "2" ); // 3, strings are converted to numbers

let str = "123";
let num = Number(str); 

console.log("num type is: " + typeof num);
console.log("num type is: " + typeof (str *1));

let bool1 = true, bool2 = false;
let ibool = Number(bool1), ibool2 = Number(bool2);

console.log("ibool is: " + ibool);
console.log("ibool2 is: " + ibool2);

let int = 1;
console.log(int + " is a " + typeof int )

int += 2;
console.log(int + " is a " + typeof int)

int += '3';
console.log(int + " is a " + typeof int)

int += 4;
console.log(int + " is a " + typeof int)

// whats the output?
// console.log (1 + 2 + "3" + 4 + 5)

// bool conversions
console.log( Boolean(5) ); // true
console.log( Boolean(0) ); // ture

console.log( Boolean("hello") ); // true
console.log( Boolean("") ); // false
console.log( Boolean(" ") ); // non-empty string is true

