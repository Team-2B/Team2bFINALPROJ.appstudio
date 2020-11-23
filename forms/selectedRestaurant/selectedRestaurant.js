let req = ""
let query = ""
let results5 = ""
let resultstate = ""



Button1.onclick=function(){
    ChangeForm(chosenTable)
}

selectedRestaurant.onshow=function(){
      //on show to populate dropdown
  query = "SELECT Date FROM reservation"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=aec83928&pass=" + pw + "&database=375groupb2&query=" + query)
  if (req.status == 200) { //transit worked.
    results5 = JSON.parse(req.responseText)
    console.log(results)
   

    // names now in results array - load names into the dropdown
    drp2.clear()
    for (i = 0; i <= results5.length - 1; i++)
      drp2.addItem(results[i])
  } else {
    // transit error
    NSB.MsgBox(`Error: ${req.status}`);
  }

  query = "SELECT Time FROM reservation"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=aec83928&pass=" + pw + "&database=375groupb2&query=" + query)
  if (req.status == 200) { //transit worked.
    results = JSON.parse(req.responseText)
    console.log(results5)
   

    // names now in results array - load names into the dropdown
    drp1.clear()
    for (i = 0; i <= results5.length - 1; i++)
      drp1.addItem(results[i])
  } else {
    // transit error
    NSB.MsgBox(`Error: ${req.status}`);
  }
}
