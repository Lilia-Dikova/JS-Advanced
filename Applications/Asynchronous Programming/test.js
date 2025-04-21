function symbol (condition) {
    let symbol = ''
    switch (condition) {
        case 'Sunny': symbol = '&#x2600'; break;
        case 'Partly sunny': symbol = '&#x26C5'; break;
        case 'Overcast': symbol = '&#x2601'; break; 
        case 'Rain': symbol = '&#x2614'; break; 
        case 'Degrees': symbol = '&#176'; break; 
    }
    return symbol;
    
}

console.log(symbol('Rain'))