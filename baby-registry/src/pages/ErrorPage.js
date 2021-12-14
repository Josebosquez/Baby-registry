import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
    return (
        <div>
            Error, this page does not exist. Please proceed to: 
            <p>
                <Link to="/">
                    Home
                </Link>
            </p>
        </div>
    )
}

export default ErrorPage
