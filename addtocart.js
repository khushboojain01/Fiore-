const product = [
    {
        id: 0,
        image: 'image/pex33472.jpg',
        title: 'Lemon Drop Yellow Rose',
        price: 190,
    },
    {
        id: 1,
        image: 'image/pexels-secret-garden-931176.jpg',
        title: 'Pretty in Pink',
        price: 490,
    },
    {
        id: 2,
        image: 'image/pea-roseclay-2223891.jpg',
        title: 'Fiery Sunset Tulips',
        price: 230,
    },
    {
        id: 3,
        image: 'image/pexels-katana-8313036.jpg',
        title: 'Sunshine Bouquet',
        price: 190,
    },
    {
        id: 4,
        image: 'image/pexels-andrea-garibay-13804370.jpg',
        title: 'Heavenly Bliss Bouquet',
        price: 780,
    },
    {
        id: 5,
        image: 'image/pexels-monstera-6621479.jpg',
        title: 'Serenity Tulips',
        price: 780,
    }
];
const categories = [...new Set(product.map((item) => { return item }))]
let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>Rs ${price}.00</h2>` +
        "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
        `</div>
        </div>`
    )
}).join('')

var cart = [];

function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
}
function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart() {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "Rs " + 0 + ".00";
    }
    else {
        document.getElementById("cartItem").innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            total = total + price;
            document.getElementById("total").innerHTML = "Rs " + total + ".00";
            return (
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>Rs ${price}.00</h2>` +
                "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
            );
        }).join('');
    }


}