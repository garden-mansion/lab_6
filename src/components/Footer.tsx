import type { FC } from 'react';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import { StyledToolbar } from './StyledToolbar';

export const Footer: FC = () => {
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
        <StyledToolbar sx={{ justifyContent: 'center' }}>
          <Typography variant="h6" sx={{ color: '#5d8aa8' }}>
            made by Kon Vladislav
          </Typography>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};
