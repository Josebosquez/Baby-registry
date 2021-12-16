import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppState from "./context/ContextState"
import MainRouter from './MainRouter'

function App() {
  return (
    <AppState>
      <Router>
        <MainRouter />
      </Router>
    </AppState>
  )
}

export default App
