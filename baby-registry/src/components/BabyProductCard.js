import { Card, CardHeader, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { Link } from 'react-router-dom';

function BabyProductCard({product}) {

    return (
        <div>
            <Card sx={{ maxWidth: 300, marginLeft: 4, marginTop: 5 }} key={product.id} >
                <Link to={`/product/${product.id}`} >
                    <CardMedia
                        component="img"
                        height="194"
                        image={product.image}
                        alt={product.image}
                    />
                </Link>

                <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'black' }}>
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
        </div>
    )
}

export default BabyProductCard
