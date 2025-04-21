function solve (arr) {
    let biggestOne = arr[0];

    return arr
    .filter(x => {
        if (x >= biggestOne) {
            biggestOne = x;
            return true;
        }
    })
}

function solve2 (arr) {
    let biggestOne = Number.MIN_SAFE_INTEGER;

     return arr.reduce((acc,el) => {
        if (el >= biggestOne) {
            biggestOne = el;
            acc.push(el);
        }
        return acc;
    }, []);
}

console.log (solve2 ([1,3,8,4]));