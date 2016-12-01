/**
 * our promise example
 */

var promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('our timeout is resolved');
    }, 3000);
});

promise.then(function success(message){
    console.log(message);
}, function error(message){
    console.log('error: ' + message);
});
