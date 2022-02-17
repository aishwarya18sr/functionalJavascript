const logger = (namespace) => {
if(typeof namespace !== 'string')
{
  console.log('Not a valid input type.');
}
return (...message) => {
    console.log.apply(null,[namespace,...message]);
    };
  }

module.exports = logger;