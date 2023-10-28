
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import { Navbar } from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Accesorios } from "./pages/Accesorios";
import { Repuestos } from './pages/Repuestos';
import { Indumentaria } from './pages/Indumentaria';
import ItemDetail from "./pages/ItemDetail";
import { CartProvider } from './components/CartContext'; 
import Checkout from './pages/CheckOut';



function App() {
  return (

      <CartProvider>
          <BrowserRouter>
          
            <Navbar />
          
            <Routes>
              <Route path="/" element={<ItemListContainer/>} />
          
              <Route path="/Category/Repuestos" element={<Repuestos/>} />
              <Route path="/Category/Accesorios" element={<Accesorios/>} />
              <Route path="/Category/Indumentaria" element={<Indumentaria/>} />
              <Route path="/item/:id" element={<ItemDetail/>} />
              <Route path="/Checkout" element={<Checkout />} />
              
          
              <Route path="/*" element={<h1>Pagina No Encontrada</h1>} />
          
            </Routes>
          
          </BrowserRouter>
      </CartProvider>

  );
}

export default App;
