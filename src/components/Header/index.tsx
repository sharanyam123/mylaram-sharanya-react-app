import { AppBar, Divider, Stack } from '@mui/material';
import Description from './components/Description';
import CartIconSection, { IconsSection } from './components/Icons';
import useHeader from './hooks/useHeader';
import './styles/index.scss';

export default function () {
  const { cartCount, title, favorites, id, trigger, showCartInHeader } =
    useHeader();

  return (
    <>
      {title && (
        <AppBar
          color={'transparent'}
          position="sticky"
          className="header"
          sx={{
            borderBottom: trigger ? 'none' : '0.5px solid lightgrey',
            boxShadow: trigger ? '0px 4px 8px rgba(0, 0, 0, 0.15)' : 'none',
          }}
        >
          <Description title={title} showCartInHeader={showCartInHeader} />
          <Stack direction={'row'}>
            <IconsSection favorites={favorites} id={id} />
            <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
            <CartIconSection cartCount={cartCount} />
          </Stack>
        </AppBar>
      )}
    </>
  );
}
