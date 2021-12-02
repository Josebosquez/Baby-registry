import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{ backgroundColor: "red" }} position="static">
                <Toolbar >
                    <a href="http://localhost:3000/sources" style={{ textDecoration: 'none', color: 'white' }}>ICON 8 Sources</a>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header