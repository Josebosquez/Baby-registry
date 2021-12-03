import { useContext, useEffect } from 'react'
import Layout from '../components/Layout'
import CreateContext from "../context/CreateContext"
import { Box } from '@mui/system';
import { CardHeader, Container, Typography } from '@mui/material';
import { useParams } from 'react-router';
import { renderBabyProductItem } from "../fakeDataBase"

function Product() {
    let { id } = useParams()

    const { babyProductData, setBabyProductData, renderProductDetails, setRenderProductDetails } = useContext(CreateContext)

    window.localStorage.setItem('babyProductData', JSON.stringify(babyProductData))
    const getproductFromLocalStorage = babyProductData.name ? babyProductData : JSON.parse(window.localStorage.getItem('babyProductData'));

    useEffect(() => {
        renderBabyProductItem(id)
            .then(
                item => {
                    setBabyProductData(item)
                    setRenderProductDetails(false)
                }
            )
    }, []
    )

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
                        <Box sx={{ width: "95%", }}>
                            <Box direction="column" spacing={2}>
                                <Box sx={{ textAlign: 'left', color: 'grey' }}>
                                    {`Reviews: ${babyProductData.reviews}`}
                                </Box>
                                <Box sx={{ textAlign: 'left', color: 'grey' }}>
                                    {`Reviews: ${babyProductData.age}`}
                                </Box>
                                <Box sx={{ textAlign: 'left', color: 'grey' }}>
                                    {`Reviews: ${babyProductData.productDimensions}`}
                                </Box>
                                <Box sx={{ textAlign: 'left', color: 'grey' }}>
                                    {`Reviews: ${babyProductData.department}`}
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