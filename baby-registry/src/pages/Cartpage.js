import React, {useContext, useSelector} from 'react'
import Layout from '../components/Layout'
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useReduxShoppingCart } from '../redux/shoppingCartState';
import CartItem from '../components/CartItem';
import ReplayIcon from '@mui/icons-material/Replay';
import { Link } from 'react-router-dom';

function Cartpage() {
    const { total, emptyCart, shoppingCart } = useReduxShoppingCart();
    console.log(shoppingCart)

    if (shoppingCart.length < 1) {
        return (
            <Layout>
                <Box sx={{fontSize: '50px', textAlign:'center', marginTop: '10'}}>
                Please add items to the cart in order to checkout.
                </Box>
            </Layout>
        )
    }

    return (
        <Layout>
            <Box>
                {shoppingCart.map(item =>
                    <Box key={item.id} mb={4}>
                        <CartItem item={item} />
                    </Box>
                )}
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center" mt={6}>
                <Box mb={2}>
                    <Typography fontWeight="bold">
                        Total: $ {total}
                    </Typography>
                </Box>
                <Box mb={2}>
                    <Button
                        variant="contained"
                        onClick={emptyCart}
                        startIcon={<ReplayIcon />}
                    >Empty Cart</Button>
                </Box>
                <Box mb={2}>
                    <Link to="/">
                        <Button variant="contained">Back to home</Button>
                    </Link>
                </Box>
            </Box>
        </Layout>
    )
};
export default Cartpage
