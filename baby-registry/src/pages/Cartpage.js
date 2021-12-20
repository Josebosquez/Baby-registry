import Layout from '../components/Layout'
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useReduxShoppingCart } from '../redux/shoppingCartState';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

function Cartpage() {
    const { total, emptyCart, shoppingCart } = useReduxShoppingCart();

    if (shoppingCart.length < 1) {
        return (
            <Layout>
                <Box sx={{ fontSize: '50px', textAlign: 'center', marginTop: '10' }}>
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
                <Box mb={2} >
                    <Typography>
                        Total: $ {total}
                    </Typography>
                </Box>
                <Box display="flex" flexDirection="row" alignItems="center" mt={2} >
                    <Box mb={2} mr={2} >
                        <Button sx={{ color: 'black' }} onClick={emptyCart} >Remove all items Cart</Button>
                    </Box>
                    <Box mb={2} >
                        <Link to="/">
                            <Button sx={{ textDecoration: 'none', color: "black", }}> Continue shopping</Button>
                        </Link>
                    </Box>
                </Box>
                <Box>
                    <Button sx={{ color: "black" }}>
                        <Link to="/purchased">
                            Purchase
                        </Link>
                    </Button>
                </Box>
            </Box>
        </Layout>
    )
};
export default Cartpage
