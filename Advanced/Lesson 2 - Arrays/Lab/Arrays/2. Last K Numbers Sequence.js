function mySolution (n, k) {
    let result = [1];
    n = Number (n);
    k = Number (k);

    while (result.length < n) {
        let cut = Math.max ( result.length - k, result.length)
        let sum = 0;

        for (let i = cut - 1; i >= 0 ; i --) {
             sum += result[i] 
              if (cut - i == k) {
              break;
             }
        }
        result.push(sum);
    }
    return result;
}

mySolution (8,2)
