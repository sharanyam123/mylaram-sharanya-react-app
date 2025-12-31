import {
  Badge,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  SvgIcon,
  Typography,
} from '@mui/material';
import {
  CartIcon,
  FactsSoft,
  FavoriteFilledIcon,
  FavoriteIcon,
} from '../../../icons';
import { CartIconType, IconsSectionType } from '../definitions/types';
import {
  resetCart,
  updateFavorites,
  updateQuantity,
} from '../../../redux/slice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import useProduct from '../../Product/hooks/useProduct';
import { formatPrice } from '../../../helpers';

export function IconsSection(props: IconsSectionType) {
  const { favorites, id } = props;
  const isFavoriteProduct = favorites?.includes(id);
  const dispatch = useDispatch();
  return (
    <Box display={'flex'} gap={2}>
      <SvgIcon
        component={isFavoriteProduct ? FavoriteFilledIcon : FavoriteIcon}
        sx={{ color: isFavoriteProduct ? '#d32f2f' : 'grey' }}
        inheritViewBox
        onClick={() => dispatch(updateFavorites({ id }))}
      />
      <SvgIcon component={FactsSoft} sx={{ color: 'grey' }} inheritViewBox />
    </Box>
  );
}

export default function CartIconSection(props: CartIconType) {
  const { cartCount } = props;
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const {
    priceDetailsData: { price, currency },
  } = useProduct();
  const dispatch = useDispatch();

  const handleCart = () => {
    if (cartCount > 0) {
      setIsOpenModal(true);
    }
  };

  const onPlaceOrder = () => {
    setIsOrderPlaced(true);
    dispatch(resetCart());
    dispatch(updateQuantity(1));
  };

  const onModalClose = () => {
    setIsOpenModal(false);
    setIsOrderPlaced(false);
  };

  return (
    <>
      <Badge badgeContent={cartCount} color="error">
        <SvgIcon
          component={CartIcon}
          sx={{ color: 'grey' }}
          inheritViewBox
          onClick={handleCart}
        />
      </Badge>
      <Dialog open={isOpenModal} onClose={onModalClose} fullWidth>
        <DialogTitle>Cart</DialogTitle>
        {isOrderPlaced ? (
          <DialogContent>
            <Typography>Order placed succesfully!!</Typography>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: 5,
                margin: '10px 0',
              }}
            >
              <Button variant="outlined" onClick={onModalClose}>
                Close
              </Button>
            </div>
          </DialogContent>
        ) : (
          <DialogContent
            sx={{
              margin: '10px 0',
              display: 'flex',
              flexDirection: 'column',
              gap: 5,
            }}
          >
            <div>
              <strong>Price: </strong>
              <span>{formatPrice(price, currency)}</span>
            </div>
            <div>
              <strong>Quantity: </strong>
              <span>{cartCount}</span>
            </div>
            <div>
              <strong>Total: </strong>
              <span>{formatPrice(price * cartCount, currency)}</span>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: 5,
              }}
            >
              <Button variant="outlined" onClick={onModalClose}>
                Close
              </Button>
              <Button variant="contained" onClick={onPlaceOrder}>
                Place Order
              </Button>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}
