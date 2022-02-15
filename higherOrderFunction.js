function repeat(operation, num) {
    if (typeof num !== 'number'){
        throw new Error('Not a valid input type for num.');
    }
    if(num > 0){
        operation();
        repeat(operation,num-1);
    }
  }

  module.exports = repeat