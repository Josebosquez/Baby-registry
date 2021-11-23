import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{backgroundColor: "red"}} position="static">
                <Toolbar>
                    Footer
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header