function solve (arr) {
    let obj = {};
    for (let i = 0; i < arr.length - 1; i ++) {
        let name = arr[i ++];

        let cal = Number (arr[i]);
        if (obj.hasOwnProperty(name)) {
            obj[name] += cal;
        } else {
            obj[name]= cal;
        }
    }
    return obj
}
console.log(solve(['Yoghurt', '48', 'Rise', '138',

'Apple', '52']))