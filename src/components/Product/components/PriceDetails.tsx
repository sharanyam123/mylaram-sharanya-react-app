import { Box, SvgIcon, Typography } from '@mui/material';
import { PriceDetailsType } from '../definitions/types';
import { formatPrice } from '../../../helpers';
import { DiscountIcon } from '../../../icons';

export default function PriceDetails(props: PriceDetailsType) {
  const { price, currency, transport_costs, vat_percent } = props;
  return (
    <div>
      <Box display={'flex'} gap={1}>
        <Typography variant="subtitle2" fontWeight={600}>
          {formatPrice(price, currency)}
        </Typography>
        <Typography variant="subtitle2" fontWeight={500} color="grey">
          {` + ${formatPrice(transport_costs, currency)} shipping`}
        </Typography>
        <SvgIcon fontSize={'small'}>
          <DiscountIcon />
        </SvgIcon>
      </Box>
      <Typography variant="subtitle2" fontWeight={500} color="grey">
        {`all prices incl. ${vat_percent}% taxes`}
      </Typography>
    </div>
  );
}
