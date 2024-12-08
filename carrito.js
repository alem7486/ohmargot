let carrito = [];

function agregarAlCarrito(producto, precio) {
    carrito.push({ producto, precio });
    mostrarCarrito();
}

function eliminarDelCarrito(indice) {
    carrito.splice(indice, 1);
    mostrarCarrito();
}

function mostrarCarrito() {
    let listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';

    let total = 0;
    carrito.forEach((item, index) => {
        let li = document.createElement('li');
        li.textContent = `${item.producto} - $${item.precio} `;

        let botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.onclick = () => eliminarDelCarrito(index);
        li.appendChild(botonEliminar);

        listaCarrito.appendChild(li);
        total += item.precio;
    });

    let totalElement = document.createElement('p');
    totalElement.textContent = `Total: $${total}`;
    listaCarrito.appendChild(totalElement);
}
