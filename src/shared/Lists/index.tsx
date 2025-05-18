import { List, ListItem, Stack, Typography } from '@mui/material';
import { ListType } from './definitions/types';

export default function Lists(props: ListType) {
  const { list, title } = props;
  return (
    <Stack>
      {title && (
        <Typography variant="subtitle2" color="grey">
          {title}
        </Typography>
      )}
      <List sx={{ listStyleType: 'disc', pl: 2 }}>
        {list &&
          Object?.entries(list)?.map(([key, value]) => (
            <ListItem sx={{ display: 'list-item', py: 0 }} key={key}>
              <Stack direction={'row'} spacing={1}>
                <Typography variant="subtitle2" color="grey">
                  {key}:
                </Typography>
                <Typography color="black" variant="subtitle2">
                  {value}
                </Typography>
              </Stack>
            </ListItem>
          ))}
      </List>
    </Stack>
  );
}
