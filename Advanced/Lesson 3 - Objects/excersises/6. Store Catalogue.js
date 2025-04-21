function storageCatalog (input) {
    let result = {};

    for (const tokens of input) {
        let [product, price] = tokens.split (' : ');
        price = Number (price);

        result[product] = price;
        
    }
    let sortProducts = Object.keys(result).sort((a,b) => a.localeCompare(b));
    let letter = 0;

    for(let i = 0; i < sortProducts.length; i ++ ){
        if (sortProducts[i][0].charCodeAt() > letter ) {
            console.log(sortProducts[i][0]);}
            if (result.hasOwnProperty(sortProducts[i])) {
                console.log(`${sortProducts[i]}: ${result[sortProducts[i]]}`)
            }
            letter = sortProducts[i][0].charCodeAt()
      }
    
    // console.table(result)
    // console.log(sortProducts)
    }

storageCatalog (['Appricot : 20.4',
'Fridge : 1500', 
'TV : 1499', 
'Deodorant : 10',
 'Boiler : 300', 
 'Apple : 1.25', 
 'Anti-Bug Spray : 15', 
 'T-Shirt : 10'])