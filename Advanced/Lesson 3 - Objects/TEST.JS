let count = 5;

const parser = {
increment() { count++; },
decrement() { count--; },
reset() { count = 0; }
}

let solve = ["increment", "decrement", "reset"]

solve.forEach(element => {
    parser[element](count);
    console.log (count)
});


console.log (count)