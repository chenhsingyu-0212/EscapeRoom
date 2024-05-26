function next(id) {
    switch (id) {
      case 1:
        document.getElementById("first").style.display = "none";
        document.getElementById("second").style.display = "block";
        document.getElementById("letter").style.display = "block";
        break;
      case 2:
        document.getElementById("second").style.display = "none";
        document.getElementById("third").style.display = "flex";
        document.getElementById("letter").style.display = "none";
        document.getElementById("background").style.backgroundImage = "url('./images/map.jpg')";
        document.getElementById("info").style.display = "block";
        break;
      default:
        window.location.href = "./chapter3.html";
        break;
    }
}

function yes(){
    document.getElementById("four").style.display = "block";
    document.getElementById("third").style.display = "none";
}

function no(){
    alert("答案錯誤");
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