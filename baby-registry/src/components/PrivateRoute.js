import React from 'react';
import { Navigate } from 'react-router-dom';
import CheckAuthCookie from '../hooks/checkAuthCookie'

function RequireAuth({ children, redirectTo }) {

    const { checkIfCookieExists } = CheckAuthCookie()

    let isAuthenticated = checkIfCookieExists();


    console.log('requireAuth: ', isAuthenticated)
    return !isAuthenticated ? <Navigate to={redirectTo}/> : children ;
}

export default RequireAuth;