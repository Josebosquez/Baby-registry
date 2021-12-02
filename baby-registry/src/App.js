import React from 'react'
import Homepage from './pages/Homepage'
import Cartpage from './pages/Cartpage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Product from './pages/Product'
import AppState from "./context/ContextState"
import Sources from './components/Sources'

function App() {
  return (
    <AppState>
      <Router>
        <Routes>
          <Route path='/sources' element={<Sources />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cart' element={<Cartpage />} />
          <Route path='/' element={<Homepage />} />
        </Routes>
      </Router>
    </AppState>
  )
}

export default App
