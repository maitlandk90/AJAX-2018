function onClickLab1() {
  var userName = document.getElementById("userName").value;
  if (userName != '' && userName != null) {
    document.getElementById("display").innerHTML = userName;
  } else {
    document.getElementById("display").innerHTML = "username is a required field";
  }
}
