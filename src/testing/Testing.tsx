import type { FC } from 'react';
import { Quiz } from './components/Quiz';
import { Box } from '@mui/material';
import { Navbar } from '../components/Navbar';
import { NAV_ITEMS } from '../navItems';

export const Testing: FC = () => {
  return (
    <Box>
      <Navbar active={3} navItems={NAV_ITEMS} />
      <Quiz />
    </Box>
  );
};
