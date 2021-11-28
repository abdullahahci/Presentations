let x = -1;
x = -x;
console.log(x);


// Remainder % 
console.log(8%3);

// Exponentiation **

console.log(2**3);
console.log(2**4);
// root
console.log(8**(1/3));


// numeric conversion;
let y = '2';
console.log(y + 1);
console.log(+y + 1);


// assignment returns a value
let a = 1;
let b = 2;

let c = 3 - (a = b + 1);
console.log("a:" + a + " b:" + b + " c:" + c)


let d = 2;
d +=2;
d*=3;
console.log("d: "+ d)
d++;
console.log("d: "+ d)
console.log("d: "+ ++d)

// logical operators || and &&

console.log(true || false);
console.log(true && false);

let e = "";
let f = 0;
let g = "this will return"

// converts to boolean first, || finds the first truthy, && finds first falsy
console.log (e || f || g);
console.log (e || f || "or this");
console.log ( f && "this will not return");
console.log ( e && f && "this will not return");

console.log(!true)
console.log(!false)


// Nullish coalescing operator '??', only in ecmascript 11

// let h = "result";
// let result = i ?? h;
// console.log(result);

// result = (i !== null && i !== undefined) ? i : h;

