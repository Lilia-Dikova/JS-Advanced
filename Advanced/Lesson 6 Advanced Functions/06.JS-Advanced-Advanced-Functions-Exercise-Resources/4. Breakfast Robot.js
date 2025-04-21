function solution () {

    const store = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    const recipes = {
        apple: {carbohydrate: 1, flavour: 2},
        lemonade: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        eggs: {protein: 5, fat: 1, flavour: 1},
        turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    }

    return function (data) {
        let [action, type, qty] = data.split(' ');

        switch (action) {
            case "restock": return restock(type, qty)
            case "prepare": return prepare (type, qty)
            case "report": return report();
        }
    }

    function report() {
        return `protein=${store.protein} carbohydrate=${store.carbohydrate} fat=${store.fat} flavour=${store.flavour}`;
     }
        function restock (type, qty) {
            store[type] += Number (qty);
            
            return "Success";
        }

        function prepare (type, qty) {
            let ingridients = Object.entries(recipes[type]);
            for (const [ingredient, needed] of ingridients) {
                if (store[ingredient] < needed * qty){
                    return `Error: not enough ${ingredient} in stock`;
                }
            }
            for (const [ingredient, needed] of ingridients) {
                store[ingredient] -= needed * qty
            }
            return 'Success';
        }
    }
        
let manager = solution ();

    console.log (manager ('restock carbohydrate 10')); // Success
    console.log (manager ('restock flavour 10')); // Er
    console.log(manager('prepare apple 1'))
    console.log(manager('restock fat 10'))
    console.log(manager('prepare burger 1'))
    console.log(manager('report'))


    // ['restock carbohydrate 10', 'Success'],
    // ['restock flavour 10', 'Success'],
    // ['prepare apple 1', 'Success'],
    // ['restock fat 10', 'Success'],
    // ['prepare burger 1', 'Success'],
    // ['report', 'protein=0 carbohydrate=4 fat=3 flavour=5']