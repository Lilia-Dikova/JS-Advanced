import { assert } from 'chai';
import {isSymmetric} from './solution.js';

describe ('Symetry Checker', function(){
    it('Returns true if the input array is symmetric', () => {
        let arr = [1,0,0,1];
        assert.isTrue(isSymmetric(arr))
    });
    it ('Returns Fasle if not Symetric', () => {
        assert.isFalse(isSymmetric([1,0,1,0]))
    });
    it ('Returns false for incorrect input',() =>{
        assert.isFalse(isSymmetric(1))
    });
    it ('Returns false for incorrect input',() =>{
        assert.isFalse(isSymmetric('mimi'))
    });
    it('return true if is symmetric string array', ()=>{
        assert.isTrue(isSymmetric(['yes','no','yes']));
    });

    it('return false if is not symmetric only type is different', ()=>{
        assert.isFalse(isSymmetric([1,2,'1']));
    });
});
