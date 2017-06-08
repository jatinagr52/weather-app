 const request=require('request');

var geoaddr=(addr,callback)=>{
  var encodedaddr=encodeURIComponent(addr);
//console.log(argv);
request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+encodedaddr,
  json:true
},(error,response,body)=>{
  if(error)
  {
    callback('check your connection');
  }
else
   if(body.status==='ZERO_RESULTS') {
     callback('invalid address');
  }
  else
    if(body.status==='OK')
    {
 callback(undefined,{
   latitude:body.results[0].geometry.location.lat,
   longitude:body.results[0].geometry.location.lng
 }  );


}
});

  };

  module.exports={
    geoaddr
};
