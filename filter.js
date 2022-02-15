function getShortMessages(messages) {
    if (! Array.isArray(messages)){
        throw new Error('Not a valid input type for messages.');
    }
    const shorterMessages = messages.filter((eachMessage) => {
        if(! eachMessage.hasOwnProperty('message')){
            throw new Error('Not a valid input type for message.message key not found.');
        }
        return eachMessage.message.length<50
    })
    return shorterMessages.map((eachMessage)=>{return eachMessage.message});
  }

module.exports = getShortMessages;