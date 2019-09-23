const expect = require('expect') 

const { isRealString } = require('./validation')

// isRealstring
    // should reject non-string value
    // should reject string with only spaces
    // should allow string with non-space characters


describe('isRealString', () =>{
    it ('should reject non-string value', ()=>{
        var res = isRealString(98);
        expect(res).toBe(false)
    });
    
    it('should reject string with only spaces', ()=>{
        var res = isRealString('   ')
        expect(res).toBe(false);
    })
    it('should allow string with non-space characters',()=>{
        var res = isRealString('  Andrew   ')
        expect(res).toBe(true);
    })
})

