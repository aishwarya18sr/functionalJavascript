const doubleAll = require('../map.js');

describe('doubleAll function', function() {
    it('should return a doubled array when a proper array input is given', () => {
        const result = doubleAll([0,1,2,3,4]);
        expect(result).toStrictEqual([0,2,4,6,8]);
    });
    it('should return an empty array when an empty array input is given', () => {
        const result = doubleAll([]);
        expect(result).toStrictEqual([]);
    });
    it('should throw invalid input when array with string is given as input', () => {
      try{
        doubleAll([1,2,'a']);
      }
      catch(err){
      expect(err.message).toBe('Not a valid input type for num.');
      }
    })
    it('should throw invalid input when object is given as input', () => {
        try{
          doubleAll({a:1,b:2});
        }
        catch(err){
        expect(err.message).toBe('Not a valid input type for numbers.');
        }
      })
      it('should throw invalid input when string is given as input', () => {
        try{
          doubleAll('Hello!');
        }
        catch(err){
        expect(err.message).toBe('Not a valid input type for numbers.');
        }
      })
    it('should throw invalid input when boolean is given as input', () => {
        try{
            doubleAll(true);
        }
        catch(err){
        expect(err.message).toBe('Not a valid input type for numbers.');
        }
      })
    it('should throw invalid input when integer is given as input', () => {
        try{
            doubleAll(5);
        }
        catch(err){
        expect(err.message).toBe('Not a valid input type for numbers.');
        }
      })
    it('should throw invalid input when floating point number is given as input', () => {
        try{
            doubleAll(5.5);
        }
        catch(err){
        expect(err.message).toBe('Not a valid input type for numbers.');
        }
      })
});