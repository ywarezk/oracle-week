/**
 * webpack compiles my typescript files
 */

import {ajax} from 'rxjs/Observable/dom/ajax';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


class Task{
    public title : string;
    public description: string;
    constructor(obj){
        this.title = obj.title;
        this.description = obj.description;
    }
}

const serverObservable : Observable<Task[]> = ajax
    .getJSON('https://nztodo.herokuapp.com/api/task/?format=json')
    .map((response) => {
        const result : Array<Task> = [];
        for(let i=0; i<(response as any).length; i++){
            result.push(new Task(response[i]));
        }
        return result;
    });


serverObservable.subscribe(function(arrTasks : Array<Task>){
    console.log('response recieved');
    debugger;
});