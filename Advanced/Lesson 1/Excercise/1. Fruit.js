function solve (...args) {
    let fruit = args[0];
    let weight = Number (args[1]) / 1000;
    let price = Number (args[2]);
    let money = weight * price

    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`)
}

solve('orange', 2500, 1.80)