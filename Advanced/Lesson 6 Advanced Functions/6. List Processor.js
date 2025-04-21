function solve (input) {

    function createProcessor () {
    let collection = [];

    function add (value) {
        collection.push(value);
    }

    function remove (value) {
       collection = collection.filter((x)=>x !== value);
    }

    function print () {
        console.log(collection.join (','))
    }

    return {
        add,
        remove,
        print
    };
}

let processor = createProcessor();

input.forEach(element => {
    let [command, value ] = element.split (' ');
    processor[command](value)
    
});


   
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve(['add pesho', 'add george', 'add peter', 'remove peter','print']);
