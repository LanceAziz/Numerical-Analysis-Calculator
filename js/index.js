//Functions
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
function ch1() {
  document.getElementById("switch").checked = true;
}
function ch2() {
  document.getElementById("switch").checked = false;
}
//EventListener
document.body.addEventListener("keydown", function(e){
  if (e.key == "Enter") {
    goTo()
  }
  if (e.key == "ArrowLeft"){
    ch1()
  }
  else if (e.key == "ArrowRight"){
    ch2()
  }
})