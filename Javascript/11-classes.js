class User {
    #name       // private
    #surname    // private
    _age = 30;  // protected
    pet = 'Cat'        // public
    static planet = 'Earth' // static

    constructor(name, surname) {
        // invokes the setter
        console.log('creating user ');
        this.#name = name;
        this.surname = surname;
        console.log('user created:' + this.fullname);

        this.consBindedSayHi = this.consBindedSayHi.bind(this)
    }

    set name(name){
        console.log('setting name ' + name);
        this.#name = name;
    }

    get name() {
        return this.#name;
    }

    
    set surname(surname){
        console.log('setting surname ' + surname);
        this.#surname = surname;
    }

    get surname() {
        return this.#surname;
    }

    get fullname(){
        return `${this.name} ${this.surname}`;
    }

    set animal (animal){
        this.pet = animal;
    }

    sayHi(){
        console.log(`Hello, my name is ${this.fullname}!`);
    }

    bindedSayHi = () => {
        console.log(`Hello, my name is ${this.fullname}!`);
    }

    consBindedSayHi () {
        console.log(`Hello, my name is ${this.fullname}!`);
    }

}


class SubUser extends User{
    constructor(name, surname) {
        super(name, surname)
    }
    sayHi(){
        console.log(`Merhaba, Benim adim ${this.fullname}!`);
    }
}

let greetings = {
    greet (){
        console.log(`Greetings ${this.fullname}!`);
    },
    sayBye(){
        console.log(`Goodbye dear friend of ${this.fullname}!`);
    }
}

let usr = new User('John', 'Doe');
usr.sayHi()

usr.name='Will';
usr.sayHi()

console.log(usr)
usr.animal = 'Dog'
console.log(usr)

console.log(User.planet)

// checking binds
setTimeout(usr.sayHi, 1100);
setTimeout(usr.bindedSayHi, 1200);
setTimeout(usr.consBindedSayHi, 1300);

let turkish = new SubUser('Ali', 'Veli');
turkish.sayHi();

// checking class
console.log(usr instanceof User);       // true
console.log(turkish instanceof User);   // true

console.log(usr instanceof SubUser);    // false
console.log(turkish instanceof SubUser);// true

// Mixin, copying methods into class 
Object.assign(SubUser.prototype, greetings);
turkish.sayBye();