import React from 'react';
import { useCart } from '../components/CartContext';

const Checkout = () => {
  const { cart } = useCart();

  const groupedCart = cart.reduce((grouped, item) => {
    const existingItem = grouped.find((group) => group.id === item.id);

    if (existingItem) {
      existingItem.quantity += item.cantidad;
      existingItem.total += item.precio * item.cantidad;
    } else {
      grouped.push({
        id: item.id,
        nombre_producto: item.nombre_producto,
        precio: item.precio,
        quantity: item.cantidad,
        total: item.precio * item.cantidad,
      });
    }

    return grouped;
  }, []);

  const getTotalPrice = () => {
    return groupedCart.reduce((total, item) => total + item.total, 0);
  };

  return (
    <div className='checkout-container'>
      <h2>Resumen de la Compra</h2>
      <ul>
        {groupedCart.map((item) => (
          <li key={item.id} className='checkout-li'>
            <div>
              <strong>-{item.nombre_producto}</strong>
            </div>
            <div>Precio: ${item.precio.toFixed(2)}</div>
            <div>Cantidad: {item.quantity}</div>
            <div>Total: ${item.total.toFixed(2)}</div>
          </li>
        ))}
      </ul>
      <div className='total'>Total: ${getTotalPrice().toFixed(2)}</div>
      <button className='pago-btn'>Ir a Pagar</button>
    </div>
  );
};

export default Checkout;
