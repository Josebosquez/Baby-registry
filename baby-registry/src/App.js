import React from 'react'
import Homepage from './pages/Homepage'
import Cartpage from './pages/Cartpage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreateUser from './pages/createUser'
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
          <Route path='/createUser' element={<CreateUser />} />
          <Route path='/cart' element={<Cartpage />} />
          <Route path='/' element={<Homepage />} />
        </Routes>
      </Router>
    </AppState>
  )
}

export default App
