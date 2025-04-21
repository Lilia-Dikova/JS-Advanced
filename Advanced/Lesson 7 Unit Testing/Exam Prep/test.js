import { assert } from "chai";
import { bookSelection } from "./bookSelection.js";

describe('Book Section', ()=> {
    describe(' Is GenreSuitable', ()=>{
        it('Is not suitable Horror, Thriller', ()=> {
            assert.equal(bookSelection.isGenreSuitable('Horror',12),
            `Books with Horror genre are not suitable for kids at 12 age`)
            assert.equal(bookSelection.isGenreSuitable('Thriller',11),
            `Books with Thriller genre are not suitable for kids at 11 age`)
        });
        it('Is suitable for all', ()=> {
            assert.equal(bookSelection.isGenreSuitable('test',11), `Those books are suitable`)
        });
    });

    describe('Is Affordable', ()=>{
        it ('Not enought money', () =>{
            assert.equal(bookSelection.isItAffordable(13, 10),"You don't have enough money" )
        });
        it ('Is enought money', () =>{
            assert.equal(bookSelection.isItAffordable(10, 13),`Book bought. You have 3$ left`)
        });
        it('if the price and budget are not a number, throw an error', () => {
            assert.throw(() => bookSelection.isItAffordable(), Error, 'Invalid input');
            assert.throw(() => bookSelection.isItAffordable('1', 1), Error, 'Invalid input');
            assert.throw(() => bookSelection.isItAffordable(1, '1'), Error, 'Invalid input');
        });
    });

})
