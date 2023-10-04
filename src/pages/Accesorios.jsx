import React from 'react';
import ItemCard from '../components/ItemCard';
import productosData from '../json/productos.json';

export const Accesorios = () => {
  const productos = productosData;

  
  const productosAccesorios = productos.filter(producto => producto.categoria === 'accesorios');

  return (
    <>
      <div className="item-list-container">
        {productosAccesorios.map(producto => (
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


