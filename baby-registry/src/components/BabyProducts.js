import { Card, CardHeader, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { Link } from 'react-router-dom';

function BabyProducts(props) {
    const {products} = props;

    return (
        <Box>
            {products.map((product) => {
            return (            
            <Card sx={{maxWidth: 300, marginLeft: 4,  marginTop: 5}} product={product}>
                <Link to="/product">
                <CardMedia
                    component="img"
                    height="194"
                    image={product.image}
                    alt={product.image}
                />
                </Link>
                <Link to="/product" style={{textDecoration: 'none', color: 'black'}}>
                <CardHeader
                    action={
                        <Box>
                            <Typography color="black" >
                                $ {product.price}
                            </Typography>
                        </Box>
                    }
                    title={product.name}
                    />
                    </Link>

            </Card>
            )
            })}
        </Box>
    )
}

export default BabyProducts
