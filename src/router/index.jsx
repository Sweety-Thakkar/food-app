import React from 'react'
import SignUp from '../components/signup'
import { Route, Routes } from 'react-router-dom'
import SignIn from '../components/signin/SignIn'
import MainLayout from '../layout/MainLayout'
import Cart from '../containers/cart/Cart'
import Contact from '../containers/contact/Contact'
import Home from '../containers/home/Home'
import CheckOut from '../containers/checkout/CheckOut'
import AllFood from '../containers/allfood/AllFood'

const Link = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/" element={<MainLayout />}>
          <Route path='/home' element={<Home />} />
          <Route path='/food' element={<AllFood />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/checkout' element={<CheckOut />} />
        </Route>
      </Routes>
    </>
  )
}

export default Link
