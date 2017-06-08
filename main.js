//const request=require('request');
const yargs=require('yargs');
const geocode=require('./geocode');
const weather=require('./weather');
var argv = yargs
  .options({
     a:{
        alias :'address',
        describe: 'requested address'

    }
  })

  .argv;
  geocode.geoaddr(argv.a,(msg,results)=>{
    if(msg)
    {
      console.log(msg);
    }
    else {
       //console.log(results.address);
       weather.getwea(results.longitude,results.latitude,(msg,weatherResults)=>{
         if(msg)
         {
           console.log(msg);
         }
         else {
           {
             console.log(JSON.stringify(weatherResults,undefined,4));
           }
         }
       });
      console.log(JSON.stringify(results,undefined,4));
    }
  });
console.log('this app is working');
