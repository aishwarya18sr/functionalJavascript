const Spy = (target, method) => {
    if(typeof target!=='object')
    {
        throw new Error('Not a valid input type for target.');
    }
    if(typeof method!=='string')
    {
        throw new Error('Not a valid input type for method.');
    }
      let spy = {
        args: [],
        count:0
    };
    let original = target[method];
    target[method] = () => {
        spy.count++;
        return original.call(target, arguments);
    };
 return spy;
}

module.exports = Spy;