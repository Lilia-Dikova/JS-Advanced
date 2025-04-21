import {findNewApartment} from './findApartment.js'
import { assert } from 'chai'

describe('FindApartment' , () => {
    describe('Is good location', ()=>{
        it('Works correctly with the cities', () => {
            assert.equal(findNewApartment.isGoodLocation('Plovdiv',true),"You can go on home tour!");
            assert.equal(findNewApartment.isGoodLocation('Sofia',true),"You can go on home tour!");
            assert.equal(findNewApartment.isGoodLocation('Varna',true),"You can go on home tour!");
        })
         it('Does not correctly with the cities', () => {
            assert.equal(findNewApartment.isGoodLocation('1',true),"This location is not suitable for you.");
            assert.equal(findNewApartment.isGoodLocation('test',true),"This location is not suitable for you.");
        })
        it('Has false boolean value', () => {
            assert.equal(findNewApartment.isGoodLocation('Plovdiv',false),"There is no public transport in area.");
        })
        it('Validate inputs' , () => {
            assert.throw(() => findNewApartment.isGoodLocation(1,1),Error, "Invalid input!");
        })
    });
    describe('Is Large Enough' , () => {
        it('Check if storage is calulated', () => {
            let apartments = [30,40,50];
            let resultArr = [];
            apartments.map((apartment) => {
                if (apartment >= 35) {
                  resultArr.push(apartment);
                }
        });
        assert.equal(findNewApartment.isLargeEnough(apartments,35),resultArr.join(', '))
    })
    it ('Checks parameters' , ()=> {
        assert.throw(() => findNewApartment.isLargeEnough(1,1),Error, "Invalid input!");
        assert.throw(() => findNewApartment.isLargeEnough([], 1),Error, "Invalid input!");
        assert.throw(() => findNewApartment.isLargeEnough([1], 'test'),Error, "Invalid input!");
    })
})
describe ('Check if affordable' , ()=> {
    it ('Works correctly with enough budget' , ()=> {
        assert.equal(findNewApartment.isItAffordable(50,100),`You can afford this home!`)
    })
    it ('Works correctly without enough budget' , ()=> {
        assert.equal(findNewApartment.isItAffordable(100,50),`You don't have enough money for this house!`)
    })
    it('Validates parameters for budget and price', ()=> {
        assert.throw(() => findNewApartment.isItAffordable(1,'1'),Error, "Invalid input!");
        assert.throw(() => findNewApartment.isItAffordable('1',1),Error, "Invalid input!");
        assert.throw(() => findNewApartment.isItAffordable(0,1),Error, "Invalid input!");
        assert.throw(() => findNewApartment.isItAffordable(1,0),Error, "Invalid input!");
        assert.throw(() => findNewApartment.isItAffordable(-1,-3),Error, "Invalid input!");
    })
})
})