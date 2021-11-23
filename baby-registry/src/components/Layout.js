import { Box } from '@mui/system'
import React, { Fragment } from 'react'
import Header from './Header'
import Footer from "./Footer"

const Layout = ({ children }) => {
    return (
        <Fragment>
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
