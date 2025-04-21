function solve (input) {
    let result = [];

    input.map ((command,i) => { 
        switch(command){
            case "add": result.push(Number(i) + 1); break;
            case "remove": result.pop(Number(i) + 1); break;
    }
    });
    return result.length ? result.join('\n') : "Empty"
} 

console.log(solve(['remove', "add"]))