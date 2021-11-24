import { Box } from '@mui/system';
import React from 'react'

function BabyProducts(props) {
    const {products} = props;
    
    return (
        <Box>
            {products.map((product) => {
                return <Box key={product.id}>
                    {product.name}
                </Box>
            })}
        </Box>
    )
}

export default BabyProducts
