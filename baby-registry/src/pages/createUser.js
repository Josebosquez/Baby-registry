import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, TextField } from '@mui/material';
import Layout from '../components/Layout';
import axios from 'axios';
import CreateContext from "../context/CreateContext"
import { useNavigate, Link } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function CreateUser() {
    let navigate = useNavigate();
    const { email, setEmail, dueDate, setDueDate, gender, setGender, spouseLastName, setSpouseLastName, spouseFirstName, setSpouseFirstName, lastName, setLastName, firstName, setFirstName, password, setPassword } = useContext(CreateContext)

    const CreateUser = async (e) => {
        e.preventDefault()
        try {
            let response = await axios.post('http://localhost:3001/api/users/createUser', {
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
            navigate('/login')

            setEmail('')
            setDueDate('')
            setGender('')
            setSpouseLastName('')
            setSpouseFirstName('')
            setLastName('')
            setFirstName('')
            setPassword('')
            console.log(data)
        } catch (e) {
            console.log(e)
        }
    }

    const handleChange = (event) => {
        setGender(event.target.value);
    };

    return (
        <Layout>
            <Container maxWidth="345px" sx={{ border: '1px solid black', display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: "center", alignContent: 'center', height: '100vh' }}>
                <Box sx={{ marginTop: '-20', fontSize: '25px' }}>
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
                    
                        <FormControl sx={{ m: 1, minWidth: "50px" }}>
                            <InputLabel id="demo-simple-select-autowidth-label">Gender</InputLabel>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                value={gender}
                                onChange={handleChange}
                                autoWidth
                                label="Gender"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={"Boy"}>Boy</MenuItem>
                                <MenuItem value={"Girl"}>Girl</MenuItem>
                            </Select>
                        </FormControl>
                    
                    <TextField
                        label="Due Date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                    /><p>Format YYYY/MM/DD</p>
                </Box>

                <Button onClick={(e) => CreateUser(e)}>
                    Submit
                </Button>
                <Link to="/login">
                    <div style={{ textDecoration: 'none', color: 'black', }}>
                        Already have an account? Login!
                    </div>
                </Link>
            </Container>
        </Layout>
    );
}

export default CreateUser
