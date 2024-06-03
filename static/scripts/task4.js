let add = function () {
  console.log(2 + 3);
};

function runTwice(fun) {
  fun();
  fun();
}

// runTwice(function () {
//   console.log("12b");
// });

function change() {
  setTimeout(function () {
    document.querySelector(".start").innerHTML = "Finished!";
  }, 1000);
  document.querySelector(".start").innerHTML = "Loading...";
}
