window.onload = function () {
  window.zoom = 1;
};

function next(id) {
  switch (id) {
    case 1:
      document.getElementById("first").style.display = "none";
      document.getElementById("second").style.display = "flex";
      break;
    case 2:
      if (
        document.getElementById("a1").value == "五湖" &&
        document.getElementById("a2").value == "東" &&
        document.getElementById("a3").value == "子"
      ) {
        document.getElementById("four").style.display = "block";
        document.getElementById("second").style.display = "none";
        document.getElementById("background").style.backgroundImage =
          "url('./images/P5-End2.jpg')";
      } else {
        alert("答案錯誤");
      }
      break;
    default:
      window.location.href = "./end.html";
      break;
  }
}
