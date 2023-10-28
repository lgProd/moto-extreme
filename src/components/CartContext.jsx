
import React, { createContext, useContext, useReducer } from 'react';


const ADD_TO_CART = 'ADD_TO_CART';


const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
  
    default:
      return state;
  }
};


const CartContext = createContext();


const CartProvider = ({ children }) => {
 
  const [cart, dispatch] = useReducer(cartReducer, []);

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    dispatch({ type: ADD_TO_CART, payload: product });
  };

  
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser utilizado dentro de un CartProvider');
  }
  return context;
};


export { CartProvider, useCart };
