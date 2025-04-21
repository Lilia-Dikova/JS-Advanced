console.log('Hello');

const p = new Promise (executor);
p.then(onSuccess).catch(onError)

function executor(resolve,reject) {
    console.log('executing')
    //reject('Bye!');
    resolve('Bye!')
    
}
function onSuccess (data) {
    console.log(data)
}

console.log('there');

function onError(error) {
    console.log(`Encountered error:`, error)
}

