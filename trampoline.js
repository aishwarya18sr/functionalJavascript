const repeat = (operation, num) => {
    if (num <= 0) {
        return operation();
    }
    return () => repeat(operation, --num);
  }

const trampoline = fn => (...args) => {
    let result = fn(...args)
    while (typeof result === 'function') {
      result = result()
    }
    return result;
  }

const recurse = (operation, num) => {
    //const repeat1 = trampoline(repeat);
    return trampoline(repeat)(operation, num);
  }

// function sum(){
//        // console.log('hai');
//  };

// recurse(sum,10000);

  module.exports = {repeat,trampoline,recurse};