function solve (arr, del) {
    return arr
    .filter((num, i) => i % del == 0);
}

console.log(solve(['5',

'20',

'31',

'4',

'20'],

2))