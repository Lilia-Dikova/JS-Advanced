function solve (arr) {
    arr
    .sort((a,b) => a.localeCompare(b))
    .forEach((element, i)  => {
        console.log(`${i + 1}.${element}`)
    });
}

solve(["John",

"Bob",

"Christina",

"Ema"])