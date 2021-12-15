import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppState from "./context/ContextState"
import MainRouter from './MainRouter'
import {store} from "../src/redux/cart"
import { Provider as ReduxProvider } from "react-redux"

function App() {
  return (
    <ReduxProvider store={store}>
      <AppState>
        <Router>
          <MainRouter />
        </Router>
      </AppState>
    </ReduxProvider>
  )
}

export default App
