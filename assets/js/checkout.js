import { mostrarToast, guardarCarrito, recuperarCarrito, armarFilaCarrito, refrescarPagina } from "./utils.js"

const spanVolver = document.querySelector('div.back-link')
const tableBody = document.querySelector('table tbody#cartBody')
const pTotalCarrito = document.querySelector('p#totalAmount')
const buttonCheckout = document.querySelector('button#buttonFinalizarCompra')
const carrito = recuperarCarrito()
const btnBranding = document.querySelector('div.branding')

// Funciones de lógica
function activarClickQuitarProducto() {
    const botonesDelete = document.querySelectorAll('td.product-delete')
    if (botonesDelete.length > 0) {
        botonesDelete.forEach((botonDelete)=> {
            botonDelete.addEventListener('click', ()=> {
                const idx = carrito.findIndex((prod)=> prod.id === botonDelete.id)
                if (idx !== -1) {
                    carrito.splice(idx, 1)
                    guardarCarrito(carrito)
                    const fila = botonDelete.parentElement
                    fila.remove()
                    mostrarToast('info', 'Producto quitado del carrito')
                    pTotalCarrito.textContent = `$ ${actualizarTotalCarrito()}`
                }
                if (carrito.length === 0) {
                    location.href = 'index.html'
                }
            })
        })
    }
}

function cargarCarritoDeCompras() {
    if (carrito.length > 0) {
        tableBody.innerHTML = ''

        carrito.forEach((producto)=> {
            tableBody.innerHTML += armarFilaCarrito(producto)
        })
        activarClickQuitarProducto()
        pTotalCarrito.textContent = `$ ${actualizarTotalCarrito()}`
    } else {
        location.href = 'index.html'
    }
}

function actualizarTotalCarrito() {
    if (carrito.length > 0) {
        const total = carrito.reduce((acc, producto)=> acc + Number(producto.precio), 0)
        return total.toLocaleString('es-AR')
    }
    return '0'
}

// FUNCIONES PRINCIPALES
refrescarPagina()
cargarCarritoDeCompras()

// Eventos
buttonCheckout.addEventListener('click', ()=> {
    Swal.fire({
        icon: "success",
        title: "Compra finalizada",
        text: "🛍️ Muchas gracias por su compra. Enviaremos los productos a la dirección de tu perfil.",
        showCancelButton: true,
        confirmButtonText: "Aceptar",
        cancelButtonText: "Cancelar",
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem('carrito')
            carrito.length = 0
            location.href = 'index.html'
        }
    })
})

spanVolver.addEventListener('click', ()=> location.href = 'index.html')

spanVolver.addEventListener('keydown', (e)=> {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        location.href = 'index.html'
    }
})

btnBranding.addEventListener('keydown', (e)=> {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        location.href = 'index.html'
    }
})

