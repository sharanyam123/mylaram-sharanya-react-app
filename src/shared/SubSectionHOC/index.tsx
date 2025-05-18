import { Divider, Stack, Typography } from '@mui/material';
import { HOCPropType } from './definitions/types';
import { ComponentType } from 'react';

export default function SubSectionHOC<P extends object>(
  WrappedComponent: ComponentType<P>
) {
  return (props: P & HOCPropType) => {
    const { title, ...rest } = props;

    return (
      <Stack bgcolor="white" p={2} spacing={2}>
        <Typography variant="h5" color="error">
          {title}
        </Typography>
        <Divider />
        <WrappedComponent {...(rest as P)} />
      </Stack>
    );
  };
}
