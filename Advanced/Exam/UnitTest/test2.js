import {weddingDay} from './weddingDay.js'
import { assert } from 'chai'

describe ('Wedding Day', () => {
 describe('Pick Venue', () => {
    it ('Validtes input', () => {
        assert.throw(() => weddingDay.pickVenue(1,1,''),Error, 'Invalid Information!');
        assert.throw(() => weddingDay.pickVenue('',1,'Varna'),Error, 'Invalid Information!');
        assert.throw(() => weddingDay.pickVenue(1,'','test'),Error, 'Invalid Information!');
    });
    it ('Validates location is Varna', () => {
        assert.throw(() => weddingDay.pickVenue(1,1,'test'),Error, 'The location of this venue is not in the correct area!');
    });
    it('Works Correctly with met requirements', () => {
        assert.equal(weddingDay.pickVenue(200,100,'Varna'),`This venue meets the requirements, with capacity of 200 guests and 100$ cover.`)
    });
    it('Requirements are not met', () => {
        assert.equal(weddingDay.pickVenue(140,120,'Varna'),`This venue does not meet your requirements!`);
        assert.equal(weddingDay.pickVenue(151,121,'Varna'),`This venue does not meet your requirements!`);
    });
})
describe ('Other Spenings', ()=>{
    it('Other spendings do have discount', ()=> {
        let decoration = ['Fabric drapes and curtains', 'flowers'];
        let photography = ['pictures' , 'video'];

        let total = 2900 * 0.85;

        assert.equal(weddingDay.otherSpendings(decoration,photography,true), `You spend ${total}$ for wedding decoration and photography with 15% discount!`)
    })
    it('Other spendings do NOT have discount', ()=> {
        let decoration = ['Fabric drapes and curtains', 'flowers'];
        let photography = ['pictures' , 'video'];

        let total = 2900;

        assert.equal(weddingDay.otherSpendings(decoration,photography,false), `You spend ${total}$ for wedding decoration and photography!`)
    })
    it ('Validtes input', () => {
        assert.throw(() => weddingDay.otherSpendings(1,[1,1],true),Error, 'Invalid Information!');
        assert.throw(() => weddingDay.otherSpendings([],1,false),Error, 'Invalid Information!');
        assert.throw(() => weddingDay.otherSpendings([],[],1),Error, 'Invalid Information!');
    });
    describe ('Checks Table Distribution' , () =>{
        it('Check how many guests = less than 6' , () => {
            let guests = 10;
            let tables = 2;
            let peopleOnTable = guests/ tables;

            assert.equal(weddingDay.tableDistribution(guests,tables), `There is only ${peopleOnTable} people on every table, you can join some tables.`)
        });
        it ('Chrcks if seats are correctly distributed', ()=>{
            let guests = 12;
            let tables = 2;
            let peopleOnTable = guests/ tables;

            assert.equal(weddingDay.tableDistribution(guests,tables), `You have ${tables} tables with ${peopleOnTable} guests on table.`)
        })
        it ('Validtes input', () => {
            assert.throw(() => weddingDay.tableDistribution('1',1),Error, 'Invalid Information!');
            assert.throw(() => weddingDay.tableDistribution(1,'1'),Error, 'Invalid Information!');
            assert.throw(() => weddingDay.tableDistribution(-1,1),Error, 'Invalid Information!');
            assert.throw(() => weddingDay.tableDistribution(1,-1),Error, 'Invalid Information!');
        });
    })
})
})