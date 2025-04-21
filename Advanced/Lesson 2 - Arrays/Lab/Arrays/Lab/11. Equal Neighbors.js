function solve (matrix) {
    let match = 0;
    let num1 = 0;
    let num2 = 0;
    let num3 = 0;
    let num4 = 0;

        for (let j = 0; j < matrix[0].length; j ++) {
            for (let i = 0; i < matrix.length - 1; i ++) {
                num1 = matrix[i][j]
                num2 = matrix[i+1][j]
                if (num1 === num2) {
                    match ++;
                }
                }
        }
        for (let i = 0; i < matrix.length; i ++) {
            for (let n = 0; n < matrix[0].length - 1; n++) {
                num3 = matrix[i][n]
                num4 = matrix[i][n+1]

                if ( num3 === num4) {
                    match ++;
         }
        }
    }
    console.log(match)
}
solve (
[['2', '3', '4', '7', '0'],

['2', '5', '5', '3', '4'],

['2', '3', '5', '4', '2'],

['9', '8', '7', '5', '4']])