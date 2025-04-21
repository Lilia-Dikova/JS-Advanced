class WineSelection {
    space;
    wines = [];
    bill = 0;

    constructor(space) {
        this.space = space;
    }

    reserveABottle (wineName, wineType, price) {
        if (this.wines.length >= this.space) {
            throw new Error ('Not enough space in the cellar.')
        }
        this.wines.push ({
            wineName,
            wineType,
            price,
            paid: false
        });
         return `You reserved a bottle of ${wineName} ${wineType} wine.`
    }
    payWineBottle( wineName, price ) {
        let findWine = this.wines.find(wine => wine.wineName == wineName);
        if (!findWine) {
            throw new Error (`${wineName} is not in the cellar.`)
        } 
        if(findWine.paid) {
            throw new Error (`${wineName} has already been paid.`)
        } else {
            findWine.paid = true;
            this.bill +=price;
            return `You bought a ${wineName} for a ${price}$.`
        }
    }
    openBottle(wineName) {
        let findWine = this.wines.find(wine => wine.wineName == wineName);
        if (!findWine) {
            throw new Error  (`The wine, you're looking for, is not found.`)
        }
        if (!findWine.paid) {
            throw new Error (`${wineName} need to be paid before open the bottle.`)
        }
        else {
            let index = this.wines.indexOf(findWine);
            this.wines.splice(index,1)
            return `You drank a bottle of ${wineName}.`
        }
    }
    cellarRevision(wineType) {

        if (!wineType) {
            let sortedWines = this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));

            let result = [];

            result.push(`You have space for ${ this.space - this.wines.length } bottles more.`);
            result.push(`You paid ${this.bill}$ for the wine.`);

            sortedWines.map((wine) => {
                let paid;
                
                if (wine.paid) {
                    paid = 'Has Paid'
                } else {
                    paid = 'Not Paid'
                }
                result.push(`${wine.wineName} > ${wine.wineType} - ${paid}.`);
            });
            return result.join('\n').trim();
            
        } else {
            let findWine = this.wines.find(b => b.wineType == wineType);

            if (findWine) {
                let result = [];
                let paid = findWine.payed ? 'Has Paid' : 'Not Paid';
                result.push(`${findWine.wineName} > ${findWine.wineType} - ${paid}.`);
                return result.join('\n').trim();
            } else {
                throw new Error(`There is no ${wineType} in the cellar.`)
            }
        }
    }
}


const selection = new WineSelection(5)

console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));
console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144))
console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50)); 
console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120)); 
console.log(selection.cellarRevision());