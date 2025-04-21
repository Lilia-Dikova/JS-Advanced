function solve (){

    let workers = [{
        name: "Peter",
        value: 300
        },
        {name: "Mimi",
            value: 400}, {name: "Ushe",value: 5 } 
    ]
console.table(workers.sort((a, b) => (a.value < b.value) ? 1 : (a.value > b.value) ? -1 : 0 ));
}
//let sortedRolls = students.sort((r1, r2) => (r1.roll > r2.roll) ? 1 : (r1.roll < r2.roll) ? -1 : 0);

solve()