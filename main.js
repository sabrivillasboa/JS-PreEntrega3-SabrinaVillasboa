const contenedor = document.getElementById("container");
const carritoCompras =document.getElementById("carritoCompras");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const stockLibros =[
    {id: 1, nombre: 'El pecador de Oxford', precio: 7000},
    {id: 2, nombre: 'Antes de Diciembre', precio: 10300},
    {id: 3, nombre: 'La Divina Comedia', precio: 6000},
    {id: 4, nombre: 'El Diario de Ana Frank', precio: 4000},
    {id: 5, nombre: 'Harry Potter', precio: 12000},
];


localStorage.setItem("libros", JSON.stringify(stockLibros));
let getLibros= localStorage.getItem("libros");
let librosStorage=JSON.parse(getLibros);


librosStorage.forEach((libro) => {
    let div= document.createElement("div");
    div.className= "div-color";
    div.innerHTML= `
    <h2>Nombre: ${libro.nombre}</h2>
    <p>Precio: ${libro.precio}</p>
    `;
    contenedor.append(div);

    let boton= document.createElement("button");
    boton.innerText= "Agregar al carrito";
    boton.className= "boton";
    div.append(boton);

    boton.addEventListener("click", () =>{
        carrito.push({
            id:libro.id,
            nombre: libro.nombre,
            precio: libro.precio,
        });
        console.log(carrito)
        actualizarCarrito();
        carritoStorage();
    });
});

function actualizarCarrito() {
    carritoCompras.innerHTML = "<h2>Carrito</h2>";
    carrito.forEach((libro) => {
    let div = document.createElement("div");
    div.innerHTML = `
    <h3>Nombre: ${libro.nombre}</h3>
    <p>Precio: ${libro.precio}</p>
    `;
    carritoCompras.append(div);
    });

    const total= carrito.reduce((acum, item) => acum + item.precio, 0);

    const totalCompra= document.createElement("h3");
    totalCompra.innerHTML =`TOTAL: $${total}`;
    carritoCompras.append(totalCompra);
}

const carritoStorage = () =>{
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

actualizarCarrito();







