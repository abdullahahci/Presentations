
// Empty Object
let user = new Object(); // "object constructor" syntax
user = {};  // "object literal" syntax

user = {
    name: 'John',
    surname: 'Doe',
    age: 30, 
    'multi word property': 'true',
    print() { console.log(`My name is ${this.name} ${this.surname}`)}
}; 
user.print();

// user with age
console.log(user);
delete user.age;
// user without age
console.log(user);
// user with gender
user.gender = 'M';
console.log(user);
user["multi word property"] = 'example';
console.log(user);

let propName = "multi word property";
user[propName] = 'example changed';
console.log(user);

console.log("Printing key value of the objects");
for (let key in user) {
    if(user[key] instanceof Function) console.log( "property:" + key + " is a function"); 
    else  console.log( "value for key:" + key + ' is ' + user[key]); 
}


// References
console.log("References");
let user_a = {name: "User A"};
let user_b = user_a;
user_b.name = 'User B';
console.log(user_a);


// Assign property
let assigned = {};
let assigned_2 = {};
let assigned_3 = {};

console.log("Assigns")
Object.assign(assigned, [1, 2, 3]);
console.log(assigned);
Object.assign(assigned_2, [user_a]);
console.log(assigned_2);
Object.assign(assigned_3, [assigned, assigned_2]);
console.log(assigned_3);

console.log("change a value of the assigned objects");
assigned[1]="changed value";
console.log(assigned_3);
Object.assign(assigned_3, assigned, assigned_2);
console.log(assigned_3);

console.log("Creating a user");
assigned_user = {};
Object.assign(assigned_user, {name: 'John'});
console.log(assigned_user);
Object.assign(assigned_user, {surname: 'Doe', age: '20'});
console.log(assigned_user);


console.log('Constructors')
// Constructors
function FObject(name, surname){
    this.name = name;
    this.surname = surname;
    this.sayName = function(){
        console.log(`My name is ${this.name} ${this.surname}`);
    }
}

class CObject {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    
    sayName(){
        console.log(`My name is ${this.name} ${this.surname}`);
    }
}

let fVar = new FObject('Will', 'Smith');
console.log(fVar);
fVar.sayName();
let cVar = new CObject('Michael', 'Bay');
console.log(cVar);
cVar.sayName();

//Optional chaining
// let chain_user = null
// console.log(chain_user?.name)
// let chain_user = {name:'John'};
// console.log(chain_user.name)