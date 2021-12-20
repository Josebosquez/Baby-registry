import React from 'react'
import Homepage from './pages/Homepage'
import Cartpage from './pages/Cartpage'
import { Routes, Route } from 'react-router-dom'
import CreateUser from './pages/createUser'
import Profile from './pages/Profile'
import Product from './pages/Product'
import Sources from './components/Sources'
import Login from './pages/Login'
import ErrorPage from './pages/ErrorPage'
import PrivateRoute from "./components/PrivateRoute"
import Purchased from './pages/purchased'

function MainRouter() {
    return (
        <Routes>
            <Route path='/sources' element={<Sources />} />
            
            <Route
                path='/'
                element={
                    <PrivateRoute redirectTo='/login'>
                        <Homepage />
                    </PrivateRoute>
                }
            />

            <Route
                path='/product/:id'
                element={
                    <PrivateRoute redirectTo='/login'>
                        <Product />
                    </PrivateRoute>
                }
            />
            <Route
                path='/purchased'
                element={
                    <PrivateRoute redirectTo='/login'>
                        <Purchased />
                    </PrivateRoute>
                }
            />
            
            <Route
                path='/profile'
                element={
                    <PrivateRoute redirectTo='/login'>
                        <Profile />
                    </PrivateRoute>
                }
            />
            
            <Route
                path='/cart'
                element={
                    <PrivateRoute redirectTo='/login'>
                        <Cartpage />
                    </PrivateRoute>
                }
            />

            <Route path='/createUser' element={<CreateUser />} />  
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<ErrorPage />} />
        </Routes>
    )
}

export default MainRouter