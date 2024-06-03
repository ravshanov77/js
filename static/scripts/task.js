function greet(name) {
  name === undefined
    ? console.log("Hi there!")
    : console.log(`Hello ${name}!`);
}

// greet("Farruh");
// greet("Itachi");
// greet();

// task 5
function convertToF(celsius) {
  const fahrenheit = celsius * (9 / 5) + 32;

  return fahrenheit;
}

function convertToC(fahr) {
  const celsius = (fahr - 32) * (5 / 9);

  return celsius;
}

function convertTem(degrees, unit) {
  let result = unit === "C" ? convertToF(degrees) : convertToC(degrees);
  let u = unit === "C" ? "F" : "C";
  console.log(`${result}${u}`);
}

// convertTem(50, "C");

// task 6

function convertLength(length, from, to) {
  if (from === "miles" && to === "km") {
    return `${length * 1.6} ${to}`;
  } else if (from === "km" && to === "miles") {
    return `${length / 1.6} ${to}`;
  } else if (from === "miles" && to === "ft") {
    return `${length * 5280} ${to}`;
  } else if (from === "km" && to === "ft") {
    return `${length * 3281} ${to}`;
  } else if (from === "ft" && to === "miles") {
    return `${length / 5280} ${to}`;
  } else if (from === "ft" && to === "km") {
    return `${length / 3281} ${to}`;
  } else if (from === to) {
    return `${length} ${to}`;
  } else if (to !== "km" || to !== "miles" || to !== "ft") {
    return `Invalid unit: ${to}`;
  }
}

// console.log(convertLength(5000, "ft", "lbs"));
// console.log(convertLength(5, "miles", "ft"));
// console.log(convertLength(5, "km", "ft"));

// task 7

// const product1 = {
//   name: "basketball",
//   price: 2095,
// };
// product.price += 500;
// product["delivery-time"] = "3 days";
// console.log(product);

const product1 = {
  name: "glass",
  price: 795,
};

const product2 = {
  name: "glass",
  price: 795,
};

function comparePrice(product1, product2) {
  if (product1.price > product2.price) {
    return product1;
  } else {
    return product2;
  }
}

function isSameProduct(product1, product2) {
  if (
    product1.name === product2.name &&
    product1.price === product2.price
  ) {
    return true;
  } else {
    return false;
  }
}

// console.log(isSameProduct(product1, product2));
// console.log("LIGHTWEIGHT BABY".toLowerCase());
// console.log("mine".repeat(5));

const score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
};

function playGame(guess) {
  const randomNumber = Math.random();
  const result = randomNumber < 0.5 ? "heads" : "tails";

  console.log(guess === result ? "You win!" : "You lose!");

  if (guess === result) {
    score.wins++;
  } else {
    score.losses++;
  }
  console.log(score);
  localStorage.setItem("score", JSON.stringify(score));
}
