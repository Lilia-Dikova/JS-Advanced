function solve (input) {
    return input
    .filter((num, i) => (i % 2 === 0)) 
    .join(' ');
}

console.log(solve(['20', '30', '40',

'50', '60']))