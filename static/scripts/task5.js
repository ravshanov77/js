function add() {
  document.querySelector(".added").innerHTML = "Added";
  setTimeout(function () {
    document.querySelector(".added").innerHTML = "";
  }, 2000);
}
