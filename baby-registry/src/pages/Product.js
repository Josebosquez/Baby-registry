import { useContext, useEffect, useState } from 'react'
import Layout from '../components/Layout'
import CreateContext from "../context/CreateContext"
import { Box } from '@mui/system';
import { Button, CardHeader, Container, Typography } from '@mui/material';
import { useParams } from 'react-router';
import { fetchIndividualBabyProductItem, } from '../fakeDataBase';

function Product() {
    let { id } = useParams()

    const [babyProductData, setBabyProductData] = useState(undefined);

    const { setToggleCategory,  } = useContext(CreateContext)
    
    useEffect(() => {
        fetchIndividualBabyProductItem(id)
            .then(
                item => {
                    setBabyProductData(item)
                    setToggleCategory(false)
                }
            )
    }, [id, setToggleCategory]
    )

    if (!babyProductData) {
        return null;
    }

    const AddOneToCart = (value) => {
        console.log(value)
        console.log(babyProductData.quantity)
        babyProductData.quantity += 1
        
    }

    const MinusOneToCart = (value) => {
        console.log(value)
        if (babyProductData.quantity > 0){
            babyProductData.quantity -= 1
            
        }
    }
    
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
                                    {babyProductData.price}
                                </Typography>
                            </Box>
                        }
                        title={babyProductData.name}
                        subheader={babyProductData.description}
                    />


                    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-evenly' }}>
                        <Button sx={{ fontSize: '25px' }}
                            value={babyProductData.quantity}
                            onClick={(e) => AddOneToCart(e.target.value)}
                            >
                            +
                        </Button>
                        <p style={{ fontSize: '25px' }}>
                            Quantity: {babyProductData.quantity}
                        </p>
                        <Button sx={{ fontSize: '25px' }}
                                value={babyProductData.quantity}
                            onClick={(e) => MinusOneToCart(e.target.value)}
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