# ⚡ TechNova Store — Tienda de Electrodomésticos

Proyecto front-end de una tienda online de electrodomésticos y tecnología. Incluye un catálogo de productos con búsqueda en tiempo real, filtrado por categorías y un carrito de compras persistente en el navegador.

## ✨ Características

- 🏷️ **Catálogo de productos** cargado desde un archivo JSON (`productos.json`).
- 🔎 **Búsqueda en tiempo real**: filtra los productos mientras escribís.
- 🗂️ **Filtrado por categorías** (laptops, smartphones, gaming, audio, etc).
- 🛒 **Carrito de compras** persistente en `localStorage`.
  - Permite quitar productos.
  - Calcula el total automáticamente.
- ✅ **Confirmación de compra** con SweetAlert2.
- 🎨 **Diseño responsive** y moderno (HTML y CSS).
- 📅 **Año del footer dinámico**.


## 🧰 Tecnologías utilizadas

- **HTML5** — estructura semántica.
- **CSS3** — estilos, variables, flexbox, responsive.
- **JavaScript (ES Modules)** — lógica de la aplicación (`index.js`, `checkout.js`, `utils.js`).
- **SweetAlert2** — alertas y notificaciones.
- **Google Fonts & Material Symbols** — tipografía e íconos.
- **JSON** — datos de los productos.


## 🚀 Cómo ejecutar el proyecto

Al ser un proyecto puramente estático, se puede abrir directamente en el navegador:

1. Abrí `index.html` en tu navegador 
2. Levantá un servidor local para mejor compatibilidad (recomendado por el uso de módulos ES):


## 🧠 Funcionalidad principal (resumen)

| `index.js` | Cargar productos, categorías, búsqueda en tiempo real y agregar al carrito. |
| `checkout.js` | Renderizar el carrito, quitar productos, total y finalizar compra. |
| `utils.js` | Categorías, plantillas de tarjetas, helpers de localStorage y toasts. |

