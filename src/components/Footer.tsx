import type { FC } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export const Footer: FC = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          padding: '0.5rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'lightgrey',
        }}
      >
        <Typography variant="h6">made by Kon Vladislav</Typography>
      </Box>
    </Container>
  );
};
