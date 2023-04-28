import React, { useState, createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllFood from './components/allfood/AllFood';
import MainLayout from './components/layout/MainLayout';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import Contact from './components/contact/Contact';
import CheckOut from './components/checkout/CheckOut';
import SignIn from './components/signin/SignIn';
import SignUp from './components/signup/index';

export const UserContext = createContext()

function App() {
  const [foodList, setFoodList] = useState("")
  return (
    <>
      <UserContext.Provider value={{ foodList, setFoodList }}>
        <Routes>
        <Route path="/" element={<SignIn/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/" element={<MainLayout />}>
            <Route  path='/home' element={<Home />} />
            <Route  path='/food' element={<AllFood />} />
            <Route  path='/cart' element={<Cart />} />
            <Route  path='/contact' element={<Contact />} />
            <Route  path='/checkout' element={<CheckOut />} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
