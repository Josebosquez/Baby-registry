import { Button, Container, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useEffect } from 'react'
import Layout from '../components/Layout'
import CreateContext from "../context/CreateContext"
import axios from 'axios'
import { useNavigate, Link } from "react-router-dom"

function Login() {
    let navigate = useNavigate();
    const { isAuth, setIsAuth, email, setEmail, password, setPassword, user, setUser } = useContext(CreateContext)

    useEffect(() => {
        // console.log(user)
        // console.log(isAuth)
    }, [isAuth])

    const Submit = async (e) => {
        e.preventDefault()
        try {
            let response = await axios.post('http://localhost:3001/users/login', {
                email: email,
                password: password
            })

            let data = await response.data

            setUser(data.payload)
            setIsAuth(data.payload.email)
            setEmail('')
            setPassword('')

            navigate('/')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Layout>
            <Container maxWidth="345px" sx={{ border: '1px solid black', display: "flex", flexDirection: 'column', justifyContent: 'start', alignItems: "center", alignContent: 'center', height: '100vh' }}>
                <Box sx={{ fontSize: '25px', marginTop: '20px' }}>
                    Login
                </Box>
                <Box sx={{ height: "200px", width: '90%', display: 'flex', marginTop: '20px', marginBottom: '20px', flexDirection: 'column', justifyContent: 'space-around' }}>
                    <TextField
                        label='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <TextField
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Box>
                <Button onClick={(e) => Submit(e)}>
                    Submit
                </Button>
                <Link to="/createUser">
                    <div style={{ textDecoration: 'none', color: 'black', }}>
                        Create an account
                    </div>
                </Link>
            </Container>
        </Layout>
    )
}

export default Login
