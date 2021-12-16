import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Card, CardMedia, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useReduxShoppingCart } from '../redux/shoppingCartState';

const CartItem = (props) => {
  const { removeFromCart } = useReduxShoppingCart();
  const { item } = props;

  return (
    <Card>
      <Box display="flex" mt='10px'>
        <Box sx={{marginLeft: '20px'}}>
            <CardMedia
              component="img"
              sx={{ width: 100, height: 80, p:1 }}
              image={item.image}
              alt=""
              />
        </Box>
        <Box px={2} display="flex" flexDirection="column" justifyContent="center" flexGrow={1}>
          <Box>
            <Typography fontWeight="bold">
              {item.name}
            </Typography>
          </Box>
          <Box>
          <Typography fontWeight="bold" color="primary">
            $ {item.price}
            </Typography>
          </Box>
        </Box>
        <Box px={2} display="flex" flexDirection="column" justifyContent="center">
          <Typography fontWeight="bold" color="primary">
            x {item.quantity}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="center">
          <IconButton aria-label="delete" onClick={() => removeFromCart(item.id)}>
            <DeleteForeverIcon />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
};

export default CartItem;