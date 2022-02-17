const isObject = (value) => {
    return !!(value && typeof value === "object" && !Array.isArray(value));
  };

const getDependencies = (tree,res=[],flag=false) => {
    if (isObject(tree)) {
        if(flag)
        {
            const keys = Object.keys(tree);
            keys.forEach(key => {
                const val = key+'@'+tree[key].version;
                if(! res.includes(val)){
                res.push(val);
            }
            if(tree[key].hasOwnProperty('dependencies')){
                    return getDependencies(tree[key].dependencies,res,true)
                }
            });
        }
        if(tree.hasOwnProperty('dependencies')){
            return getDependencies(tree.dependencies,res,true)
        }
      }
    return res.sort();
  }

//   const tree = {
//     "name": "lorem-ipsum",
//     "version": "0.1.1",
//     "dependencies": {
//       "optimist": {
//         "version": "0.3.7",
//         "dependencies": {
//           "wordwrap": {
//             "version": "0.0.2"
//           }
//         }
//       },
//       "inflection": {
//         "version": "1.2.6"
//       }
//     }
//   };
//   const res = [];
//   console.log(getDependencies(tree,res,false));
  module.exports = getDependencies