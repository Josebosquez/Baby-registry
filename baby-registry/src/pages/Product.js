import { useContext } from 'react'
import Layout from '../components/Layout'
import CreateContext from "../context/CreateContext"
import { Box } from '@mui/system';
import { CardHeader, Container, Typography } from '@mui/material';

function Product() {
    const { babyProductData } = useContext(CreateContext)
    console.log(babyProductData);
    const { name, price, description, id, image } = babyProductData;

    return (
        <Layout>
            <Box>
                <Container maxWidth="sm" sx={{marginTop: '20px', display: 'flex', flexDirection:'column', justifyContent:'center', alignContent: 'center', alignItems:'center'}}>
                {/* <Container fixed sx={{border: '1px solid black'}}> */}
                    <Box>
                        <img src={image} alt={image} style={{maxWidth: "350px"}}/>
                    </Box>
                    <CardHeader sx={{width: '100%'}}
                        action={
                            <Box>
                                <Typography color="black" >
                                    $ {price}
                                </Typography>
                            </Box>
                        }
                        title={name}
                        subheader={description} 
                    />
                </Container>
            </Box>
        </Layout>
    )
}

export default Product