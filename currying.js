function curryN(fn, n = fn.length) {
    return function curry1(...args1){
        if(args1.length >= n){
            return fn.apply(this,args1);
        }
        else{
            return function curry2(...args2){
                return curry1.apply(this,args1.concat(args2));
            }
        }
    }
}

module.exports = curryN