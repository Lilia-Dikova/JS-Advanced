function solve (num) {
    let isSame = true;
    let numAsString = num.toString();
    let sum = Number (numAsString[0]);

    for ( let i = 1; i < numAsString.length; i ++) {
        if (numAsString[i] !== numAsString [i-1]) {
            isSame = false;
        }
        sum += Number(numAsString[i]);
    }

    console.log(isSame);
    console.log(sum)
}
solve (2232)



 // num = Number (num);
    // let digit = num % 10 ;
    // let newDigit = digit;
    // let sum = digit;
    // result = 'true';

    // while (num > 0) {
    //     num = parseInt (num / 10);
    //     if ( newDigit !== digit) {
    //         result = 'false';
    //     }
    //     newDigit = num % 10;
    //     sum +=newDigit;
        
    // }
    // console.log(result);
    // console.log(sum)