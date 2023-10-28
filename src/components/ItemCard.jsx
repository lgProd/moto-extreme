import React from 'react'
import { Link } from 'react-router-dom';


function ItemCard({ id, nombre_producto, descripcion, precio, imagen }) {
  return (

    <>
      <div className='card-container'>
        <img src={imagen} className="card-img" alt={id} />
        <div className="card-body">
          <h5 className="card-title">{nombre_producto}</h5>
          
          <p className="card-text">${precio}</p>
          <Link to={`/item/${id}`} className="btn btn-primary">
            Ver Producto
          </Link>
        </div>
      </div>  
    </>
  )
}

export default ItemCard