import { motorcycleRider } from "./Motorcycle Rider.js";
import { assert} from "chai";


describe('Motorcycle Rider' , ()=> {
    describe('Licence Restriction', () => {
        it('Gives information about restrictions based on correct category', ()=>{
            assert.equal(motorcycleRider.licenseRestriction('AM'),'Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.');
            assert.equal(motorcycleRider.licenseRestriction('A1'),'Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.' );
            assert.equal(motorcycleRider.licenseRestriction('A2'),'Motorcycles with maximum power of 35KW. and the minimum age is 18.')
            assert.equal(motorcycleRider.licenseRestriction('A'),'No motorcycle restrictions, and the minimum age is 24.')
        });
        it('Throws an error when incorrect category is added', ()=> {
            assert.throw(()=> motorcycleRider.licenseRestriction('1'), Error, 'Invalid Information!')
        });
    });
    describe('Motorcycle Showroom', ()=> {
        it('Checks the number of bykes fitted for the category', ()=> {
            assert.equal(motorcycleRider.motorcycleShowroom([125,250,600],300),'There are 2 available motorcycles matching your criteria!')
        });
        it('Validate input / not array , not number', ()=> {
            assert.throw(()=> motorcycleRider.motorcycleShowroom('1',100), Error, 'Invalid Information!');
            assert.throw(()=> motorcycleRider.motorcycleShowroom([1,1],'1'), Error, 'Invalid Information!');
            assert.throw(()=> motorcycleRider.motorcycleShowroom([],51), Error, 'Invalid Information!');
            assert.throw(()=> motorcycleRider.motorcycleShowroom([1,1],49), Error, 'Invalid Information!');
        });
    })
    describe ('Other spengings', () => {
        it('Calulates correctly + discount', ()=>{
            let equipment = ['helmet', 'jacked'];
            let consumables = ['engine oil', 'oil filter'];
            let price = 600;
            let dicsountedPrice = 540

            let test = motorcycleRider.otherSpendings;

            assert.equal(test(equipment,consumables,false), `You spend $${price.toFixed(2)} for equipment and consumables!`);
            assert.equal(test(equipment,consumables,true), `You spend $${dicsountedPrice.toFixed(2)} for equipment and consumables with 10% discount!`)
         })
         it ('Validates input', ()=> {
            assert.throw(()=> motorcycleRider.otherSpendings([1],'1',true), Error, 'Invalid Information!');
            assert.throw(()=> motorcycleRider.otherSpendings('1',[1],true), Error, 'Invalid Information!');
            assert.throw(()=> motorcycleRider.otherSpendings([1],'1',false), Error, 'Invalid Information!');
            assert.throw(()=> motorcycleRider.otherSpendings([1],[1],'1'), Error, 'Invalid Information!');

         })
        })
    })