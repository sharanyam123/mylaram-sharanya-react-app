import { Box, Stack } from '@mui/material';
import Description from './components/Description';
import PriceDetails from './components/PriceDetails';
import { StarRating } from '../../shared';
import ImageSection from './components/ImageSection';
import useProduct from './hooks/useProduct';
import './styles/index.scss';
import ForwardedContainer from '../../shared/CartContainer';

export default function () {
  const { descriptionData, images, priceDetailsData, stars, cartRef } =
    useProduct();

  return (
    <Box className="productSection">
      <ImageSection images={images} />
      <Stack justifyContent={'space-between'}>
        <Stack spacing={2} mb={2}>
          <Description {...descriptionData} />
          <StarRating stars={stars} />
          <PriceDetails {...priceDetailsData} />
        </Stack>
        <ForwardedContainer ref={cartRef} />
      </Stack>
    </Box>
  );
}
