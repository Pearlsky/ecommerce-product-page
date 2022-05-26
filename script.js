
// add or subtract item quantity 
function addMass() {
    let itemMass = document.getElementById("quant");
    let numItemMass = Number(itemMass.innerHTML);

    numItemMass += 1;
    itemMass.innerHTML = numItemMass;
    cart.mass.innerHTML = numItemMass;
}

function reduceMass() {
    let itemMass = document.getElementById("quant");
    let numItemMass = Number(itemMass.innerHTML);

    if (numItemMass > 0) {
        numItemMass -= 1;
    } 

    itemMass.innerHTML = numItemMass;
    cart.mass.innerHTML = numItemMass;
}


// update cart
function updateCart() {
    let itemPrice = document.getElementById("itemprice");

    let numItemPrice = Number(itemPrice.innerHTML);

    cart.amount.innerHTML = `$${Number(cart.mass.innerHTML) * numItemPrice}.00`;

    widget.innerHTML = Number(cart.mass.innerHTML);

    if (Number(cart.mass.innerHTML) > 0) {
        widget.classList.remove('hidden');
        zeroCart.classList.add('hidden');
        fullCart.classList.remove('hidden');
        checkout.classList.remove('hidden');
    }

    else if (Number(cart.mass.innerHTML) === 0) {
        widget.classList.add('hidden');
        zeroCart.classList.remove('hidden');
        fullCart.classList.add('hidden');
        checkout.classList.add('hidden');
    }
}


// globals

let plus = document.getElementById("add");
let minus = document.getElementById("minus");
let addToCart = document.getElementById("addtocart");


let cartWidget = document.getElementById('user-cart');

let zeroCart = document.getElementById('zerocart');
zeroCart
let fullCart = document.getElementById('fullcart');
let checkout = document.getElementById('checkout');

let widget = document.getElementById('widget');

let cart = {
    mass: document.getElementById("cartquant"),
    amount: document.getElementById("cartprice"),
    checkout: document.getElementById("checkout"),
}

// register handlers for events
plus.onclick = addMass;
minus.onclick = reduceMass;
addToCart.onclick = updateCart;

cartWidget.onclick = function(){
    let cardDropdown = document.getElementById('card');
    cardDropdown.classList.toggle('hidden');
}


// modal

let picOpen = document.getElementById('open');
let close = document.getElementById('close');
let modal = document.getElementById('modal');

picOpen.addEventListener('click', function (event) {
event.preventDefault();
modal.style.display = 'block';
});

close.addEventListener('click', function (event) {
event.preventDefault();
modal.style.display = 'none';
});