function outer () {
    let count = 5;
    let name = 'Peter';

    function meee (a,b) {
        console.log(name);
        count ++
        return count;
    }
    return meee
}

const inner = outer();
console.log(inner())
console.log(inner())
console.log(inner())