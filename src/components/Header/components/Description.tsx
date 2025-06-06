import { Typography } from '@mui/material';
import { DescriptionType } from '../definitions/types';
import { ForwardedContainer } from '../../../shared';

export default function Description(props: DescriptionType) {
  const { title, showCartInHeader } = props;

  return (
    <>
      <Typography color="red">{title}</Typography>
      {showCartInHeader && <ForwardedContainer />}
    </>
  );
}
