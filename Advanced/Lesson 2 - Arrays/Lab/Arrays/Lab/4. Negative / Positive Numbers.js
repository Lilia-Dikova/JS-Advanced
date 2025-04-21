function solve (input) {
    const result =  [];
    input.forEach(element => {
         if (element < 0) {
            result.unshift(element);
         } else {
            result.push ( element);
         }
    });
    console.log(result.join(' '));
}

solve([7, -2, 8, 9])
