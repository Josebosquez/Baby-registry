import { Box } from '@mui/system'
import React, { Fragment } from 'react'
import Header from './Header'
import Footer from "./Footer"
import CssBaseline from '@mui/material/CssBaseline';

const Layout = ({ children }) => {
    return (
        <Fragment>
            <CssBaseline/>
            <Box>
                <Header />
                <Box sx={{flexGrow: 1, overflow: "auto", height: "700px" }}>
                    {children}
                </Box>
                <Footer/>
            </Box>
        </Fragment>
    )
}

export default Layout
