import React from 'react'
import { Routes, Route} from "react-router-dom"
import Cart from './Cart'
import Products from './Products'
import Signup from './Signup'

function RoutesComp() {
  return (
    <Routes>
        <Route path='/' element={<Products />} />
        <Route path='signup' element={<Signup />} />
        <Route path='cart' element={<Cart />} />
    </Routes>
  )
}

export default RoutesComp