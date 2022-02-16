const countWords = require('../reduce.js');

describe('countWords function', function() {
    it('should return a object with count of words as values when array of strings is given as input', () => {
        const result = countWords([
            'Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'
          ]);
        expect(result).toStrictEqual({
            Apple: 2,
            Banana: 1,
            Durian: 3
            });
        });
    it('should return an empty object when an empty array input is given', () => {
        const result = countWords([]);
        expect(result).toStrictEqual({});
    });
    it('should throw invalid input when object is given as input', () => {
        try{
          countWords({a:1,b:2});
        }
        catch(err){
        expect(err.message).toBe('Not a valid input type for inputWords.');
        }
      })
      it('should throw invalid input when string is given as input', () => {
        try{
          countWords('Hello!');
        }
        catch(err){
        expect(err.message).toBe('Not a valid input type for inputWords.');
        }
      })
    it('should throw invalid input when boolean is given as input', () => {
        try{
            countWords(true);
        }
        catch(err){
        expect(err.message).toBe('Not a valid input type for inputWords.');
        }
      })
    it('should throw invalid input when integer is given as input', () => {
        try{
            countWords(5);
        }
        catch(err){
        expect(err.message).toBe('Not a valid input type for inputWords.');
        }
      })
    it('should throw invalid input when floating point number is given as input', () => {
        try{
            countWords(5.5);
        }
        catch(err){
        expect(err.message).toBe('Not a valid input type for inputWords.');
        }
      })
});