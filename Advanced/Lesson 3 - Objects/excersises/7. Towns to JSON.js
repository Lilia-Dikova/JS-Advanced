function solve (data) {
    let result = [];
    data.shift();
    for (const iterator of data) {

        let [town, latitude, longtitude] = iterator.split("|").map(x=> x.trim()).filter(x=>!!x)
       
        result.push( { 
            Town: town, 
            Latitude : +Number (latitude).toFixed(2),
            Longitude : +Number (longtitude).toFixed(2)
        } )
    }
    console.log(JSON.stringify(result))
}

solve(['| Town | Latitude | Longitude |',

'| Sofia | 42.696552 | 23.32601 |',

'| Beijing | 39.913818 | 116.363625 |'])