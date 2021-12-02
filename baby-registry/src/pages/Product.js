import { useContext, useEffect, useState } from 'react'
import Layout from '../components/Layout'
import CreateContext from "../context/CreateContext"
import { Box } from '@mui/system';
import { CardHeader, Container, Typography } from '@mui/material';
import { useParams } from 'react-router';
import {renderBabyProductItem} from "../fakeDataBase"

function Product() {
    let { id } = useParams()

    const { babyProductData, setBabyProductData } = useContext(CreateContext)

    // const babyProductData = babyProductDataFromContext;
    // const babyProductData = babyProductDataFromContext.name ? babyProductDataFromContext : JSON.parse(window.localStorage.getItem('babyProductData'));

    // window.localStorage.setItem('babyProductData', JSON.stringify(babyProductData))
    // console.log("babyProductData", babyProductData)
    // console.log("parseJson: ", JSON.parse(window.localStorage.getItem('babyProductData')));
    // console.log("babyProductDataFromContext: ", babyProductDataFromContext);

    useEffect(() => {
        // window.localStorage.setItem('babyProductData', JSON.stringify(babyProductData))
        renderBabyProductItem(id)
            .then(
                item => {
                    setBabyProductData(item)
                }
            )
    }, []
    )
    console.log(babyProductData);

    return (
        <Layout>
            <Box>
                <Container maxWidth="sm" sx={{marginTop: '20px', display: 'flex', flexDirection:'column', justifyContent:'center', alignContent: 'center', alignItems:'center'}}>
                    <Box>
                        <img src={babyProductData.image} alt={babyProductData.image} style={{maxWidth: "350px"}}/>
                    </Box>
                    <CardHeader sx={{width: '100%'}}
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
                    <Box sx={{border: '1px solid black', width: "100%"}}>
                        Reviews: {babyProductData.reviews}
                    </Box>
                </Container>
            </Box>
        </Layout>
    )
}

export default Product