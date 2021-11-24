import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
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
    console.log(productData)

    return (
        <Layout>
            <Box>
                Hello homepage
            </Box>
        </Layout>
    )
}

export default Homepage