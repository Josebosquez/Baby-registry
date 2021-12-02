import Card from "./BabyProductCard"
import { Box } from '@mui/system';
import React from 'react'

function BabyProducts({products}) {

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
