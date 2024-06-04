function add() {
  setTimeout(function () {
    document.querySelector(".added").innerHTML = "Added";
  }, 2000);
  setTimeout(function () {
    document.querySelector(".added").innerHTML = "";
  }, 2000);
}
