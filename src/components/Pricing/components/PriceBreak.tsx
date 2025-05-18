import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Stack,
  Divider,
} from '@mui/material';
import { PriceBreakType } from '../definitions/types';

export default function PriceBreak(props: PriceBreakType) {
  const { priceBreaks } = props;
  return (
    <Stack>
      <Typography variant="subtitle2" color="grey" mb={1}>
        Price breaks
      </Typography>
      <Divider />
      {priceBreaks && (
        <TableContainer className="priceBreakTable">
          <Table>
            <TableBody>
              {Object?.entries(priceBreaks)?.map(([key, value], index) => (
                <TableRow key={index}>
                  <TableCell>{key}</TableCell>
                  <TableCell>{value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Stack>
  );
}
