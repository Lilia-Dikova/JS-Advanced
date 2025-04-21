import { assert } from "chai";
import { mathEnforcer } from "./solution.js";
import { expect } from "chai";

describe ('Test Math Enforcerer', ()=> {
    describe('Add Five', () => {
        it('Returns unidentified',()=>{
            assert.isUndefined(mathEnforcer.addFive('1'));
            assert.isUndefined(mathEnforcer.addFive());
            assert.isUndefined(mathEnforcer.addFive(''));
        });
          it('should return correct result for positive integer param', () => {
            assert.equal(mathEnforcer.addFive(5), 10);
        })

        it('should return correct result for negative integer param', () => {
            assert.equal(mathEnforcer.addFive(-10), -5);

        });

        it('should return correct result for positive floating point param', () => {
            assert.closeTo(mathEnforcer.addFive(3.14), 8.14, 0.01);
        });
    });
    describe('Sum', () => {
        it('should return undefined for non-number input', () => {
            assert.isUndefined(mathEnforcer.sum());
            assert.isUndefined(mathEnforcer.sum('', 1));
            assert.isUndefined(mathEnforcer.sum('1', 1));
            assert.isUndefined(mathEnforcer.sum(1, ''));
            assert.isUndefined(mathEnforcer.sum(1, '1'));
        });
        it ('Works with Positive number', () => {
            assert.equal(mathEnforcer.sum(1,2),3);
        });
        it ('Should return correct with floating',() => {
            assert.closeTo(mathEnforcer.sum(3.14, 2.1), 5.24, 0.01);
        });
        it ('Works with negative',() => {
            assert.equal(mathEnforcer.sum(-10,-5),-15);
        });
    });
        describe('Substract Ten', () => {
            
            it('Returns unidentified',()=>{
                assert.isUndefined(mathEnforcer.subtractTen('1'));
                assert.isUndefined(mathEnforcer.subtractTen());
                assert.isUndefined(mathEnforcer.subtractTen(''));
            });

        it ('Works with Positive number', () => {
            assert.equal(mathEnforcer.subtractTen(16),6);
        });
        it ('Should return correct with floating',() => {
            assert.closeTo(mathEnforcer.subtractTen(15.14),5.14,0.1);
        });
        it ('Works with negative',() => {
            assert.equal(mathEnforcer.subtractTen(-10),-20);
        });
    })
})