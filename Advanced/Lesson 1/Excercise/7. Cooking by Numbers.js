function solve (...args) {
    
    let num = Number (args[0]);
    args.shift();
    console.log(args)

    const cook = {
        chop() {num /= 2; },
        dice() {num = Math.sqrt (num); },
        spice() {num += 1; },
        bake () {num *= 3; },
        fillet() {num *= 0.8; }
    }
    args.forEach(element => {
      cook[element](num)  

      console.log(num)
    });

    }

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');