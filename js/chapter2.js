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