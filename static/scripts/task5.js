// let timeoutId;

// function add() {
//   document.querySelector(".added").innerHTML = "Added";
//   clearTimeout(timeoutId);
//   timeoutId = setTimeout(function () {
//     document.querySelector(".added").innerHTML = "";
//   }, 2000);
// }

function add() {
  msg++;
}

function remove() {
  msg--;
}

let msg = 7;

setInterval(function () {
  if (document.title === "App") {
    document.title = `(${msg}) New messages`;
  } else {
    document.title = "App";
  }
}, 1000);
