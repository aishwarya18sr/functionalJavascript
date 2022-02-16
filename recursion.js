function reduce(arr, fn, initial) {
    if (! Array.isArray(arr)){
        throw new Error('Not a valid input type for arr.');
      }
    if (! Array.isArray(initial)){
        initial = [];
    }
    if (!arr.length) {
        return countWords(initial);
    };         
    const head = arr[0]; 
    initial.push(head);       
    const tail = arr.slice(1);               
    return (reduce(tail, fn, initial));
  }

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

module.exports = reduce