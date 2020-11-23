//User registration process
btnBack.onclick=function(){
    ChangeForm(Login)
}




btnSign.onclick=function(){
   let newUsername = inptSignUpUser.value
  let newPassword = inptSignUpPass.value
  let checkPass = inptVerify.value
  let queryUserCheck = "SELECT user_name FROM login WHERE user_name = " + "'" + newUsername + "'"
  let queryBest = "INSERT INTO login (user_name, password) VALUES ('" + newUsername + "', '" + newPassword + "')" 
    req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=aec83928&pass=" + pw + "&database=375groupb2&query=" + queryBest)
  if (req2.status == 200) { //everything worked.
    results1 = JSON.parse(req2.responseText)
    if (results1.length > 0) { 
      lblVerified.value = "Please choose another username"
    } else {
      if (newPassword !== checkPass) {
      lblVerified.value = "Verified passwords need to match"
    } else { 
      req4 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=aec83928&pass=" + pw + "&database=375groupb2&query=" + queryUserCheck)
      if (req4.status == 200) { //everything worked
      lblVerified.value = "Registration successful!"
      ChangeForm(Home)
    } else {
      lblVerified.style.display = "block" 
      lblVerified.value = "Error connection not made: " + req4.status + "readystate" + req2.readyState + "status text" + req2.statusText; 
      }
}
}
}
}
