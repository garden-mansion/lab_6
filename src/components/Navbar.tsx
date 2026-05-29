import AppBar from '@mui/material/AppBar';
import type { FC } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import { MenuList } from '@mui/material';
import { CloseRounded } from '@mui/icons-material';
import { StyledToolbar } from './StyledToolbar';
import { NavbarButton } from './NavbarButton';
import { Link } from 'react-router-dom';

interface NavItem {
  label: string;
  path: string;
}

interface NavbarProps {
  active: number;
  navItems: NavItem[];
}

export const Navbar: FC<NavbarProps> = ({ active, navItems }) => {
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
            {navItems.map((item, index) => (
              <NavbarButton
                key={index}
                isActive={index === active}
                to={item.path}
              >
                {item.label}
              </NavbarButton>
            ))}
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
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    onClick={toggleDrawer(false)}
                  >
                    <MenuItem selected={index === active}>
                      {item.label}
                    </MenuItem>
                  </Link>
                ))}
              </MenuList>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};
