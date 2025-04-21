import { expect } from 'chai'
import {add} from './add.js'

describe('MyTest', function() {
    it("works", function(){
        expect(add(1,1)).equal(3)
    });
});
