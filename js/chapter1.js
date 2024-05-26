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
      break;
    case 3:
      if(document.getElementById("answer").value == "華東門前"){
        window.location.href = "./chapter2.html";
      }else{
        alert("答案錯誤");
      }
  }
}