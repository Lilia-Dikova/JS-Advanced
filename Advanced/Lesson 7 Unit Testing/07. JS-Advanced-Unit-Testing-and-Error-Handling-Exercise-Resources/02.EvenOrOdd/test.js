import { assert } from "chai";
import {isOddOrEven} from "./solution.js"

describe ("Test functionality", function(){
    it('Returns undefiend if not string', () =>{
        assert.isUndefined(isOddOrEven(4))
    })

    it('Returns even', () =>{
        assert.equal(isOddOrEven('Me'),'even')
    })
    it('Returns Odd', () =>{
        assert.equal(isOddOrEven('Too'),'odd')
    })
    it('Emtpy is even', () =>{
        assert.equal(isOddOrEven(''), 'even')
    })
})