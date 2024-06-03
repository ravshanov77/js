let arr = ["apple", "search", "web", "search", "code"];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
if (arr[i].toLowerCase() === "search") {
    console.log(i);
    sum++;
    break;
}
}
if (!sum) {
console.log(-1);
}

function findIndex(arr, word) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase() === word) {
    return i;
    sum++;
    break;
    }
}
if (!sum) {
    return -1;
}
}
console.log(findIndex(["red", "green", "blue", "red"], "dark"));

function removeEgg(arr) {
let result = [],
    sum = 0;
let reversed = arr.slice();
reversed.reverse();

for (let i = 0; i < arr.length; i++) {
    if (reversed[i] === "egg" && sum < 2) {
    sum++;
    continue;
    }
    result.push(arr[i]);
}
return result.reverse();
}
const foods = ["egg", "apple", "egg", "egg", "bread"];
console.log(removeEgg(foods));
console.log(foods);

for (let i = 1; i < 21; i++) {
if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
    continue;
} else if (i % 5 === 0) {
    console.log("Buzz");
    continue;
} else if (i % 3 === 0) {
    console.log("Fizz");
    continue;
}
console.log(i);
}

function findIndex(arr, word) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase() === word) {
    return i;
    sum++;
    break;
    }
}
if (!sum) {
    return -1;
}
}

function unique(arr) {
let result = [];

for (let i = 0; i < arr.length; i++) {
    if (findIndex(result, arr[i]) >= 0) {
    continue;
    } else {
    result.push(arr[i]);
    }
}
return result;
}
console.log(unique(["red", "green", "red", "blue"]));
console.log(unique(["red", "green", "green", "red"]));
