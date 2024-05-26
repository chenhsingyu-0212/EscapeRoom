function next(id) {
    switch (id) {
      case 1:
        document.getElementById("first").style.display = "none";
        document.getElementById("second").style.display = "block";
        break;
      case 2:
        document.getElementById("second").style.display = "none";
        document.getElementById("third").style.display = "flex";
        document.getElementById("background").style.backgroundImage = "url('./images/map.jpg')";
        break;
      default:
        window.location.href = "./chapter3.html";
        break;
    }
}