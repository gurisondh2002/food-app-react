import './App.css';
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import { useState } from 'react';
import Order from './components/Cart/Order'
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)
  const [orderIsShown , setOrderIsShown] = useState(false)
  const showCartHandler =() =>{
    setCartIsShown(true)
  }
  const hideCartHandler =() =>{
    setCartIsShown(false)
  }
  const showOrderHandler =() =>{
    setOrderIsShown(true)
  }
  const hideOrderHandler =() =>{
    setOrderIsShown(false)
  }
  return (
    <CartProvider>
       {orderIsShown && <Order onClosee={hideOrderHandler}/>}
      {cartIsShown && <Cart onShow={showOrderHandler} onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
