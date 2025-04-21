function solve (input) {
    return result = input
    .filter((num, i) => i % 2 !== 0)
    .map (num => num * 2)
    .reverse()
    .join (' ');
}

console.log(solve([3, 0, 10, 4, 7, 3]))

