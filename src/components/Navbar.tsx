import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { FC } from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import { MenuList } from '@mui/material';
import { CloseRounded } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  border: '1px solid',
  borderColor: theme.palette.divider,
  padding: '8px 12px',
}));

export const Navbar: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggleDrawer = (newValue: boolean) => () => setOpen(newValue);

  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        mt: '28px',
      }}
    >
      <Container maxWidth="xl">
        <StyledToolbar>
          <Typography variant="h6" sx={{ color: '#5d8aa8' }}>
            Самые высокие здания и сооружения
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button variant="contained" color="info" size="medium">
              Главная
            </Button>
            <Button color="info" size="medium">
              Список зданий
            </Button>
            <Button color="info" size="medium">
              Контакты
            </Button>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>

            <Drawer anchor="top" onClose={toggleDrawer(false)} open={open}>
              <MenuList>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRounded />
                  </IconButton>
                </Box>
                <MenuItem> Главная </MenuItem>
                <MenuItem>Список зданий</MenuItem>
                <MenuItem>Контакты</MenuItem>
              </MenuList>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};
