import {findNewApartment} from './findApartment.js'
import { assert } from 'chai'

describe('FindApartment' , () => {
    describe('Is good location', ()=>{
        it('Works correctly with the cities', () => {
            assert.equal(findNewApartment.isGoodLocation('Plovdiv',true),"You can go on home tour!");
            assert.equal(findNewApartment.isGoodLocation('Sofia',true),"You can go on home tour!");
            assert.equal(findNewApartment.isGoodLocation('Varna',true),"You can go on home tour!");
        });
        it ('Works correctly if different city is added' , () => {
            assert.equal(findNewApartment.isGoodLocation('1', true),'This location is not suitable for you.');
            assert.equal(findNewApartment.isGoodLocation('test', true),'This location is not suitable for you.');
        })
        it ('Tests false boolean' , () => {
            assert.equal(findNewApartment.isGoodLocation('Plovdiv', false),'There is no public transport in area.');
        })
        it ('Validate input', () => {
            assert.throw(() => findNewApartment.isGoodLocation(1,1), Error, 'Invalid input!')
        })
    })
    describe ('Is Large Enough', () => {
        it ('Checks space' , () =>{
            let apartments = [40,50,100];
            let minimalSquareMeters = 49;

            assert.equal(findNewApartment.isLargeEnough(apartments,minimalSquareMeters), '50, 100');
        });
        it ('Validate input' , () =>{
            assert.throw (() => findNewApartment.isLargeEnough(1,1),Error, 'Invalid input!');
            assert.throw (() => findNewApartment.isLargeEnough([],1),Error, 'Invalid input!');
            assert.throw (() => findNewApartment.isLargeEnough([1,1],'1'),Error, 'Invalid input!');
        })
    })
    describe ('Is Affordable', () =>{
        it ('Check is affordable', ()=>{
            assert.equal(findNewApartment.isItAffordable(11,2),"You don't have enough money for this house!");
        })
        it ('Check if not affordable', () => {
            assert.equal(findNewApartment.isItAffordable(2,11),"You can afford this home!");
        })
        it('Validates input', () => {
            assert.throw(() => findNewApartment.isItAffordable(1,'1'), Error, 'Invalid input!');
            assert.throw(() => findNewApartment.isItAffordable('1',1), Error, 'Invalid input!');
            assert.throw(() => findNewApartment.isItAffordable(1,0), Error, 'Invalid input!');
            assert.throw(() => findNewApartment.isItAffordable(0,1), Error, 'Invalid input!');
        })
    })
})