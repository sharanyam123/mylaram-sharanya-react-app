import { Box, Typography } from '@mui/material';
import useDescription from './hooks/useDescription';

export default function () {
  const { description_long, description_short } = useDescription();
  return (
    <Box>
      <Typography variant="h5" color="error">
        DESCRIPTION
      </Typography>
      <Typography variant="subtitle2" mb={1}>
        {description_long}
      </Typography>
      <Typography variant="subtitle2">{description_short}</Typography>
    </Box>
  );
}
