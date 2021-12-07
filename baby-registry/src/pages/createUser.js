import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, TextField } from '@mui/material';
import Layout from '../components/Layout';
import axios from 'axios';

function CreateUser() {

    const CreateUser = async () => {
        try {
            let response = await axios.post('http://localhost:3001/users/createUser', {
                email: "shirt@3.com",
                password: "bushy3",
                dueDate: "2010-12-01",
                fName: "Jose",
                lName: "Bos",
                sFName: "Jocelyn",
                sLName: "Esparza",
                babyGender: "Boy"
            })
            let data = await response.data
            console.log(data)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Layout>
            <Container maxWidth="345px" sx={{ border: '1px solid black' }}>
                CreateUser
                <Box sx={{ marginTop: '100px', }}>
                    <TextField label="email" sx={{ marginBottom: '25px' }} />
                    <TextField label="password" />
                </Box>
                <Button onClick={()=> CreateUser()}>
                    Submit
                </Button>
            </Container>
        </Layout>
    );
}

export default CreateUser