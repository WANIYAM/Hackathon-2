import React from 'react'
import UpperHeader from './components/header/Header'
import MainHeader from './components/header/MainHeader'
import Footer from './components/Footer'
import ShoppingCart from './components/CartItems'

const Cart = () => {
  return (
    <div>
      <UpperHeader/>
      <MainHeader/>
      <ShoppingCart/>

      <Footer/>
    </div>
  )
}

export default Cart