import { Box } from '@mui/system'
import React, { useEffect, useContext } from 'react'
import BabyProducts from '../components/BabyProducts';
import Layout from '../components/Layout'
import { fetchProducts } from '../fakeDataBase';
import CreateContext from "../context/CreateContext"

const Homepage = () => {
    const { productData, setProductData, renderProductDetails, setRenderProductDetails} = useContext(CreateContext)

    useEffect(() => {
        fetchProducts()
        .then(
            productData => {
                setProductData(productData);
                setRenderProductDetails(true)
            }
        )
    }, [renderProductDetails]);

    return (
        <Layout>
            <Box>
                <BabyProducts products={productData}/>
            </Box>
        </Layout>
    )
}

export default Homepage