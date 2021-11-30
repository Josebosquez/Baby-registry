import Card from "./BabyProductCard"
import { Box } from '@mui/system';
import React from 'react'
import { Link } from 'react-router-dom';

function BabyProducts({products}) {
    console.log(products);

    return (
        <Box>
            {products.map((product) => {
                return (
                    <Card product={product} key={product.id}/>
                )
            })}
        </Box>
    )
}

export default BabyProducts
