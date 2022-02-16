function countWords(inputWords) {
  if (! Array.isArray(inputWords)){
    throw new Error('Not a valid input type for inputWords.');
  }
    return inputWords.reduce((countOfWords, key) => {
      if(! (countOfWords.hasOwnProperty(key))){
        countOfWords[key] = 1;
      }
      else{
        countOfWords[key]+=1
      }
      return countOfWords
    }, {});
  }

module.exports = countWords