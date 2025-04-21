function solve (...input){
    let obj = {};
    input.forEach(element => {
        let type = typeof(element)
        console.log(`${type}: ${element}`)
        if (!obj.hasOwnProperty(type)){
            obj[type] = 0;
        }
            obj[type] ++;     
    });

    console.log(Object.entries(obj)
    .sort((a, b) => b[1] - a[1])
    .map(e =>e.join(' = '))
    .join('\n'));
}

solve ({ name: 'bob'}, 3.333, 9.999);