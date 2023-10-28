import React, { useState } from 'react';
import productosData from '../json/productos.json';
import { useParams } from 'react-router-dom';
import { useCart } from '../components/CartContext'; // Ajusta la ruta según la estructura de carpetas

const ItemDetail = () => {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const product = productosData.find((producto) => producto.id === productId);

  const [quantity, setQuantity] = useState(1); 
  const { addToCart } = useCart(); 

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  const handleAddToCart = () => {
    
    console.log(`Producto agregado al carrito: ${product.nombre_producto}, Cantidad: ${quantity}`);
    addToCart({ ...product, cantidad: quantity });
  };

  return (
    <div className='ItemDetailContainer'>
      <h2>{product.nombre_producto}</h2>
      <img src={product.imagen} alt={product.nombre_producto} style={{ maxWidth: '300px' }} />
      <p>{product.descripcion}</p>
      <p className='item-precio'>Precio: ${product.precio}</p>
      <label>Cantidad:</label>
      <input
        className='input-quantity'
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
        min="1"
      />
      <button className='btn' onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ItemDetail;
