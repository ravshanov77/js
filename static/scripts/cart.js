let cartQuantity = 0;

display();

function update(change) {
if (cartQuantity + change > 10) {
    alert("The cart is full");
    return;
}

if (cartQuantity + change < 0) {
    alert("Not enough items in the cart");
    return;
}

cartQuantity += change;

display();
}

function display() {
document.querySelector(
    ".quantity"
).innerHTML = `Cart quantity: ${cartQuantity}`;
}
