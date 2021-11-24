import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import BabyProducts from '../components/BabyProducts';
import Layout from '../components/Layout'
import { fetchProducts } from '../fakeDataBase';

const Homepage = () => {

    const [productData, setProductData] = useState([]);


    useEffect(() => {
        fetchProducts().then(
            productData => {
                setProductData(productData);
            }
        )
    }, []);

    return (
        <Layout>
            <Box>
                <BabyProducts products={productData}/>
            </Box>
        </Layout>
    )
}

export default Homepage