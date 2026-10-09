// Número de teléfono de Colombia asignado a la tienda
const NUMERO_WHATSAPP = "573153412613";

/**
 * Función para redireccionar al WhatsApp del vendedor enviando la información del producto
 * @param {string} nombreProducto 
 * @param {string} precio 
 */
function comprarWhatsApp(nombreProducto, precio) {
    // Mensaje codificado para la URL de WhatsApp
    const mensaje = `Hola H Ache, estoy interesado en comprar el producto: *${nombreProducto}* por un valor de *$${precio} COP*. ¿Tienen disponibilidad en mi talla?`;
    
    // Crear el enlace completo de WhatsApp
    const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
    
    // Abrir la conversación en una ventana nueva
    window.open(url, '_blank');
}

/**
 * Función para filtrar los productos por categoría en el catálogo
 * @param {string} categoria 
 */
function filtrar(categoria) {
    const productos = document.querySelectorAll('.product-card');
    const botones = document.querySelectorAll('.filter-btn');

    // Cambiar estado activo en los botones
    botones.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Mostrar o ocultar tarjetas de productos
    productos.forEach(producto => {
        const catProducto = producto.getAttribute('data-category');
        if (categoria === 'todos' || catProducto === categoria) {
            producto.style.display = 'flex';
        } else {
            producto.style.display = 'none';
        }
    });
}