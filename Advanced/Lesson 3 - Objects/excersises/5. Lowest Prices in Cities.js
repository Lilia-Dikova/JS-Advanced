function cityPrices (data) {

    //{townName} | {productName} | {productPrice}

    let result = {};

    for (let tokens of data) {
        let [townName, productName, productPrice] = tokens.split(' | ')
        productPrice = Number (productPrice);

        if (!result.hasOwnProperty(productName)) {
            result[productName] = {
                townName,
                productPrice
            };
        } else if (result[productName].productPrice > productPrice){
            result[productName].townName = townName;
            result[productName].productPrice = productPrice    
        }

    }
        for (const [key, value] of Object.entries(result)) {
            console.log(`${key} -> ${value.productPrice} (${value.townName})`)
        }

            }

cityPrices ([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000'
  ])  
  debugger