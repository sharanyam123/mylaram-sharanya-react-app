import { Chip, Stack, Typography } from '@mui/material';
import { KeywordType } from '../definitions/types';

export default function Keywords(props: KeywordType) {
  const { keywords } = props;
  return (
    <Stack>
      <Typography variant="subtitle2" color="grey">
        Keywords
      </Typography>
      <Stack direction={'row'} spacing={1} mt={1}>
        {keywords?.map((word, index) => (
          <Chip
            key={index}
            label={word}
            sx={{ color: 'white', bgcolor: 'grey' }}
          />
        ))}
      </Stack>
    </Stack>
  );
}
