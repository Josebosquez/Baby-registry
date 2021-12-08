import React, { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, TextField } from '@mui/material';
import Layout from '../components/Layout';
import axios from 'axios';
import DatePicker from "../components/DatePicker"
import useChangeInputConfig from "../hooks/useInput"
import CreateContext from "../context/CreateContext"

function CreateUser(props) {

    const { email, setEmail, dueDate, setDueDate, gender, setGender, spouseLastName, setSpouseLastName, spouseFirstName, setSpouseFirstName, lastName, setLastName, firstName, setFirstName, password, setPassword } = useContext(CreateContext)

    const CreateUser = async (e) => {
        e.preventDefault()
        try {
            let response = await axios.post('http://localhost:3001/users/createUser', {
                email: email,
                password: password,
                dueDate: dueDate,
                fName: firstName,
                lName: lastName,
                sFName: spouseFirstName,
                sLName: spouseLastName,
                babyGender: gender,
            })
            let data = await response.data

            setEmail('')
            setDueDate('')
            setGender('')
            setSpouseLastName('')
            setSpouseFirstName('')
            setLastName('')
            setFirstName('')
            setPassword('')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Layout>
            <Container maxWidth="345px" sx={{ border: '1px solid black', display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: "center", alignContent: 'center' }}>
                <Box sx={{ marginTop: '50px', fontSize: '25px' }}>
                    CreateUser
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>

                    <TextField
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{ margin: '25px', width: '40%' }}
                    />

                    <TextField
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <TextField
                        label="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />

                    <TextField
                        label="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />

                    <TextField
                        label="Spouse First Name"
                        value={spouseFirstName}
                        onChange={(e) => setSpouseFirstName(e.target.value)}
                    />

                    <TextField
                        label="Spouse Last Name"
                        value={spouseLastName}
                        onChange={(e) => setSpouseLastName(e.target.value)}
                    />

                    <TextField
                        label="Gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    />

                    <TextField
                        label="Due Date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                    />

                    {/* <DatePicker/> */}
                </Box>

                {/* <Button onClick={onSubmit}> */}
                <Button onClick={(e) => CreateUser(e)}>
                    Submit
                </Button>
            </Container>
        </Layout>
    );
}

export default CreateUser






{/*                         
                        <TextField label="password" sx={{ margin: '25px', width: '40%' }} />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <TextField label="First Name" sx={{ margin: '25px', width: '40%' }} />
                        <TextField label="Last Name" sx={{ margin: '25px', width: '40%' }} />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection:'column', justifyContent: 'center', alignContent:'center', alignItems:'center' }}>
                        <p>Spouse Info</p>
                        <div style={{display:'flex'}}>
                        <TextField label="Spouse First Name" sx={{ margin: '25px', width: '40%' }} />
                        <TextField label="Spouse Last Name" sx={{ margin: '25px', width: '40%' }} />
                        </div>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection:'column', justifyContent: 'center', alignContent:'center', alignItems:'center' }}>
                        <p>Baby Info</p>
                        <div style={{display:'flex'}}>
                            <TextField label="Due Date" sx={{ margin: '25px', width: '40%' }} />
                            <TextField label="Gender" sx={{ margin: '25px', width: '40%' }} />
                        </div>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <TextField label="Due Date" sx={{ margin: '25px', width: '40%' }} />
                        <TextField label="Gender" sx={{ margin: '25px', width: '40%' }} />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        {/* <DatePicker/> */}