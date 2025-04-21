function gcd(arg1, arg2) {
    let a = Number(arg1);
    let b = Number(arg2);

    while (b != 0) {
    let oldB = b;
    b = a % b;
    a = oldB;
    }
    console.log( a);
    }
   gcd ([15,5])