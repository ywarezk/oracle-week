/**
 * check to see if my es6 is tranpiled to es5
 */

// variable declaration - const

const myString = [];
// myString = 'hello' //error!
myString.push(5);

// variable declaration let

let myNumber = 5;
myNumber = 'hello';

// scope of let and const
function shouldPrint(isPrint) {
    if(isPrint){
        const message = 'hello world';
    }
    console.log(message);
}
// shouldPrint(true); // will output an error

// class
class Pokemon {
    constructor(name = 'pikachu'){
        this.name = name;
    }

    sayHello(){
        console.log('hello');
    }
}

// inheritance

class Person extends Pokemon{
    constructor(){
        super('yariv');
    }

    sayHello(){
        super.sayHello();
    }
}





