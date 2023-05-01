function goTo() {
  let checked = document.querySelector('input[type="checkbox"]:checked');
  console.log(checked);
  if (checked) {
    window.location.href= "Chapter 1.html";
  }
  else {
    window.location.href= "Chapter 2.html";
  }
}
document.body.addEventListener("keydown", function(e){
  if (e.key == "Enter") {
    goTo()
  }
  if (e.key == "ArrowLeft"){
    document.getElementById("switch").checked = true;
  }
  else if (e.key == "ArrowRight"){
    document.getElementById("switch").checked = false;
  }
})