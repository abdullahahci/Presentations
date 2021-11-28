/* alert is Only in browsers, bound to the window object */
alert('Hello World!')

console.log('Hello World!')

/* this-> 'Global' in node, 'Window' on browsers*/

/* 
In a method, this refers to the owner object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), and apply() can refer this to any object. 
*/

console.log(this)

var object = {
    a: 1,
    b: 2,
    c: function(){
        console.log("logging variables " + (this.a + " " + this.b))
        console.log("logging this: " + this)
    },
    toString(){
       return `a: ${this.a}, b: ${this.b}`;
    }
}
object.c();


var person1 = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
var person2 = {
    firstName:"John",
    lastName: "Doe",
}
console.log(person1.fullName.call(person2));  // Will return "John Doe"