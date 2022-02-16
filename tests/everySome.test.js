const checkUsersValid = require('../everySome.js');

describe('checkUsersValid function', function() {
    it('should return true if all submitted users id is in gooduser', () => {
        const result = checkUsersValid([
            { id: 1 },
            { id: 2 },
            { id: 3 }
          ])([
            { id: 2 },
            { id: 1 }
            ]);
        expect(result).toBe(true);
    });
    it('should return false if all submitted users id are not in gooduser', () => {
      const result = checkUsersValid([
          { id: 1 },
          { id: 2 },
          { id: 3 }
        ])([
          { id: 2 },
          { id: 4 },
          { id: 1 }
          ]);
      expect(result).toBe(false);
  });
    it('should return an true when an empty array input is given', () => {
        const result = checkUsersValid([])([]);
        expect(result).toBe(true);
    });
    it('should throw error when array of object with no id key is given as input to submitted users', () => {
        try{
          const result = checkUsersValid([
            { id: 1 },
            { id: 2 },
            { id: 3 }
          ])([
            { ids: 2 },
            { id: 4 },
            { id: 1 }
            ]);
        }
        catch(err){
        expect(err.message).toBe('id key is not found in the input.');
        }
      })
      it('should throw error when array of object with no id key is given as input to good users', () => {
        try{
          const result = checkUsersValid([
            { id: 1 },
            { id: 2 },
            { id1: 3 }
          ])([
            { id: 2 },
            { id: 4 },
            { id: 1 }
            ]);
        }
        catch(err){
        expect(err.message).toBe('id key is not found in the input.');
        }
      })
    it('should throw invalid input when object is given as input to good users', () => {
        try{
          checkUsersValid({a:1,b:2})([
            { id: 2 },
            { id: 1 }
            ]);
        }
        catch(err){
        expect(err.message).toBe('Not a valid input type for goodUsers.');
        }
      })
      it('should throw invalid input when string is given as input to good users', () => {
        try{
          checkUsersValid('Hello')([
            { id: 2 },
            { id: 1 }
            ]);
        }
        catch(err){
        expect(err.message).toBe('Not a valid input type for goodUsers.');
        }
      })
      it('should throw invalid input when integer is given as input to good users', () => {
        try{
          checkUsersValid(5)([
            { id: 2 },
            { id: 1 }
            ]);
        }
        catch(err){
        expect(err.message).toBe('Not a valid input type for goodUsers.');
        }
      })
      it('should throw invalid input when decimal number is given as input to good users', () => {
        try{
          checkUsersValid(5.5)([
            { id: 2 },
            { id: 1 }
            ]);
        }
        catch(err){
        expect(err.message).toBe('Not a valid input type for goodUsers.');
        }
      })
      it('should throw invalid input when boolean is given as input to good users', () => {
        try{
          checkUsersValid(false)([
            { id: 2 },
            { id: 1 }
            ]);
        }
        catch(err){
        expect(err.message).toBe('Not a valid input type for goodUsers.');
        }
      })
      it('should throw invalid input when object is given as input to submitted users', () => {
        try{
          checkUsersValid([
            { id: 2 },
            { id: 1 }
            ])({a:1,b:2});
        }
        catch(err){
        expect(err.message).toBe('Not a valid input type for submittedUsers.');
        }
      })
      it('should throw invalid input when string is given as input to submitted users', () => {
        try{
          checkUsersValid([
            { id: 2 },
            { id: 1 }
            ])('Hello');
        }
        catch(err){
        expect(err.message).toBe('Not a valid input type for submittedUsers.');
        }
      })
      it('should throw invalid input when integer is given as input to submitted users', () => {
        try{
          checkUsersValid([
            { id: 2 },
            { id: 1 }
            ])(5);
        }
        catch(err){
        expect(err.message).toBe('Not a valid input type for submittedUsers.');
        }
      })
      it('should throw invalid input when decimal number is given as input to submitted users', () => {
        try{
          checkUsersValid([
            { id: 2 },
            { id: 1 }
            ])(5.5);
        }
        catch(err){
        expect(err.message).toBe('Not a valid input type for submittedUsers.');
        }
      })
      it('should throw invalid input when boolean is given as input to submitted users', () => {
        try{
          checkUsersValid([
            { id: 2 },
            { id: 1 }
            ])(false);
        }
        catch(err){
        expect(err.message).toBe('Not a valid input type for submittedUsers.');
        }
      })
});