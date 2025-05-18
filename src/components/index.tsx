import Header from './Header';
import Product from './Product';
import Description from './Description';
import { Box, CircularProgress, Stack } from '@mui/material';
import Details from './Details';
import Pricing from './Pricing';
import useMain from '../hooks/useMain';

export default function Main() {
  const { isLoaded } = useMain();

  return (
    <>
      {isLoaded ? (
        <Stack spacing={5}>
          <Header />
          <Product />
          <Stack bgcolor={'lightgrey'} px={2} py={3}>
            <Description />
            <Box
              display={'flex'}
              gap={2}
              mt={2}
              sx={{ '& > *': { flex: 1 } }}
              flexWrap={'wrap'}
            >
              <Details title="DETAILS" />
              <Pricing title="PRICING & SHIPPING" />
            </Box>
          </Stack>
        </Stack>
      ) : (
        <CircularProgress />
      )}
    </>
  );
}
