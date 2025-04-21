function solve (input) {
    return result = input
    .sort((a,b) => a - b)
    .splice(input.length / 2);
}
console.log(solve([3, 19, 14, 7, 2, 19, 6]))