function solve (matrix) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    let firstIndex = 0;
    let secondIndex = matrix.length - 1;

matrix.forEach(array => {
firstDiagonal += array[firstIndex++];
secondDiagonal += array[secondIndex--];
});
console.log(firstDiagonal + ' ' + secondDiagonal);
}

solve (
    [[20, 40], 
    [10, 60]])