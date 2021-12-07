import { useContext, useEffect } from 'react'
import Layout from '../components/Layout'
import CreateContext from "../context/CreateContext"
import { Box } from '@mui/system';
import { Button, CardHeader, Container, Typography } from '@mui/material';
import { useParams } from 'react-router';
import { renderBabyProductItem, updateQuantityOfCartItem } from '../fakeDataBase';


function Product() {
    let { id } = useParams()

    const { valueOfItemAdded, setValueOfItemAdded, setToggleCategory, departmentProducts, babyProductData, setBabyProductData, renderProductDetails, setRenderProductDetails } = useContext(CreateContext)

    window.localStorage.setItem('babyProductData', JSON.stringify(babyProductData))
    const getproductFromLocalStorage = babyProductData.name ? babyProductData : JSON.parse(window.localStorage.getItem('babyProductData'));

    useEffect(() => {
        renderBabyProductItem(id)
            .then(
                item => {
                    setBabyProductData(item)
                    setRenderProductDetails(false)
                    setToggleCategory(false)
                }
            )
    }, [id]
    )

    const AddOneToCart = (value) => {
        console.log(value)
        updateQuantityOfCartItem()
    }

    return (
        <Layout>
            <Box>
                {renderProductDetails ?
                    ""
                    :
                    <Container maxWidth="sm" sx={{ marginTop: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                        <Box>
                            <img src={babyProductData.image} alt={babyProductData.image} style={{ maxWidth: "350px" }} />
                        </Box>
                        <CardHeader sx={{ width: '100%' }}
                            action={
                                <Box>
                                    <Typography color="black" >
                                        {babyProductData.price}
                                    </Typography>
                                </Box>
                            }
                            title={babyProductData.name}
                            subheader={babyProductData.description}
                        />


                        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-evenly' }}>
                            <Button sx={{fontSize: '25px' }} 
                            value={babyProductData.id} 
                            onClick={(e) => AddOneToCart(e.target.value)} 
                            >
                                +
                            </Button> 
                            <p style={{ fontSize: '25px' }}>
                                Quantity: {babyProductData.quantity}
                            </p>
                            <Button sx={{fontSize: '25px' }}
                                value="subtract" >
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
                }
            </Box>
        </Layout>
    )
}

export default Product