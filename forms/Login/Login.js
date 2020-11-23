//User login process

currentUserID = ""
let pw = "Bluejay1!"

btnRegister1.onclick = function() {
  ChangeForm(Register)
}





btnLogin1.onclick = function() {
  let checkPassword = inptPassword.value
  let checkUsername = inptUsername.value
  let query = "SELECT user_name, password FROM login WHERE user_name = " + "'" + checkUsername + "'" + "AND password = " + "'" + checkPassword + "'"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=aec83928&pass=" + pw + "&database=375groupb2&query=" + query)
  if (req1.status == 200) { //everything worked.
    results = JSON.parse(req1.responseText)
    ChangeForm(browseRestaurants)
    if (results.length == 0) //there is no user or the password was entered incorrectly.
      lblResult1.value = "Incorrect username or password"
    } else {
  }
}

