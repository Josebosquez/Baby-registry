import React from 'react'
import Homepage from './pages/Homepage'
import Cartpage from './pages/Cartpage'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <ReduxProvider store={store}>
      <Router>
        <Routes>
          <Route path='/cart' element={<Cartpage />} />
          <Route path='/' element={<Homepage />} />
        </Routes>
      </Router>
    </ReduxProvider>

  )
}

export default App
