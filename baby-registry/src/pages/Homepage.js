import { Box } from '@mui/system'
import React, { useEffect, useContext } from 'react'
import BabyProducts from '../components/BabyProducts';
import Layout from '../components/Layout'
import { fetchProducts } from '../fakeDataBase';
import CreateContext from "../context/CreateContext"
import { useSelector } from 'react-redux';

const Homepage = () => {
    const { productData, setProductData, renderProductDetails, setRenderProductDetails } = useContext(CreateContext)

    const variable = useSelector(state => state)

    console.log(variable)
    useEffect(() => {
        fetchProducts()
            .then(
                productData => {
                    setProductData(productData);
                    setRenderProductDetails(true)
                }
            )
    }, [setRenderProductDetails, productData, setProductData, renderProductDetails]);

    return (
        <Layout>
            <Box>
                <BabyProducts products={productData} />
            </Box>
        </Layout>
    )
}

export default Homepage