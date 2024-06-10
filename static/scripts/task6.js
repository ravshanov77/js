const multiply = (a, b) => {
  a * b;
};

// console.log(multiply([2, 3]));
// console.log(multiply([7, 10]));

function countPos(arr) {
  let sum = 0;
  arr.forEach((num) => {
    sum += num > 0 ? 1 : 0;
  });
  return sum;
}

console.log(countPos([-1, 2, -3, 7, -1]));
