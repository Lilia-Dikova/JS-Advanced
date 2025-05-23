function cityTaxes (...args) {
    const city = {
        name : args[0],
        population : args[1],
        treasury : args[2],
        taxRate : 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {
            this.population += Math.floor(this.population * percentage / 100);
        },
        applyRecession(percentage) {
            this.treasury -= Math.floor (this.treasury * percentage / 100);
        }
    };
    return city 
}

const city =

cityTaxes('Tortuga',

7000,

15000);

city.collectTaxes();

console.log(city.treasury);

 city.applyGrowth(5);

 console.log(city.population);

cityTaxes ('Tortuga',

7000,

15000)