import { Box, Button, SvgIcon, TextField, Typography } from '@mui/material';
import useCartContainer from './hooks/useCartContainer';
import { AddIcon } from '../../icons';
import './styles/index.scss';
import { forwardRef } from 'react';
import {
  CartContainerRefObjectType,
  CartContainerRefType,
} from './definitions/types';

function CartContainer(_: any, ref?: CartContainerRefType) {
  const { minimum_order_quantity, unit, handleQuantity, handleCart } =
    useCartContainer(ref as CartContainerRefObjectType);

  return (
    <Box {...(!!ref && { ref })} className="cartContainer" pr={2}>
      <TextField
        className="quantity"
        type="number"
        slotProps={{
          htmlInput: {
            min: 0,
          },
        }}
        value={minimum_order_quantity}
        onChange={handleQuantity}
      />
      <Typography variant="subtitle2">{unit}</Typography>
      <Button
        variant="contained"
        color="error"
        onClick={handleCart}
        sx={{ whiteSpace: 'nowrap' }}
      >
        <SvgIcon
          component={AddIcon}
          fontSize="small"
          sx={{ pr: 1 }}
          inheritViewBox
        />
        Add to Cart
      </Button>
    </Box>
  );
}

const ForwardedContainer = forwardRef(CartContainer);
export default ForwardedContainer;
