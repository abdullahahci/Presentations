console.log('while')
let a = 1
while (a < 5) {
    console.log(a++)
}

console.log('do while')
do {
    console.log(a--)
} while (a)


console.log('for')

for (var b =0; b<5; b++) {
    console.log(b)
}

console.log('for - skipped parts')
for (; b;) {
    console.log(b--)
}

console.log('break')
while (true) {
    console.log(b++)
    if(b>5) 
        break;
}


console.log('continue')

for (let c =0; c<10; c++) {
    if(c%2 == 0) 
        continue;
    console.log(c)
}


function log(a){
    console.log(a)
}

[2,3,4,5].forEach(console.log);
[2,3,4,5].forEach(log);

// break breaks the execution
let arg = 'e';
switch(arg){
    case 'a':
        console.log('a entered');
        
    case 'b':
        console.log('b entered');
            
    case 'c':
        console.log('c entered')
        break;
        
    case 'd':
        console.log('d entered')
        break;

    default:
        console.log(arg + ' is an invalid value')

}

// type matters
let x = 4;
switch(x){
    case '4': 
        console.log('string');
        break;
    case 4: 
        console.log('int');
        break;
    default:
        console.log('error')
}

// conditional switch
let i = 6;
switch(true) {
    case i<5:
        console.log('smaller than 5');
        break;

    case i==5: 
        console.log('equal to 5');
        break;
        
    case i>5:
        console.log('greater than 5');
        break;
}