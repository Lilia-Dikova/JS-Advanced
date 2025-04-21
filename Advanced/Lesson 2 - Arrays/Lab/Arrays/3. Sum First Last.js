function solve (input) {
    let sum = Number (input.shift());
    sum += Number (input.pop());

    return (sum);
}

console.log(solve([1,2,3]))