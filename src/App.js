import React, {useState, createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllFood from './components/allfood/AllFood';
import MainLayout from './components/layout/MainLayout';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import Contact from './components/contact/Contact';
import CheckOut from './components/checkout/CheckOut';

export const UserContext = createContext()

function App() {
  const [foodList, setFoodList] = useState("")
  return (
    <>
    <UserContext.Provider value={{foodList,setFoodList}}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index path='/' element={<Home />} />
          <Route index path='/home' element={<Home />} />
          <Route index path='/food' element={<AllFood />} />
          <Route index path='/cart' element={<Cart />} />
          <Route index path='/contact' element={<Contact />} />
          <Route index path='/checkout' element={<CheckOut />} />
        </Route>
      </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
