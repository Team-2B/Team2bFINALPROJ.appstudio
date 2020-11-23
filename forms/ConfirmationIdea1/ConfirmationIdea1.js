ConfirmationIdea1.onshow=function(){
  var settings = {
 "url": "https://api.cronofy.com/v1/events?tzid=America/Chicago&from=2021-03-25&to=2021-03-28&include_managed=1",
 "method": "GET",
 "timeout": 0,
 "headers": {
   "Authorization": "Bearer aYxaWy4SD8itTPlxEzv3PTmGqEHxZhZ-",
   "Cookie": "_ga=GA1.2.62677051.1605468790"
 },
};
  $.ajax(settings).done(function (response) {
 let A  = (response.events[0].summary)
   let B = (response.events[0].start)
   let C = (response.events[0].end)
 let D= (response.events[0].location.description)
   let E = (response.events[0].organizer.email)
       
       
       
             txtA.value = A + "\n"  + B + "\n" + C + "\n" + D + "\n" + E 
    
    
  console.log(response);
});
}
