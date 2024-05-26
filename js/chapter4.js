function next(id) {
    switch (id) {
      case 1:
        document.getElementById("first").style.display = "none";
        document.getElementById("second").style.display = "block";
        document.getElementById("background").style.backgroundImage = "url('./images/P4-Box.jpg')";
        break;
      case 2:
        document.getElementById("second").style.display = "none";
        document.getElementById("third").style.display = "flex";
        document.getElementById("letter").style.display = "block";
        document.getElementById("background").style.backgroundImage = "url('./images/P4-Box1.jpg')";
        document.getElementById("info").style.display = "block";
        break;
      case 3:
        if(document.getElementById("a1").value == "水" &&
           document.getElementById("a2").value == "心" &&
           document.getElementById("a3").value == "一" &&
           document.getElementById("a4").value == "日" &&
           document.getElementById("a5").value == "見" ){
          document.getElementById("four").style.display = "block";
          document.getElementById("third").style.display = "none";
          document.getElementById("letter").style.display = "none";
          document.getElementById("background").style.backgroundImage = "url('./images/P5-End1.jpg')";
          window.zoom = 1;
        }else{
          alert("答案錯誤");
        }
        break;
      default:
        window.location.href = "./chapter5.html";
        break;
    }
  }

  window.onload = function () {
    window.zoom = 1;
  };

  function show(){
    let dialog = document.getElementById("info-dialog");
    dialog.style.display = "block";
  }
  
  function closeDialog(){
    let dialog = document.getElementById("info-dialog");
    dialog.style.display = "none";
  }