const reduce = require('../recursion.js');
const countWords = require('../reduce.js');

describe('reduce function', function() {
    it('should return a object with count of words as values when array of strings, countWords function and empty array is given as initial value', () => {
        const result = reduce([
            'Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'
          ],countWords,[]);
        expect(result).toStrictEqual({
            Apple: 2,
            Banana: 1,
            Durian: 3
            });
        });
    it('should return an empty object when an empty array is given for arr', () => {
        const result = reduce([],countWords,[]);
        expect(result).toStrictEqual({});
    });
    it('should throw invalid input when object is given for arr', () => {
        try{
          reduce({a:1,b:2},countWords,[]);
        }
        catch(err){
        expect(err.message).toBe('Not a valid input type for arr.');
        }
      })
      it('should throw invalid input when string is given for arr', () => {
        try{
          reduce('Hello!',countWords,[]);
        }
        catch(err){
        expect(err.message).toBe('Not a valid input type for arr.');
        }
      })
    it('should throw invalid input when boolean is given for arr', () => {
        try{
            reduce(true,countWords,[]);
        }
        catch(err){
        expect(err.message).toBe('Not a valid input type for arr.');
        }
      })
    it('should throw invalid input when integer is given for arr', () => {
        try{
            reduce(5,countWords,[]);
        }
        catch(err){
        expect(err.message).toBe('Not a valid input type for arr.');
        }
      })
    it('should throw invalid input when floating point number is given for arr', () => {
        try{
            reduce(5.5,countWords,[]);
        }
        catch(err){
        expect(err.message).toBe('Not a valid input type for arr.');
        }
      })
});