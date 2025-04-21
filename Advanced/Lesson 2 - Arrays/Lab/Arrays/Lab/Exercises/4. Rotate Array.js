function rotate (input, num) {
    let actual = num % (input.length); 


    let result = input
    .slice(-actual);
    
    if (actual) {

   for (let i = 0; i < (input.length-actual); i ++) {
    result.push(input[i]);
   }
}

    console.log(result.join(' '))
}

rotate(['1',

'2',

'3',

'4'],

4)