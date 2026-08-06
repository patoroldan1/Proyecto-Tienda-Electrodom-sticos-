// IMPORT MODULES
import { arrayCategorias, recuperarCarrito, guardarCarrito, mostrarToast, 
        retornarSpanCategoria, crearCardHTMLError, crearCardProducto,refrescarPagina } from "./utils.js"

// VARIABLES, CONSTANTES Y ENLACES AL DOM HTML
const btnBranding = document.querySelector('div.branding')
const btnCarrito = document.querySelector('div.checkout-header')
const inputSearch = document.querySelector('input#inputSearch')
const divContenedor = document.querySelector('div.products-container')
const divContainerCategorias = document.querySelector('div.container-categories')
const cartCountEl = document.querySelector('span#cartCount')
const urlProductos = 'assets/js/productos.json'
const arrayProductos = []
const carrito = recuperarCarrito()

function actualizarContadorCarrito() {
    if (cartCountEl) {
        cartCountEl.textContent = carrito.length
    }
}

function cargarCategorias() {
    if (arrayCategorias.length > 0) {
        for (let categoria of arrayCategorias) {
            divContainerCategorias.append(retornarSpanCategoria(categoria))
        }
        activarClickEnCategorias()
    }
}

function cargarProductos(array) {
    divContenedor.innerHTML = ""

    if (array.length > 0) {
        for (let producto of array) {
            divContenedor.innerHTML += crearCardProducto(producto)
        }
        activarClickBotonesComprar()
    }
}

async function obtenerProductos() {
    try {
        const response = await fetch(urlProductos)
        if (response.ok) {
            const data = await response.json()
            arrayProductos.push(...data)
            cargarProductos(arrayProductos)
        } else {
            throw new Error('Error al intentar obtener los productos.')
        }
    } catch (error) {
        divContenedor.innerHTML = crearCardHTMLError()
    }
}

function activarClickEnCategorias() {
    const spanCategorias = document.querySelectorAll('span.category-tag')

    if (spanCategorias.length > 0) {
        for (let categoria of spanCategorias) {
            categoria.addEventListener('click', ()=> {
                const cate = categoria.dataset.categoria

                if (cate === 'todos los productos') {
                    cargarProductos(arrayProductos)
                    return
                }

                const productosFiltrados = arrayProductos.filter((producto)=> producto.categoria === cate)

                if (productosFiltrados.length > 0) {
                    cargarProductos(productosFiltrados)
                } else {
                    mostrarToast('warning', 'No se encontraron productos en esta categoría.')
                }
            })
        }
    }
}

function activarClickBotonesComprar() {
    const botonesComprar = document.querySelectorAll('button.card-button-buy')

if (botonesComprar.length > 0) {
        for (let botonComprar of botonesComprar) {
            botonComprar.addEventListener('click', ()=>{
                const productoSeleccionado = arrayProductos.find((producto)=> producto.id === botonComprar.id)

                carrito.push(productoSeleccionado)
                guardarCarrito(carrito)
                actualizarContadorCarrito()
                mostrarToast('success', 'Producto agregado al carrito.')
            })
        }
    }
}

// FUNCIONES PRINCIPALES
cargarCategorias()
obtenerProductos()
actualizarContadorCarrito()
refrescarPagina()

// EVENTOS (aquellos elementos que tendrán un evento definido)
function filtrarPorBusqueda() {
    const textoAbuscar = inputSearch.value.toLowerCase().trim()

    if (textoAbuscar === '') {
        // Si el buscador está vacío, mostramos todos los productos
        cargarProductos(arrayProductos)
        return
    }

    const productosFiltrados = arrayProductos.filter((producto)=> producto.nombre.toLowerCase().includes(textoAbuscar))

    if (productosFiltrados.length > 0) {
        cargarProductos(productosFiltrados)
    } else {
        divContenedor.innerHTML = ""
        mostrarToast('warning', 'No se encontraron productos con el texto: ' + textoAbuscar)
    }
}

inputSearch.addEventListener('input', filtrarPorBusqueda)

inputSearch.addEventListener('search', filtrarPorBusqueda)

btnCarrito.addEventListener('click', ()=> location.href = 'checkout.html')


btnCarrito.addEventListener('keydown', (e)=> {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        location.href = 'checkout.html'
    }
})

