const request=require('request');

 var getwea=(lat,lon,callback)=>{
   request({
     url:'https://api.darksky.net/forecast/566a7f063cf96bb8f260ae79284558e1/'+lat+','+lon ,
     json:true
   },(error,response,body)=>{
     if(error)
     {
       callback('something went wrong');
     }
     else
        (body.status=='200')
        {
          callback(undefined,{
              temperature: body.currently.temperature,
          });

        }
   });
 };
 module.exports={
   getwea
 };
