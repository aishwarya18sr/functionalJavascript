function doubleAll(numbers) {
    if (! Array.isArray(numbers)){
        throw new Error('Not a valid input type for numbers.');
    }
    return numbers.map( (num) => {if (typeof num !== 'number'){
        throw new Error('Not a valid input type for num.');
    } 
    return num*2});
  }

  module.exports = doubleAll