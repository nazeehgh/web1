function showHideweb1Class() {
  var x = document.getElementsByClassName("web1");
  for (var i = 0; i < x.length; i++) {
    if (x[i].style.display == "none") {
      x[i].style.display = "block";
    }
    else {
      x[i].style.display = "none";
    }
  }
}

function displayResultbyElementId() {
  document.getElementById("div2").innerHTML = "This is content is changed using id=div2";
}