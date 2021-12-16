import { useContext, useEffect, useState } from 'react'
import Layout from '../components/Layout'
import CreateContext from "../context/CreateContext"
import { Box } from '@mui/system';
import { Button, CardHeader, Container, Typography } from '@mui/material';
import { useParams } from 'react-router';
import { fetchIndividualBabyProductItem, } from '../fakeDataBase';
import { useReduxShoppingCart } from '../redux/shoppingCartState';
import { useSelector } from 'react-redux';

function Product() {
    let { id } = useParams()

    const [babyProductData, setBabyProductData] = useState(undefined);
    const { addItemToCart, removeFromCart, shoppingCart} = useReduxShoppingCart();

    const { setToggleCategory, cartItem} = useContext(CreateContext)
    // const shoppingCart = useSelector(state => state)

    // console.log(shoppingCart)
    useEffect(() => {
        fetchIndividualBabyProductItem(id)
            .then(
                item => {
                    setBabyProductData(item)
                    setToggleCategory(false)
                }
            )
    }, [id, setToggleCategory, cartItem]
    )

    if (!babyProductData) {
        return null;
    }

    const quantityOfItem = shoppingCart.find(item => {
        if(item.id === shoppingCart.id){
            return true;
        } return false
        console.log(item)
    })
    
    return (
        <Layout>
            <Box>
                <Container maxWidth="sm" sx={{ marginTop: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                    <Box>
                        <img src={babyProductData.image} alt={babyProductData.image} style={{ maxWidth: "350px" }} />
                    </Box>
                    <CardHeader sx={{ width: '100%' }}
                        action={
                            <Box>
                                <Typography color="black" >
                                    $ {babyProductData.price}
                                </Typography>
                            </Box>
                        }
                        title={babyProductData.name}
                        subheader={babyProductData.description}
                    />


                    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-evenly' }}>
                        <Button sx={{ fontSize: '25px' }}
                            value={babyProductData.id}
                            onClick={
                                () => addItemToCart({ id: babyProductData.id, name: babyProductData.name, price: babyProductData.price, image: babyProductData.image })
                            }
                        >
                            +
                        </Button>
                        <p style={{ fontSize: '25px' }} value={babyProductData.id}>
                            Quantity: {shoppingCart.quantity}
                        </p>
                        <Button sx={{ fontSize: '25px' }}
                                value={babyProductData.quantity}
                            onClick={(e) => removeFromCart(babyProductData.id)}
                            >
                            -
                        </Button>
                    </Box>

                    <br />
                    <Box sx={{ width: "95%", }}>
                        <Box direction="column" spacing={2}>
                            <Box sx={{ textAlign: 'left', color: 'grey' }}>
                                {`Reviews: ${babyProductData.reviews}`}
                            </Box>
                            <Box sx={{ textAlign: 'left', color: 'grey' }}>
                                {`Age: ${babyProductData.age}`}
                            </Box>
                            <Box sx={{ textAlign: 'left', color: 'grey' }}>
                                {`Size: ${babyProductData.productDimensions}`}
                            </Box>
                            <Box sx={{ textAlign: 'left', color: 'grey' }}>
                                {`Department: ${babyProductData.department}`}
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Layout>
    )
}

export default Product