function upperCaser(input) {
    if (typeof input !== 'string'){
        throw new Error('Not a valid input type.');
    }
    return input.toUpperCase();
  }

  module.exports = upperCaser