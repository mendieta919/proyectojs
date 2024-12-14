// PRODUCTOS
const productos = [
    // COMPUTADORES
    {
        id: "computador mesa",
        titulo: "computador mesa",
        imagen: "https://pcmatplus.com/wp-content/uploads/2021/04/20W55AAABA-1.png",
        categoria: {
            nombre: "computadores",
            id: "computador"
        },
        precio: 1900000
    },
    {
        id: "computador gamer ",
        titulo: "computador gamer",
        imagen: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/121618383_01/w=1500,h=1500,fit=pad",
        categoria: {
            nombre: "computador",
            id: "computador"
        },
        precio: 6000000
    },
    {
        id: "computador portatil",
        titulo: "computador portatil",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzsjVxRIPb2li3FraJrpXRXCfZVKb0cGiNyQ&s",
        categoria: {
            nombre: "computador",
            id: "computador"
        },
        precio: 2300000
    },
    // Celulares
    {
        id: "celular samsung A25",
        titulo: "celular samsung A25",
        imagen: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/127920954_01/w=1500,h=1500,fit=pad",
        categoria: {
            nombre: "celulares",
            id: "celular"
        },
        precio: 850000
    },
    {
        id: "celular oppo 12 reno",
        titulo: "celular oppo 12 reno",
        imagen: "https://www.radioshack.com.mx/store/medias/515ftw-100202128.jpg?context=bWFzdGVyfHJvb3R8MTM5ODE5fGltYWdlL2pwZWd8YURabEwyaGlZeTg1TWpFNE5qTTVNVE0wTnpVd0x6VXhOV1owZDE4eE1EQXlNREl4TWpndWFuQm58ZWZkZjYyNmQwZGU4MzRhOTlkNjNlMDExODUxMzYzYTBjNTVjODQ1YzViYTUzNjNiYjY5Y2ZkZjE4ODIxMmIyOQ",
        categoria: {
            nombre: "Celulares",
            id: "celular"
        },
        precio: 2000000
    },
    {
        id: "celular iphone 16 pro max",
        titulo: "celular iphone 16 pro max",
        imagen: "https://tienda.movistar.com.co/media/.renditions/wysiwyg/MovistarTotal/iphone16pronegro1_1.jpg",
        categoria: {
            nombre: "celulares",
            id: "celular"
        },
        precio: 9500000
    },

    // accesorios
    {
        id: "accesorios-01",
        titulo: "mouse inalambrico",
        imagen: "https://medellin.solutekla.com/photo/1/genius/accesorios/mouse_genius_nx_7000_blueeye_verde/mouse_genius_nx_7000_blueeye_verde_0001",
        categoria: {
            nombre: "accesorios",
            id: "accesorios"
        },
        precio: 45000
    },
    {
        id: "cargador de iphone",
        titulo: "cargador de iphone",
        imagen: "https://i0.wp.com/cocogadgets.com.co/wp-content/uploads/2023/09/1-2.jpg?fit=800%2C800&ssl=1",
        categoria: {
            nombre: "accesorios",
            id: "accesorios"
        },
        precio: 120000
    },
    {
        id: "accesorios-03",
        titulo: "audifonos inalambricos ",
        imagen: "https://elarticulo.co/wp-content/uploads/2019/12/aaa.jpg",
        categoria: {
            nombre: "accesorios",
            id: "accesorios"
        },
        precio: 300000
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}