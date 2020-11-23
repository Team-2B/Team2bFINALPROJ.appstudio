var seatNum = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14']



chosenTable.onshow = function() {
  drpTable.clear()
  for (i = 0; i <= seatNum.length - 1; i++)
    drpTable.addItem(seatNum[i])
}

drpTable.onclick = function(s) {
  if (typeof(s) == "object")
    return
  else {
    drpTable.value = s
    Label2.value = `You picked ${s}, that is a  great choice!`
  }
}


btnToCon.onclick=function(){
    ChangeForm(ConfirmationIdea1)
}
