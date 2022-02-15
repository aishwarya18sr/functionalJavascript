const getShortMessages = require('../filter.js');

describe('getShortMessages function', function() {
    it('should return a array of messages which are shorter (less than 50 characters) when a proper array input is given', () => {
        const result = getShortMessages([
            {message : 'Ipsum eu anim aliquip amet elit eu enim.'},  {message : 'Non amet duis ipsum ex.'},  {message : 'Aute laboris minim do aliqua qui consectetur.'},  {message : 'Irure irure enim id laboris dolor magna anim.'},  {message : 'Excepteur excepteur sit dolor aliquip id.'},  {message : 'Laborum et enim aute dolor ipsum do Lorem.'}, {message : 'Incididunt aliquip excepteur officia mollit.'}, {message :  'Nostrud est adipisicing labore pariatur.'},  {message : 'Ad aute aliqua aliqua amet aute ad ullamco.'}
          ]);
        expect(result).toStrictEqual([
            'Ipsum eu anim aliquip amet elit eu enim.', 'Non amet duis ipsum ex.', 'Aute laboris minim do aliqua qui consectetur.', 'Irure irure enim id laboris dolor magna anim.', 'Excepteur excepteur sit dolor aliquip id.', 'Laborum et enim aute dolor ipsum do Lorem.', 'Incididunt aliquip excepteur officia mollit.', 'Nostrud est adipisicing labore pariatur.', 'Ad aute aliqua aliqua amet aute ad ullamco.'
          ]);
    });
    it('should return an empty array when an empty array input is given', () => {
        const result = getShortMessages([]);
        expect(result).toStrictEqual([]);
    });
    it('should throw invalid input when array of object with no message key is given as input', () => {
        try{
          getShortMessages([{a:'Ipsum eu anim aliquip amet elit eu enim.'},{message:'Ipsum eu anim aliquip amet elit eu enim.'}]);
        }
        catch(err){
        expect(err.message).toBe('Not a valid input type for message.message key not found.');
        }
      })
    it('should throw invalid input when object is given as input', () => {
        try{
          getShortMessages({a:1,b:2});
        }
        catch(err){
        expect(err.message).toBe('Not a valid input type for messages.');
        }
      })
      it('should throw invalid input when string is given as input', () => {
        try{
          getShortMessages('Hello!');
        }
        catch(err){
        expect(err.message).toBe('Not a valid input type for messages.');
        }
      })
    it('should throw invalid input when boolean is given as input', () => {
        try{
            getShortMessages(true);
        }
        catch(err){
        expect(err.message).toBe('Not a valid input type for messages.');
        }
      })
    it('should throw invalid input when integer is given as input', () => {
        try{
            getShortMessages(5);
        }
        catch(err){
        expect(err.message).toBe('Not a valid input type for messages.');
        }
      })
    it('should throw invalid input when floating point number is given as input', () => {
        try{
            getShortMessages(5.5);
        }
        catch(err){
        expect(err.message).toBe('Not a valid input type for messages.');
        }
      })
});