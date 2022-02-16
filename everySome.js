function checkUsersValid(goodUsers) {
    if (! Array.isArray(goodUsers)){
        throw new Error('Not a valid input type for goodUsers.');
    }
    return function allUsersValid(submittedUsers) {
        if (! Array.isArray(submittedUsers)){
            throw new Error('Not a valid input type for submittedUsers.');
        }
        return (submittedUsers.every((submitteduser)=>{ 
            return (goodUsers.some((goodUser)=>{
                if(! (goodUser.hasOwnProperty('id') && submitteduser.hasOwnProperty('id'))){
                    throw new Error('id key is not found in the input.');
                }
                return goodUser.id===submitteduser.id
            }))}));
    };
  }

 module.exports = checkUsersValid
