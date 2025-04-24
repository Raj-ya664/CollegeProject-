import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Product from './pages/Product'
import { Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import About from './pages/About'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className='container'>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Product/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      </div>
     
    </div>
  )
}

export default App

