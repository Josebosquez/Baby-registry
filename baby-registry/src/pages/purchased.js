import { Box, Button } from '@mui/material';
import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import CreateContext from '../context/CreateContext';
import { useReduxShoppingCart } from '../redux/shoppingCartState';

function Purchased() {
    const { user } = useContext(CreateContext)
    const { emptyCart } = useReduxShoppingCart();

    return (
        <Layout>
            <Box sx={{ fontSize: '40px', textAlign: 'center', marginTop: '10' }}>
                A confirmation email has been sent to {user.email}.
            </Box>
            <Box display="flex" justifyContent="center" alignContent="center" alignItems="center" mt={2}>
            <Link to="/">
                <Button sx={{ textDecoration: 'none', color: "black", }}> Continue shopping</Button>
            </Link>
            </Box>
        </Layout>
    )
}

export default Purchased
