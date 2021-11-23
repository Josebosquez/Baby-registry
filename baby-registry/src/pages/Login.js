import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, TextField } from '@mui/material';

function Login() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="345px" sx={{border: '1px solid black'}}>
                Login
                <Box sx={{ marginTop: '100px',}}>
                    <TextField label="email" sx={{marginBottom: '25px'}}/>
                    <TextField label="password"/>
                </Box>
                    <Button>
                        Submit
                    </Button>
                
            </Container>
        </React.Fragment>
    );
}

export default Login