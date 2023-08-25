
let carrito =[];
const contenedor = document.getElementById("container");
const carritoCompras =document.getElementById("carritoCompras");

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
    div.innerHTML= `
    <h2>Nombre: ${libro.nombre}</h2>
    <p>Precio: ${libro.precio}</p>
    `;
    contenedor.append(div);

    let boton= document.createElement("button");
    boton.innerText= "Agregar al carrito";
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
    carritoCompras.innerHTML = "";
    carrito.forEach((libro) => {
    let div = document.createElement("div");
    div.innerHTML = `
    <h2>Nombre: ${libro.nombre}</h2>
    <p>Precio: ${libro.precio}</p>
    `;
    carritoCompras.append(div);
    });
}

const carritoStorage = () =>{
    localStorage.setItem("carrito", JSON.stringify(carrito));
}






