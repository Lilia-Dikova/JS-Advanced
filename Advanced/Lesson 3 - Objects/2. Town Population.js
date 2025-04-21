function solve (arg) {
    const towns = {};
    
    arg.forEach(element => {
        let [name, population] = (element.split('<->'));
        population = Number(population);
        if (towns[name] != undefined) {
            population += towns[name];
        }
    
        towns[name] = population;
    
    });
    
    for (const key in towns) {
        console.log(`${key}: ${towns[key]}`)  
        }
    }
    
    solve(['Istanbul <-> 100000',
    
    'Honk Kong <-> 2100004',
    
    'Jerusalem <-> 2352344',
    
    'Mexico City <-> 23401925',
    
    'Istanbul <-> 1000'])