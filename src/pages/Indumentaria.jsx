import React from 'react';
import ItemCard from '../components/ItemCard';
import productosData from '../json/productos.json';

export const Indumentaria = () => {
  const productos = productosData;

  
  const productosIndumentaria = productos.filter(producto => producto.categoria === 'indumentaria');

  return (
    <>
      <div className="item-list-container">
        {productosIndumentaria.map(producto => (
          <ItemCard
            key={producto.id}
            id={producto.id}
            nombre_producto={producto.nombre_producto}
            descripcion={producto.descripcion}
            precio={producto.precio}
            imagen={producto.imagen}
          />
        ))}
      </div>
    </>
  );
}


