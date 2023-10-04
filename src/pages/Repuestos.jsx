import React from 'react';
import ItemCard from '../components/ItemCard';
import productosData from '../json/productos.json';

export const Repuestos = () => {
  const productos = productosData;

  
  const productosRepuestos = productos.filter(producto => producto.categoria === 'repuestos');

  return (
    <>
      <div className="item-list-container">
        {productosRepuestos.map(producto => (
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








