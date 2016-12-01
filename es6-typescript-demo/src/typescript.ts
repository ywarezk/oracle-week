/**
 * webpack compiles my typescript files
 */

const myString : string = 'hello';

interface Pokemon{
    name : string,
    date : Date
}

let myDict : Pokemon = null;

myDict = {name: 'yariv', date: new Date()};
// myDict['date'] = 'hello';

class Person implements Pokemon{
    name = '';
    date = new Date();
    constructor(name){
        this.name = name;
        this.date = new Date();
    }
}

function retPerson() : Person {
    return new Person('yariv');
}

