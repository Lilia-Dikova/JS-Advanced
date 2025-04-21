function solve (num1, num2) {
    num1 = Number (num1);
    num2 = Number (num2);
    let result = 0;

    for (let index = num1; index <= num2; index++) {
        result += index;
    }
    console.log(result);
}

solve(-8, 20)