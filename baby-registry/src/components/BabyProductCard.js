import { Card, CardHeader, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import Product from '../pages/Product'
import CreateContext from "../context/CreateContext"

function BabyProductCard({product}) {
    const { babyProductData, setBabyProductData} = useContext(CreateContext)

    const dataForProductPage = () => {
        setBabyProductData({
            name: product.name,
            image: product.image,
            description: product.description,
            id: product.id,
            price: product.price
        })
        console.log(babyProductData);
    }
    console.log(babyProductData);
    return (
        <div>
            <Card sx={{ maxWidth: 300, marginLeft: 4, marginTop: 5 }} key={product.id} onClick={()=> dataForProductPage()}>
                <Link to="/product" element={<Product />}>
                    <CardMedia
                        component="img"
                        height="194"
                        image={product.image}
                        alt={product.image}
                        
                    />
                </Link>

                <Link to="/product" style={{ textDecoration: 'none', color: 'black' }}>
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
