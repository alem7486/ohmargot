let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function agregarAlCarrito(producto, precio) {
    carrito.push({ producto, precio });
    actualizarLocalStorage();
    mostrarCarrito();
}

function eliminarDelCarrito(indice) {
    carrito.splice(indice, 1);
    actualizarLocalStorage();
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
    
    let totalElement = document.getElementById('total-carrito');
    totalElement.textContent = `Total: $${total}`;
    
    let contadorElement = document.getElementById('contador-carrito');
    contadorElement.textContent = `Productos en el carrito: ${carrito.length}`;
}

function actualizarLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Mostrar el carrito al cargar la página por si hay datos en el local storage
mostrarCarrito();

