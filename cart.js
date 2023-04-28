const cart = [];
function addToCart() {
  const quantity = quantitySelect.value;
  const price = parseInt(productPrice.innerText.substring(2));
  const totalPrice = quantity * price;

  const item = {
    name: "Lemon Drop-Yellow Rose",
    quantity: quantity,
    price: price,
    totalPrice: totalPrice
  };

  cart.push(item);
}

function displayCartItems() {
  const cartItemsDiv = document.getElementById("cart-items");
  cartItemsDiv.innerHTML = "";

  cart.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");

    const itemName = document.createElement("h3");
    itemName.innerText = item.name;
    itemDiv.appendChild(itemName);

    const itemQuantity = document.createElement("p");
    itemQuantity.innerText = `Quantity: ${item.quantity}`;
    itemDiv.appendChild(itemQuantity);

    const itemPrice = document.createElement("p");
    itemPrice.innerText = `Price: ₹${item.price}`;
    itemDiv.appendChild(itemPrice);

    const itemTotalPrice = document.createElement("p");
    itemTotalPrice.innerText = `Total Price: ₹${item.totalPrice}`;
    itemDiv.appendChild(itemTotalPrice);

    cartItemsDiv.appendChild(itemDiv);
  });
}
addToCartButton.addEventListener('click', () => {
  addToCart();
  displayCartItems();
  alert(`Item added to cart.\nQuantity: ${quantity}\nTotal Price: ₹${totalPrice}`);
});
