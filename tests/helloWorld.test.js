const upperCaser = require('../helloWorld.js');

describe('upperCaser function', function() {
    it('should return a upper cased string when a proper string input is given', () => {
        const result = upperCaser('Hello world!');
        expect(result).toBe('HELLO WORLD!');
    });
    it('should throw invalid input when array is given as input', () => {
      try{
        upperCaser([1,2]);
      }
      catch(err){
      expect(err.message).toBe('Not a valid input type.');
      }
    })
    it('should throw invalid input when boolean is given as input', () => {
        try{
            upperCaser(true);
        }
        catch(err){
        expect(err.message).toBe('Not a valid input type.');
        }
      })
    it('should throw invalid input when integer is given as input', () => {
        try{
            upperCaser(5);
        }
        catch(err){
        expect(err.message).toBe('Not a valid input type.');
        }
      })
    it('should throw invalid input when floating point number is given as input', () => {
        try{
            upperCaser(5.5);
        }
        catch(err){
        expect(err.message).toBe('Not a valid input type.');
        }
      })
});