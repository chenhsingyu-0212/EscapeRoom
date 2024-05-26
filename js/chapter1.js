window.onload = function () {
  window.zoom = 1;
};

function next(id) {
  switch (id) {
    case 1:
      document.getElementById("first").style.display = "none";
      document.getElementById("second").style.display = "block";
      document.getElementById("background").style.backgroundImage = "url('./images/P1-Paper.jpg')";
      break;
    case 2:
      document.getElementById("second").style.display = "none";
      document.getElementById("third").style.display = "block";
      document.getElementById("letter").style.display = "block";
      document.getElementById("info").style.display = "block";
      break;
    case 3:
      if(document.getElementById("answer").value == "華東門前"){
        document.getElementById("four").style.display = "block";
        document.getElementById("third").style.display = "none";
        document.getElementById("letter").style.display = "none";
        window.zoom = 1;
      }else{
        alert("答案錯誤");
      }
      break;
    default:
      window.location.href = "./chapter2.html";
      break;
  }
}

function show(){
  let dialog = document.getElementById("info-dialog");
  dialog.style.display = "block";
}

function closeDialog(){
  let dialog = document.getElementById("info-dialog");
  dialog.style.display = "none";
}