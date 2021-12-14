import { Box } from '@mui/system'
import React, { useEffect, useContext } from 'react'
import BabyProducts from '../components/BabyProducts';
import Layout from '../components/Layout'
import { fetchProducts } from '../fakeDataBase';
import CreateContext from "../context/CreateContext"
import CheckAuthCookie from '../hooks/checkAuthCookie';

const Homepage = () => {
    const { productData, setProductData, renderProductDetails, setRenderProductDetails} = useContext(CreateContext)
    const { logUserIn } = CheckAuthCookie();

    useEffect(() => {
        fetchProducts()
        .then(
            productData => {
                setProductData(productData);
                setRenderProductDetails(true)
            }
        )
        logUserIn();
    }, [renderProductDetails, productData]);

    return (
        <Layout>
            <Box>
                <BabyProducts products={productData}/>
            </Box>
        </Layout>
    )
}

export default Homepage