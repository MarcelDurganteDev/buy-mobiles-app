import React from 'react';
import './actions.scss';

/* Se mostrará dos tipos de selectores, donde el usuario, podra seleccionar el tipo del
producto que quiere añadir a la cesta. Se mostrarán los selectores de opciones para las
siguiente atributos:
o Almacenamiento
o Colores
• Aunque solo exista una opción, se mostrará el selector con la información. Para este
caso de uso, deberá estar seleccionado por defecto.
• Se visualizará un boton de Añadir, donde el usuario, un vez seleccionada las opciones,
añadirá el producto a la cesta.
• Al añadir un producto mediante el API, se requiere mandar la siguiente información:
o El identificador del producto
o El codigo de color seleccionado
o El codigo de la capacidad de almacenamiento seleccionada
• La petición de añadir, devuelve en la respuesta, el numero de productos que hay en la
cesta. Este valor deberá mostrarse en la cabecera de la aplicación en cualquier vista
de la misma. Para ello se requiere persistir el dato. */

function Actions() {
  return (
    
    <div>Actions</div>
  )
}

export default Actions