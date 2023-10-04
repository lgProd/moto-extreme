import React from 'react'
import ItemCard from './ItemCard'
import productosData from '../json/productos.json';

function ItemListContainer() {
  const productos = productosData;


  return (
    <>
      <div className="item-list-container">
        {productos.map(producto => (
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
  )
}

export default ItemListContainer