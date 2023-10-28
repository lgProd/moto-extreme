import React from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom'; 

function CartWidget() {
  const { cart } = useCart();

  const totalQuantity = cart.reduce((total, item) => total + item.cantidad, 0);

  return (
    <div className='carrito-btn'>
      <Link to="/checkout" className='btn-carrito'>
        <span>🛒</span>
        <p className='cartwidget-num'>{totalQuantity}</p>
      </Link>
    </div>
  );
}

export default CartWidget;