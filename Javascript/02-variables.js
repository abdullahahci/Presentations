var a ="a variable"
var a ="a second variable"
var a ="a third variable"
console.log(a)
let b ="a let variable"
//let b ="a second let variable"

const c = "this is a constant"
// const c = "this is another constant"
if(true) {
    var scopeVar = 'test';
}
console.log(scopeVar + " works!")

function f(){
    var a ="a variable in a function"
    let b = "let variable in function"
    const c = "this is a constant in a function"
    
    console.log("F:" + a + "\n" + b + "\n" + c)
}
console.log(a + "\n" + b + "\n" + c)

console.log("************\n")
f();
console.log("************\n")
console.log(a + "\n" + b + "\n" + c)
function f2(){
    a ="a variable in a function2"
    b = "let variable in function2"
    
    console.log("F2:" + a + "\n" + b + "\n" + c)
}

f2();


console.log("************\n")
console.log("last:" + a + "\n" + b + "\n" + c)


for (var x =1; x<5; x++)
{
    console.log(x)
}

console.log("last x : " + x);


for (let y =1; y<5; y++)
{
    console.log(y);
}

// console.log("last y : " + y);

