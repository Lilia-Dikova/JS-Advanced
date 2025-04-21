import { expect } from 'chai';
import {sum} from './solution.js';

describe ('Suite', function () {
    it ('works with number array',() => {
        const arr = [1,2,3];
        expect(sum(arr)).to.equal(6);
    } )

    /it ('returns 0 for empty array', () => {
         expect(sum([])).to.equal(0);
     })
});