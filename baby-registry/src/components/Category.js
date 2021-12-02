import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';


const Category = () => {
    useEffect(() => {
        console.log('helo');
    }, [])

    return (
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <Toolbar sx={{ color: "black" }}>

                <IconButton sx={{ fontSize: '10px', display: 'flex', flexDirection:'column' }}>
                    
                        <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/30/000000/external-clothes-summer-vitaliy-gorbachev-lineal-vitaly-gorbachev.png"/>
                        Clothing
                </IconButton>
                <IconButton sx={{ fontSize: '10px', display: 'flex', flexDirection: 'column' }}>
                    <img src="https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/30/000000/external-health-immune-system-inipagistudio-mixed-inipagistudio.png" />
                    Health and Safety
                </IconButton>
            </Toolbar>
        </Box>
    )
}

export default Category