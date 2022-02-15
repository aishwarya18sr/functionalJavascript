const repeat = require('../higherOrderFunction.js');

describe('repeat function', function() {
    xit('should be called num times', () => {
        const operation = () => {};
        const spy = jest.fn(operation);
        repeat(operation,5);
        expect(operation).toBeCalledTimes(5);
    });
    it('should throw invalid input when array is given as input', () => {
      try{
     repeat(()=>{},[1,2]);
      }
      catch(err){
      expect(err.message).toBe('Not a valid input type for num.');
      }
    })
    it('should throw invalid input when boolean is given as input', () => {
        try{
       repeat(()=>{},true);
        }
        catch(err){
        expect(err.message).toBe('Not a valid input type for num.');
        }
      })
    it('should throw invalid input when string is given as input', () => {
        try{
       repeat(()=>{},'hello');
        }
        catch(err){
        expect(err.message).toBe('Not a valid input type for num.');
        }
      })
    it('should throw invalid input when floating point number is given as input', () => {
        try{
       repeat(()=>{},5.5);
        }
        catch(err){
        expect(err.message).toBe('Not a valid input type for num.');
        }
      })
});