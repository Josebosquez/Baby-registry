import { Box } from '@mui/system'
import React, { useEffect, useState, useContext } from 'react'
import BabyProducts from '../components/BabyProducts';
import Layout from '../components/Layout'
import { fetchProducts } from '../fakeDataBase';
import CreateContext from "../context/CreateContext"

const Homepage = () => {
    const {productData, setProductData} = useContext(CreateContext)

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