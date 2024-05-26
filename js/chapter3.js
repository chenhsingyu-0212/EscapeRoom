let arr1 = ["割", "我", "為", "何", "不"];
let arr2 = ["蛙", "蟹", "魚", "獸", "鳥"];
let arr3 = ["瓜", "果", "菜", "蔬", "茄"];
let num1 = 2;
let num2 = 4;
let num3 = 3;

function next(id) {
  switch (id) {
    case 1:
      document.getElementById("first").style.display = "none";
      document.getElementById("second").style.display = "flex";
      break;
    case 2:
      if (
        document.getElementById("a1").innerHTML == "割" &&
        document.getElementById("a2").innerHTML == "蛙" &&
        document.getElementById("a3").innerHTML == "瓜"
      ) {
        document.getElementById("second").style.display = "none";
        document.getElementById("four").style.display = "block";
        document.getElementById("background").style.backgroundImage =
            "url('./images/P2-DoorOpen.jpg')";
      } else {
        alert("答案錯誤");
      }
      break;
    default:
      window.location.href = "./chapter4.html";
      break;
  }
}

function changea1() {
  let a1 = document.getElementById("a1");
  a1.innerHTML = arr1[num1++ % 5];
}

function changea2() {
  let a2 = document.getElementById("a2");
  a2.innerHTML = arr2[num2++ % 5];
}

function changea3() {
  let a3 = document.getElementById("a3");
  a3.innerHTML = arr3[num3++ % 5];
}

window.onload = function () {
  window.zoom = 1;
};
