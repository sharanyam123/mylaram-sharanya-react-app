import { Badge, Box, SvgIcon } from '@mui/material';
import {
  CartIcon,
  FactsSoft,
  FavoriteFilledIcon,
  FavoriteIcon,
} from '../../../icons';
import { CartIconType, IconsSectionType } from '../definitions/types';

export function IconsSection(props: IconsSectionType) {
  const { isFavoriteProduct } = props;
  return (
    <Box display={'flex'} gap={2}>
      <SvgIcon
        component={isFavoriteProduct ? FavoriteFilledIcon : FavoriteIcon}
        sx={{ color: isFavoriteProduct ? '#d32f2f' : 'grey' }}
        inheritViewBox
      />
      <SvgIcon component={FactsSoft} sx={{ color: 'grey' }} inheritViewBox />
    </Box>
  );
}

export default function CartIconSection(props: CartIconType) {
  const { cartCount } = props;
  return (
    <Badge badgeContent={cartCount} color="error">
      <SvgIcon component={CartIcon} sx={{ color: 'grey' }} inheritViewBox />
    </Badge>
  );
}
