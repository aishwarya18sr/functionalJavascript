const arrayMap =  (arr, fn) => {
    if (! Array.isArray(arr)){
        throw new Error('Not a valid input type for arr.');
    }
    if (typeof fn !== 'function')
    {
        throw new Error('Not a valid input type for fn.');
    }
    return arr.reduce(
        (previousValue, currentValue) => {
            previousValue.push(fn(currentValue))
            return previousValue;
        },
        []
      );
}
module.exports = arrayMap;