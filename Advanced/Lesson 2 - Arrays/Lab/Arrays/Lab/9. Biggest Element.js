function solve (matrix) {
    let num = Number.NEGATIVE_INFINITY;

    for (let key in matrix) {
        for ( let i = 0; i < matrix[key].length ; i ++) {
            if (matrix[key][i] > num) {
                num = matrix[key][i];
            }
        }
    }
 return (num);
}

 console.log (solve([[20, 50, 10],

    [8, 33, 145]]));