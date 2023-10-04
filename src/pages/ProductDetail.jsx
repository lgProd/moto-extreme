import React from 'react';

import productos from '../json/productos.json';

export const ProductDetail = ({ params }) => {
  
  
 
  const producto = productos.find(producto => producto.id === parseInt(params.id, 10));

  

  return (
    <div className='product-detail'>
      <h2>{producto.nombre_producto}</h2>
      <img src={producto.imagen} alt={producto.id} />
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>
    </div>
  );
}

