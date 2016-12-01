/**
 * check to see if my es6 is tranpiled to es5
 */

class Pokemon{
    constructor(name = 'pikachu'){
        this.name = name;
    }

    sayHello(){
        console.log(`${this.name} say hello`);
    }
}

const pikachu = new Pokemon();
pikachu.sayHello();


