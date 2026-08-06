export const arrayCategorias = ['todos los productos', 'laptops', 'smartphones', 'monitores', 'accesorios', 'oficina', 'fotografía', 'audio', 'gaming', 'wearables', 'smart-home', 'almacenamiento', 'redes', 'componentes', 'televisión']

export const categoriasInfo = {
    'todos los productos': { nombre: 'Todos los Productos', icono: '🛍️' },
    'laptops':             { nombre: 'Laptops',             icono: '💻' },
    'smartphones':         { nombre: 'Smartphones',         icono: '📱' },
    'monitores':           { nombre: 'Monitores',           icono: '🖥️' },
    'accesorios':          { nombre: 'Accesorios',          icono: '🎁' },
    'oficina':             { nombre: 'Oficina',             icono: '🖨️' },
    'fotografía':          { nombre: 'Fotografía',          icono: '📷' },
    'audio':               { nombre: 'Audio',               icono: '🎧' },
    'gaming':              { nombre: 'Gaming',              icono: '🎮' },
    'wearables':           { nombre: 'Wearables',           icono: '⌚' },
    'smart-home':          { nombre: 'Smart Home',          icono: '🏠' },
    'almacenamiento':      { nombre: 'Almacenamiento',      icono: '💾' },
    'redes':               { nombre: 'Redes',               icono: '📡' },
    'componentes':         { nombre: 'Componentes',         icono: '🔧' },
    'televisión':          { nombre: 'Televisión',          icono: '📺' }
}

export function mostrarToast(icono, texto) {
    Swal.fire({
        toast: true,
        position: "top-end",
        theme: 'dark',
        showConfirmButton: true,
        timerProgressBar: true,
        timer: 3000,
        text: texto,
        icon: icono
    })
}

export function refrescarPagina() {
    const btnBranding = document.querySelector('div.branding')
    btnBranding.addEventListener('click', ()=> {
        location.href = 'index.html'
    })
}

export function guardarCarrito(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

export function recuperarCarrito() {
    const carritoRecuperado = JSON.parse(localStorage.getItem('carrito'))

    if (!carritoRecuperado) {
        return []
    } else {
        return carritoRecuperado
    }
}

export function armarFilaCarrito(producto) {
    return `<tr>
                <td class="product-image">${producto.imagen}</td>
                <td class="product-name">${producto.nombre}</td>
                <td class="product-price">$ ${Number(producto.precio).toLocaleString('es-AR')}</td>
                <td class="product-delete" id="${producto.id}">
                    <span class="product-delete material-symbols-outlined">
                        delete
                    </span>
                </td>
            </tr>`
}

export function retornarSpanCategoria(cate) {
    const info = categoriasInfo[cate] || { nombre: cate, icono: '🏷️' }
    const spanCategoria = document.createElement('span')
    spanCategoria.className = 'category-tag'
    spanCategoria.id = cate
    spanCategoria.dataset.categoria = cate
    spanCategoria.textContent = `${info.icono}  ${info.nombre}`

    return spanCategoria
}

export function crearCardHTMLError() {
    return `<div class="card error">
                <div class="card-icon-image">🔌</div>
                <div class="card-error-title"><h2>Se ha producido un error</h2></div>
                <div class="card-error-detail">No se pudo acceder al listado de productos. Intenta nuevamente en unos instantes.</div>
            </div>`
}

export function crearCardProducto(producto) {
    return `<div class="card">
                <div class="card-icon-image">${producto.imagen}</div>
                <div class="card-product-title">${producto.nombre}</div>
                <div class="card-product-price">$ ${Number(producto.precio).toLocaleString('es-AR')}</div>
                <button class="card-button-buy" id="${producto.id}">
                    Comprar
                </button>
            </div>`
}

