const nums = [10, 20, 30];
nums[nums.length - 1] = 99;
//   console.log(nums);

function getLast(arr) {
  return arr[arr.length - 1];
}

function swap(arr) {
  const first = arr[0],
    last = arr[arr.length - 1];
  arr[0] = last;
  arr[arr.length - 1] = first;
  return arr;
}

//   console.log(swap([1, 20, 22, 24, 5]));
//   console.log(swap(["hi", "hello", "good"]));

for (let i = 0; i <= 10; i += 2) {
  // console.log(i);
}

let i = 0;
while (i <= 10) {
  // console.log(i);
  i += 2;
}

for (let i = 5; i >= 0; i--) {
  // console.log(i);
}

i = 5;
while (i >= 0) {
  // console.log(i);
  i--;
}

function addOne(arr) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i] + 1);
  }

  return res;
}

//   console.log(addOne([6, 16, 76]));

function addNum(arr, num) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i] + num);
  }

  return res;
}

//   console.log(addNum([12, 22, 52], 5));

function addArr(arr1, arr2) {
  const res = [];
  for (let i = 0; i < arr1.length; i++) {
    res.push(arr1[i] + arr2[i]);
  }

  return res;
}

//   console.log(addArr([2, 11, 43, 175], [5, 6, 34, 602]));

function countPos(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum++;
    }
  }
  return sum;
}

//   console.log(countPos([-7, 7, -17, 17, 777]));

function minMax(arr) {
  let min = null,
    max = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr.length === 1) {
      (min = arr[i]), (max = arr[i]);
    }
  }
  return `{min: ${min}, max:${max}}`;
}

//   console.log(minMax([7]));

function countWords(arr) {
  const res = {};
  for (let i = 0; i < arr.length; i++) {
    const word = arr[i];
    if (!res[word]) {
      res[word] = 1;
    } else {
      res[word]++;
    }
  }
  return res;
}

console.log(countWords(["apple", "mango", "mango", "banana"]));