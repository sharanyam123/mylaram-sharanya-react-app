import { Link, Stack, SvgIcon, Typography } from '@mui/material';
import { AttachmentType } from '../definitions/types';
import { AttachmentIcon } from '../../../icons';
import React from 'react';

export default function Attachments(props: AttachmentType) {
  const { attachments } = props;
  return (
    <Stack>
      <Typography variant="subtitle2" color="grey">
        Attachments
      </Typography>
      {attachments?.map((attach, index) => (
        <React.Fragment key={index}>
          <Stack direction={'row'} spacing={1} mt={1}>
            <SvgIcon
              component={AttachmentIcon}
              inheritViewBox
              fontSize="small"
            />
            <Link
              href={attach?.file_link}
              target={'_blank'}
              sx={{ textDecoration: 'none' }}
            >
              {attach?.file_label}
            </Link>
          </Stack>
        </React.Fragment>
      ))}
    </Stack>
  );
}
