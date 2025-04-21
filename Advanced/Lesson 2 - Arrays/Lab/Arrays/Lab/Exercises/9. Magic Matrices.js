function solve (martix) {
    let total = martix[0].reduce((acc,currentVallue) => acc + currentVallue);
    let equal = true;
    let colTotal = 0;
    martix.forEach(element => {
       if ( total !== (element.reduce((acc, num) => acc + num))) {
        equal = false;
       }
});
       for (let i = 0; i < martix[0].length; i ++) {
        colTotal = 0;
        for (let j = 0; j < martix.length; j ++) {
            colTotal += martix[j][i]
        }
        if (total !== colTotal) {
            equal = false;
        }
    }
        return equal
}



console.log(solve(
    [[1, 0, 0], [0, 0, 1]]));