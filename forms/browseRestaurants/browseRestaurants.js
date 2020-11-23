//Allows user to browse restaurants 

let req3 = ""
let query2 = "" 
let results = "" 
let lblRestaurants = ""

//On show to populate dropdown
browseRestaurants.onshow=function(){
  let userChoice = drpRestaurants1.value
    for (i = 0; i <= results.length; i++) 
    console.log(userChoice[i])
  
  query2 = "SELECT businesses_name FROM yelp_restaurants"
  req3 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=aec83928&pass=" + pw + "&database=375groupb2&query=" + query2)

  if (req3.status == 200) { //transit worked.
  results = JSON.parse(req3.responseText)
  console.log(results)
    
  let message = ""
  for (i = 0; i < results.length; i++)
    drpRestaurants1.clear()
    for (i = 0; i < results.length; i++)
    drpRestaurants1.addItem(results[i])
  let userChoice = drpRestaurants1.value 
  console.log(userChoice[i])
    
  message = message + results[i] + "\n"
  lblRestaurants1.value = message
  
  //names now in results array -- load names into dropdown
  drpRestaurants1.clear()
  for (i = 0; i <= results.length - 1; i++) 
  drpRestaurants1.addItem(results[i])
  console.log(results[i]) 
  
} else { 
  //transit error 
  NSB.MsgBox(`Error: ${req3.status}`);
}
} 

Button2.onclick=function(){
  ChangeForm(selectedRestaurant)
}
