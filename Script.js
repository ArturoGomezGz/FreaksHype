const cardContainer = document.getElementById("cards-container");
const botonCarrito = document.getElementById("carritoButton");
const carrito = document.getElementById("carrito");
const menuMovil = document.getElementById("menu-movil");
const botonMenuMnovil =document.getElementById("boton-menu-movil");

botonCarrito.addEventListener("click", openCarrito);
botonMenuMnovil.addEventListener("click", openMovilMenu);

function openCarrito(){
    carrito.classList.toggle("carritoInactive")
    menuMovil.classList.add("inactiveMovilMenu")
};
function openMovilMenu(){
    menuMovil.classList.toggle("inactiveMovilMenu")
    carrito.classList.add("carritoInactive")
}

var productList = []


function createProducts(){
    productList.push({
        name: "Bicicleta",
        price: 400,
        image: "./Imagenes/descarga.jpeg"
    })
    productList.push({
        name: "Ps4",
        price: 5000,
        image: "./Imagenes/1200px-Sony-PlayStation-4-PS4-DualShock-4.png"
    })
    productList.push({
        name: "Bicicleta",
        price: 400,
        image: "./Imagenes/descarga.jpeg"
    })
    productList.push({
        name: "Ps4",
        price: 5000,
        image: "./Imagenes/1200px-Sony-PlayStation-4-PS4-DualShock-4.png"
    })
    productList.push({
        name: "Bicicleta",
        price: 400,
        image: "./Imagenes/descarga.jpeg"
    })
    productList.push({
        name: "Ps4",
        price: 5000,
        image: "./Imagenes/1200px-Sony-PlayStation-4-PS4-DualShock-4.png"
    })
}

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement("div");
        productCard.classList.add("card");

        const cardInfo = document.createElement("div");
        cardInfo.classList.add("card-info");

        const agregarAlCarritoContainer = document.createElement("div");
        agregarAlCarritoContainer.classList.add("agregar-al-carrito");

        const productPriceName = document.createElement("div");
        productPriceName.classList.add("name-and-price");

        const productImg = document.createElement("img");
        productImg.classList.add("imagen-de-producto");
        productImg.setAttribute("src", product.image);

        const productName = document.createElement("p");
        productName.classList.add("nombre-de-producto-card");
        productName.innerText = product.name;

        const productPrice = document.createElement("p");
        productPrice.classList.add("precio-de-producto-card");
        productPrice.innerText = "$" + product.price;

        const agregarAlCarrito = document.createElement("img");
        agregarAlCarrito.setAttribute("src", "Imagenes/agregarAlcarrito.png");

        productPriceName.appendChild(productName);
        productPriceName.appendChild(productPrice);

        cardInfo.appendChild(productPriceName);
        cardInfo.appendChild(agregarAlCarritoContainer);

        agregarAlCarritoContainer.appendChild(agregarAlCarrito);

        productCard.appendChild(productImg);
        productCard.appendChild(cardInfo);
        

        cardContainer.appendChild(productCard);

    }
}

createProducts();
renderProducts(productList);