function next(id) {
    switch (id) {
      case 1:
        document.getElementById("first").style.display = "none";
        document.getElementById("second").style.display = "block";
        document.getElementById("letter").style.display = "block";
        break;
      case 2:
        document.getElementById("second").style.display = "none";
        document.getElementById("third").style.display = "block";
        document.getElementById("letter").style.display = "none";
        document.getElementById("background").style.backgroundImage = "url('./images/map.jpg')";
        break;
      case 3:
        if(document.getElementById("answer").value == "華東門前"){
          document.getElementById("four").style.display = "block";
          document.getElementById("third").style.display = "none";
          document.getElementById("letter").style.display = "none";
        }else{
          alert("答案錯誤");
        }
        break;
      default:
        window.location.href = "./chapter2.html";
        break;
    }
  }