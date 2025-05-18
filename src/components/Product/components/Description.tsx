import { Box, Link, Typography } from '@mui/material';
import { DescriptionType } from '../definitions/types';

export default function Description(props: DescriptionType) {
  const { supplier_name, title, supplier_link } = props;
  return (
    <Box>
      <Typography variant="subtitle2" fontWeight={600}>
        {title}
      </Typography>
      <div>
        {`by `}
        <Link
          href={supplier_link}
          target="_blank"
          sx={{ textDecoration: 'none' }}
        >
          {supplier_name}
        </Link>
      </div>
    </Box>
  );
}
