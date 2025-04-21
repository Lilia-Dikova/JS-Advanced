function heroicInventory (info) {

    let result = [];

    for (let i = 0; i < info.length ; i ++) {
        let [heroName, heroLevel, item] = (info[i].split(' / '))
        item = item ? item.split(", ") : []
  
        let obj = {
            name: heroName,
            level: Number (heroLevel),
            items: item
        }
        
        result.push(obj)
    }
        console.log(JSON.stringify(result))
    }     

heroicInventory (['Isacc (/ 25 / Apple, GravityGun',

'Derek / 12 / BarrelVest',

'DestructionSword',

'Hes / 1 / Desolator, Sentinel, Antara'])